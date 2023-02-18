import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export function emailExists(email: string): boolean {
    let filePath = path.resolve(__dirname, `./user-data.csv`)

    const textData: string[] = fs.readFileSync(filePath, 'utf-8').split(/\n|,/);

    let emailFound = false;

    for (let word of textData) {
        const tag = word.substring(0, 5);

        if (tag === '<eml>') {
            const emailEntered = word.substring(5);

            if (emailEntered === email) {
                emailFound = true;
                break;
            }
        }
    }

    return emailFound;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<unknown>) {
    const { email } = req.query;
    let userDataPath = path.resolve(__dirname, `./user-data.csv`)

    if (!email) {
        res.status(400).json({ error: 'no email paramater' });
        return;
    }

    if (!fs.existsSync(userDataPath)) {
        fs.writeFileSync(userDataPath, '');
        console.log(`created users storage file for all users`);
    }

    let hasEmailStatus = emailExists(email as string)

    res.status(200).json({ hasEmail: hasEmailStatus })
}