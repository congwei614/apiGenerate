/*
 * @Author: Mr.Cong Wei
 * @Date: 2023-04-22 11:53:50
 * @LastEditTime: 2023-04-24 21:43:03
 */
import { pathResolve } from '../share/path';
import downloadJSON from './downloadJson';

console.log(pathResolve('swagger.json'));
downloadJSON('https//gateway.nacho.cn/mc/v1/swagger.json', './swagger.json');

export default pathResolve;
