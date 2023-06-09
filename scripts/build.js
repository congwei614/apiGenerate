/*
 * @Author: Mr.Cong Wei
 * @Date: 2023-04-22 13:25:34
 * @LastEditTime: 2023-04-23 21:34:17
 */

import { $ } from 'execa';
import { resolve, join } from 'node:path';
import fsExtra from 'fs-extra';

function pathResolve(dir) {
  return resolve(process.cwd(), '.', dir);
}

run();
async function run() {
  // run tsc

  const distPath = pathResolve('dist');

  // 如果文件夹存在则清空其中的内容，否则创建文件夹
  if (fsExtra.existsSync(distPath)) {
    fsExtra.emptyDirSync(distPath);
  } else {
    fsExtra.ensureDirSync(distPath);
  }

  await $`tsc`;
  await $`tsup`;
}
