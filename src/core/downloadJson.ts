/*
 * @Author: Mr.Cong Wei
 * @Date: 2023-04-22 12:01:44
 * @LastEditTime: 2023-04-22 13:58:30
 */

import axios from 'axios';
import { createWriteStream } from 'node:fs';
import stream from 'stream';
import { promisify } from 'node:util';

const finished = promisify(stream.finished);

async function downloadJSON(fileUrl: string, outputLocationPath: string) {
    // TODO
    // 如果outputLocationPath路径不存在，会报错，需要检查存在文件、是否创建
    const writer = createWriteStream(outputLocationPath);
    return axios({
        method: 'get',
        url: fileUrl,
        responseType: 'stream'
    }).then(async (response) => {
        response.data.pipe(writer);
        return finished(writer); //this is a Promise
    });
}
downloadJSON('https://gateway.nacho.cn/mc/v1/swagger.json', './swagger.json');
module.exports = downloadJSON;
