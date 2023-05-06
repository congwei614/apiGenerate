/*
 * @Author: Mr.Cong Wei
 * @Date: 2023-05-05 19:49:13
 * @LastEditTime: 2023-05-06 21:03:31
 */
import { isString } from '../share/is';
import type { Components } from '../types/openAPI';
export default class GenerateTs {
    private components: Components;
    public result: any = {};
    constructor(components: Components) {
        this.components = components;
        this.init(this.components);
    }
    private init(components: Components) {
        if (!isString(components.schemas)) {
            components.schemas = this.filterSchemasKey(components);
            this.formatSchemas(components);
        }
    }

    // 去除不合法键
    public filterSchemasKey({ schemas }: Components) {
        if (isString(schemas) || '$ref' in schemas) return schemas;
        const tempSchemas = {};
        const schemasRegex = new RegExp(/^[a-zA-Z0-9.-_]+$/);
        for (const key in schemas) {
            if (schemasRegex.test(key)) {
                tempSchemas[key] = schemas[key];
            }
        }
        return tempSchemas;
    }

    // 格式化的键
    public formatSchemas({ schemas }: Components) {
        if (isString(schemas) || '$ref' in schemas) return undefined;
        for (const key in schemas) {
            const formatKey = this.splitAndUppercase(key);
            // TODO
            // 生成将对应的数据生成type对象并写入文件
            this.result[formatKey] = undefined;
        }
        console.log(this.result);
    }

    // 将键使用._-分割，并将将分割内容首字母大写，最后拼接一起
    private splitAndUppercase(str: string): string {
        const regex = /[._-]/;
        const words = str.split(regex);
        return words.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join('');
    }
}
