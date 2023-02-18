import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { usernameExists } from './usernameExists';
import { emailExists } from './emailExists';

// makeUser - makes a new user in our database in format (username, password, email). Returns true if success, false if failure
// makeUser("newcoolusername","test31","awesome@gmail.com")
// - makes a user named newcoolusername, sets password to test31, and email to awesome@gmail.com
// By default, does NOT allow for duplicate usernames or reused emails
const userDBFormat = '<usr>{},<psw>{},<eml>{}\n';

function makeUser(username: string, password: string, email: string): boolean {
  if (usernameExists(username)) {
    return false; // Can't have duplicate usernames!
  }

  if (emailExists(email)) {
    return false; // Don't want multiple accounts on one email of course
  }

  let userDataPath = path.resolve(__dirname, `./user-data.csv`)

  fs.appendFileSync(userDataPath, userDBFormat.replace('{}', username).replace('{}', password).replace('{}', email));

  return true;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<unknown>) {
    const { username, password, email } = req.query;
    let userDataPath = path.resolve(__dirname, `./user-data.csv`)

    if (!email || !username || !password) {
        res.status(400).json({ error: 'missing paramater' });
        return;
    }

    if (!fs.existsSync(userDataPath)) {
        fs.writeFileSync(userDataPath, '');
        console.log(`created users storage file for all users`);
    }

    let newUser = makeUser(username as string, password as string, email as string)

    res.status(200).json({ newUserStatus: newUser })
}