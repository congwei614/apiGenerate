/*
 * @Author: Mr.Cong Wei
 * @Date: 2023-04-22 13:21:25
 * @LastEditTime: 2023-04-22 13:23:45
 */
import { resolve } from 'node:path';

export function pathResolve(dir: string) {
    return resolve(process.cwd(), '.', dir);
}
