/*
 * @Author: Mr.Cong Wei
 * @Date: 2023-04-25 20:23:56
 * @LastEditTime: 2023-05-05 21:08:24
 */

interface Description {
    description?: string; // 描述
}

interface Information extends Description {
    summary?: string; // 描述
}

interface Info extends Description {
    title: string; // 应用名称
    version: string; // 版本
}

export interface Reference {
    $ref: string;
}

export interface Schemas {
    [key: string]: Schema;
}

export interface Schema extends Description {
    type?: string;
    enum?: any[];
    format?: string;
    properties?: (Schema | Reference)[];
}

interface Parameter extends Description {
    name: string;
    in: 'query' | 'header' | 'path' | 'cookie';
    required?: boolean; // 默认true
    style?: 'form' | 'simple'; // query,cookie -->form header,path -->simple
    schema?: Schema | Reference;
}

interface MediaType {
    schema: Reference | Schema;
}

interface RequestBody extends Description {
    content?: MediaType[];
    required?: boolean; // 默认false
}

interface Operation extends Information {
    tags?: string[];
    operationId?: string;
    parameters?: (Parameter | Reference)[];
    requestBody?: (RequestBody | Reference)[];
}

interface PathItem extends Information {
    $ref?: string;
    get?: Operation;
    put?: Operation;
    post?: Operation;
    delete?: Operation;
}

export interface Components extends Information {
    schemas?: Partial<Record<string, string | Schemas | Reference>>;
    parameters?: Partial<Record<string, string | Parameter[] | Reference>>;
    requestBodies?: Partial<Record<string, string | RequestBody[] | Reference>>;
}

interface Tag extends Description {
    name: string; // 名称
}

export interface OpenAPI {
    openapi: string; // 版本号
    info: Info;
    tags?: Tag;
    path: Partial<Record<string, PathItem>>;
    components?: Components;
}
