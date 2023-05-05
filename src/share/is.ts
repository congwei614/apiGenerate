/*
 * @Author: Mr.Cong Wei
 * @Date: 2023-05-05 20:57:20
 * @LastEditTime: 2023-05-05 20:59:35
 */
/*
 * @Author: Mr.Cong Wei
 * @Date: 2023-05-05 20:57:20
 * @LastEditTime: 2023-05-05 20:59:19
 */
import { toString } from './cache';

export function getTag(value) {
    if (value === null) {
        return value === undefined ? '[object Undefined]' : '[object Null]';
    }
    return toString.call(value);
}

export function isString(value) {
    const type = typeof value;
    return (
        type === 'string' ||
        (type === 'object' &&
            value !== null &&
            !Array.isArray(value) &&
            getTag(value) === '[object String]')
    );
}
