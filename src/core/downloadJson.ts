/*
 * @Author: Mr.Cong Wei
 * @Date: 2023-04-22 12:01:44
 * @LastEditTime: 2023-05-05 20:39:53
 */

import axios from 'axios';
import { createWriteStream } from 'node:fs';
import { errHandle, successHandle } from '../share/log';
import { __filename, __dirname } from '../share/path';

async function downloadJSON(fileUrl: string, outputLocationPath: string) {
    // TODO
    // 如果outputLocationPath路径不存在，会报错，需要检查存在文件、是否创建
    const writer = createWriteStream(outputLocationPath);
    try {
        const response = await axios({
            url: fileUrl,
            method: 'GET',
            responseType: 'stream'
        });

        response.data.pipe(writer);
    } catch (error) {
        errHandle('下载失败！', error.toJSON().message, __filename(import.meta.url));
    }

    return new Promise<void>((resolve, reject) => {
        writer.on('finish', () => {
            successHandle(
                `文件保存成功！路径为:${__dirname + outputLocationPath}`,
                __filename(import.meta.url)
            );
            resolve();
        });
        writer.on('error', (error) => {
            errHandle('文件保存失败！', error, __filename(import.meta.url));
            reject();
        });
    });
}
export default downloadJSON;
