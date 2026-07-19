import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({
    path: path.resolve(__dirname, '.env')
});

export class ConfigReader {

    static get(key: string): string {
        const value = process.env[key];

        if (!value) {
            throw new Error(`Configuration key '${key}' not found.`);
        }

        return value;
    }

}