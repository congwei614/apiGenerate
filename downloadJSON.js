/*
 * @Author: Mr.Cong Wei
 * @Date: 2023-04-19 19:36:57
 * @LastEditTime: 2023-04-19 19:53:04
 */
const Axios = require("axios");
const { createWriteStream } = require("node:fs");
const stream = require("stream");
const { promisify } = require("util");

const finished = promisify(stream.finished);

module.exports = async function downloadJSON(fileUrl, outputLocationPath) {
  // TODO
  // 如果outputLocationPath路径不存在，会报错，需要检查存在文件、是否创建
  const writer = createWriteStream(outputLocationPath);
  return Axios({
    method: "get",
    url: fileUrl,
    responseType: "stream",
  }).then(async (response) => {
    response.data.pipe(writer);
    return finished(writer); //this is a Promise
  });
};
// downloadJSON("https://gateway.nacho.cn/mc/v1/swagger.json", "./1.json");
