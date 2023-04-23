/*
 * @Author: Mr.Cong Wei
 * @Date: 2023-04-23 21:08:27
 * @LastEditTime: 2023-04-23 21:34:52
 */
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src/core/index.ts'],
  clean: true,
  dts: true,
  outDir: 'dist',
  format: ['esm']
});
