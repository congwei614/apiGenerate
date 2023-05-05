/*
 * @Author: Mr.Cong Wei
 * @Date: 2023-05-05 19:49:13
 * @LastEditTime: 2023-05-05 21:13:48
 */
import { isString } from '../share/is';
import type { Components, Schemas } from '../types/openAPI';
export default class GenerateTs {
    private components: Components;
    constructor(components: Components) {
        this.components = components;
        this.init(this.components);
    }
    private init(components: Components) {
        if (!isString(components.schemas)) {
            // TODO
            // ts类型不匹配，要实现去除不合法键名
            // components.schemas = this.filterSchemasKey(components.schemas);
        }
        console.log(components.schemas);
    }
    public filterSchemasKey(schemas: Schemas) {
        if (isString(schemas)) return schemas;
        const tempSchemas = {};
        const schemasRegex = new RegExp(/^[a-zA-Z0-9.-_]+$/);
        for (const key in schemas) {
            if (schemasRegex.test(key)) {
                tempSchemas[key] = schemas[key];
            }
        }
        return tempSchemas;
    }
}
