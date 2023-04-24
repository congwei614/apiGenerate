/*
 * @Author: Mr.Cong Wei
 * @Date: 2023-04-24 21:15:44
 * @LastEditTime: 2023-04-24 21:45:41
 */
import chalk from 'chalk';
export function errHandle(message: string, error: any, path: string) {
    console.log(`
    Message:${chalk.red(message)} \n
    Error: ${chalk.red(error)} \n
    Path: ${chalk.red(path)}
    `);
}

export function successHandle(message: string, path: string) {
    // TODO
    // 支持传入数组，实现动态多行信息提示
    console.log(`
    Message:${chalk.blue(message)} \n
    Path: ${chalk.blue(path)}
    `);
    // throw Error(chalk.red(message));
}
