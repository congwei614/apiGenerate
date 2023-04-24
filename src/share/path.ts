/*
 * @Author: Mr.Cong Wei
 * @Date: 2023-04-22 13:21:25
 * @LastEditTime: 2023-04-24 21:36:10
 */
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export function pathResolve(dir: string) {
    return resolve(process.cwd(), '.', dir);
}

export const __filename = fileURLToPath;
export const __dirname = process.cwd();
