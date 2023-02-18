import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export function usernameExists(username: string): boolean {
    let filePath = path.resolve(__dirname, `./user-data.csv`)

    const textData: string[] = fs.readFileSync(filePath, 'utf-8').split(/\n|,/);

    let userFound = false;

    for (let word of textData) {
        const tag = word.substring(0, 5);

        if (tag === '<usr>') {
            const userEntered = word.substring(5);

            if (userEntered === username) {
                userFound = true;
                break;
            }
        }
    }

    return userFound;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<unknown>) {
    const { username } = req.query;
    let userDataPath = path.resolve(__dirname, `./user-data.csv`)

    if (!username) {
        res.status(400).json({ error: 'no username paramater' });
        return;
    }

    if (!fs.existsSync(userDataPath)) {
        fs.writeFileSync(userDataPath, '');
        console.log(`created users storage file for all users`);
    }

    let hasUsernameStatus = usernameExists(username as string)

    res.status(200).json({hasUsername : hasUsernameStatus})
}