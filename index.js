const fs = require("fs");
const path = require("path");
const SwaggerParser = require("@apidevtools/swagger-parser");
const downloadJSON = require("./downloadJSON");
// api接口方法存放目录1
const API_PATH = path.resolve(__dirname, "./src/proxy");

//#region method
/**
 * 1、检测接口存放目录是否存在，如果不存在生成文件
 * 2、检测配置文件，如果没有生成配置文件
 * */
const isExist = (lastPath = "") => {
  // 默认路径
  const privatePath = `${lastPath ? API_PATH : API_PATH}`;
  // 检测proxy文件夹是否存在
  const stat = fs.existsSync(privatePath);
  if (!stat) {
    // 如果不存在创建文件夹
    // recursive:递归创建文件
    // 如果创建文件目录的上级也不存在，recursive为false会报错
    fs.mkdirSync(privatePath, { recursive: true });
  }
  if (!lastPath) {
    // 检测配置文件，如果没有生成配置文件
    const configPath = `${API_PATH}/generate-proxy.json`;
    // 检测文件是否存在。
    // ！！！ 根据文档提示，在调用 fs.open()、fs.readFile() 或 fs.writeFile() 之前，不要使用 fs.access() 检查文件的可访问性。（未处理）
    fs.access(configPath, function (err) {
      // ENOENT 错误标识没有文件或者目录
      if (err && err.code === "ENOENT") {
        fs.writeFileSync(
          `${API_PATH}/generate-proxy.json`,
          `{"ignore":["api-definition"]}`
        );
      }
    });
  }
};

/**
 * 移除名称中包含的Async
 * */
function formatPathName(name) {
  if (!name) return ""
  return name.replace("Async", "");
}
/**
 * 获取地址中的param参数，并作接口参数返回
*/
function urlParam(url) {
  const pars = url.match(/\{(.+?)\}/g); // 被花括号包裹的内容
  if (pars) {
    let temp = "";
    for (let par of pars) {
      par = par.replace("{", "").replace("}", "");
      temp = temp + `${par}: string, `;
    }
    return temp;
  }

  return undefined;
}

/**
 * 根据配置文件，忽略配置的接口信息
*/
function ignoreApi(fileName) {
  var temp = fs.readFileSync(`${API_PATH}/generate-proxy.json`, "utf-8");
  const json = JSON.parse(temp);
  const ignores = json?.ignore;
  if (ignores && ignores.length > 0) {
    for (const ignore of ignores) {
      if (ignore === fileName) {
        return false;
      }
    }
  }

  return true;
}

/**
 * 将生成的模块写入到文件中
*/
const getModules = (map) => {
  map.forEach((value, key) => {
    if (ignoreApi(key)) {
      writeFileApi(key, value);
    }
  });
};
//#endregion

// 写入接口
const writeFileApi = (fileName, apiData) => {
  // index.ts 请求的api方法
  let tplIndex = "import restService from '@util/rest.service';\n";

  const apiDataLen = apiData.length;
  for (let i = 0; i < apiDataLen; i++) {
    const item = apiData[i];

    const itemKeys = Object.keys(item); // 请求方法

    for (const itemTagKey of itemKeys) {
      if (itemTagKey === "allPath") {
        break;
      }
      const itemKeysFirest = item[itemTagKey];
      const pathName = formatPathName(itemKeysFirest.operationId);
      let allPath = "'" + item.allPath + "'";
      const param = urlParam(allPath);
      if (param) {
        allPath = "`" + item.allPath.replace(/{/g, "${") + "`";
      }

      tplIndex =
        `${tplIndex}\n// ${itemKeysFirest.summary?.replace(/\r\n/g, "") || ""
        }\n` +
        `export const ${pathName} = (${param ?? ""}params?: any) => {\n` +
        `	return restService.${itemTagKey}(${allPath}, params);\n};`;
    }
  }

  fs.writeFileSync(`${API_PATH}/${fileName}.ts`, tplIndex);
};

// 执行
const _start = async () => {
  isExist();
  try {
    // tips:可以直接传入api路径
    const parsed = await SwaggerParser.parse(`${API_PATH}/swagger.json`);
    const paths = parsed.paths;
    const pathsKeys = Object.keys(paths); // 获取url路径
    const pathsKeysLen = pathsKeys.length;
    const modulesMap = new Map();
    for (let i = 0; i < pathsKeysLen; i++) {
      const item = pathsKeys[i];
      const itemAry = item.split("/");
      const pathsItem = paths[item];
      let fileName = itemAry[3];
      if (!fileName) continue;
      fileName = fileName.toLowerCase();
      // 创建模块目录
      isExist(fileName);
      // 完整路径
      pathsItem.allPath = item;
      if (modulesMap.has(fileName)) {
        const fileNameAry = modulesMap.get(fileName);
        fileNameAry.push(pathsItem);
        modulesMap.set(fileName, fileNameAry);
      } else {
        modulesMap.set(fileName, [pathsItem]);
      }
    }
    getModules(modulesMap);

    fs.unlinkSync(`${API_PATH}/swagger.json`);
  } catch (e) {
    console.log(e);
  }
};

isExist();

// 下载json文件
downloadJSON(
  "https://gateway.nacho.cn/mc/v1/swagger.json",
  `${API_PATH}/swagger.json`
).then(() => {
  _start();
}).catch(_e => {
  console.log(_e, 'downloadJSON');
  // TODO
  // 文件下载失败
})
