import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { usernameExists } from './usernameExists';

// getMessages - returns messages from username, False if nothing found. default is just recent message. optional parameters [queryStart int, queryEnd int]
// getMessages("meep") - example usage for recent chat
// getMessages("meep", 0, 5) - example usage for 5 recent chats
function getMessages(username: string, queryStart: number = 0, queryEnd: number = 1): string[] | boolean {
    if (!usernameExists(username)) return false;
  
    let userDataPath = path.resolve(__dirname, `./${username}-chats.csv`)
  
    if (!fs.existsSync(userDataPath)) fs.writeFileSync(userDataPath, "");
  
    const fileData = fs.readFileSync(userDataPath, "utf8");
  
    if (!fileData) return false;
  
    const textData = fileData.split(/\n/);
  
    return textData.slice(queryStart, queryEnd);
  }

export default function handler(req: NextApiRequest, res: NextApiResponse<unknown>) {
    const { username, queryStart, queryEnd } = req.query;

    let userDataPath = path.resolve(__dirname, `./${username}-chats.csv`)

    if (!username) {
        res.status(400).json({ error: 'no username paramater' });
        return;
    }

    if (!fs.existsSync(userDataPath)) {
        fs.writeFileSync(userDataPath, '');
        console.log(`created users storage file for all users`);
    }

    let userMessages = getMessages(username as string, parseInt(queryStart as string), parseInt(queryEnd as string))

    res.status(200).json({usrMessages : userMessages})
}