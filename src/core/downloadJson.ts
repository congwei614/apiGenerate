/*
 * @Author: Mr.Cong Wei
 * @Date: 2023-04-22 12:01:44
 * @LastEditTime: 2023-04-24 21:42:44
 */

import axios from 'axios';
import { createWriteStream } from 'node:fs';
import stream from 'stream';
import { promisify } from 'node:util';
import { errHandle, successHandle } from '../share/log';
import { __filename, __dirname } from '../share/path';
const finished = promisify(stream.finished);

async function downloadJSON(fileUrl: string, outputLocationPath: string) {
    // TODO
    // 如果outputLocationPath路径不存在，会报错，需要检查存在文件、是否创建
    const writer = createWriteStream(outputLocationPath);
    writer.close((error) => {
        if (error) {
            errHandle('下载失败！', error, __filename(import.meta.url));
        } else {
            successHandle(
                `下载成功！路径为:${__dirname + outputLocationPath}`,
                __filename(import.meta.url)
            );
        }
    });
    return axios({
        method: 'get',
        url: fileUrl,
        responseType: 'stream'
    })
        .then(async (response) => {
            response.data.pipe(writer);
            return finished(writer); //this is a Promise
        })
        .catch((error) => {
            errHandle('下载失败！', error.toJSON().message, __filename(import.meta.url));
        });
}
export default downloadJSON;
