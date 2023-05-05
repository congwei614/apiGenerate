/*
 * @Author: Mr.Cong Wei
 * @Date: 2023-04-22 11:53:50
 * @LastEditTime: 2023-05-05 20:42:31
 */
import downloadJSON from './downloadJson';
import GenerateTs from './generateTS';
import SwaggerParser from '@apidevtools/swagger-parser';
import { __dirname } from '../share/path';
import type { OpenAPI } from '../types/openAPI';

await downloadJSON('https://gateway.nacho.cn/mc/v1/swagger.json', './swagger.json');

const parsed: OpenAPI = await SwaggerParser.parse(`${__dirname}/swagger.json`);
new GenerateTs(parsed.components);
