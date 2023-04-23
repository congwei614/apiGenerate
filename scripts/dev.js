/*
 * @Author: Mr.Cong Wei
 * @Date: 2023-04-22 13:25:34
 * @LastEditTime: 2023-04-23 21:49:16
 */

import { $ } from 'execa';
import { resolve } from 'node:path';

function pathResolve(dir) {
  return resolve(process.cwd(), '.', dir);
}

run();
async function run() {
  const distPath = pathResolve('dist/index.js');

  await $`pnpm run run`;
  // TODO
  // Run dist/index
}
