/*
 * @Author: Mr.Cong Wei
 * @Date: 2023-04-22 11:53:40
 * @LastEditTime: 2023-04-23 21:49:57
 */
import restService from '@util/rest.service';
type Params = Record<string, string>;
// 新增材料分类
export const Create = (params: Params) => {
    return restService.post('/api/mc-management/material-category', params);
};
// 删除材料分类
export const Delete = (params: Params) => {
    return restService.delete('/api/mc-management/material-category', params);
};
// 获取材料分类列表
export const GetList = (params: Params) => {
    return restService.get('/api/mc-management/material-category', params);
};
// 获取材料分类明细
export const GetDetail = (id: string, params: Params) => {
    return restService.get(`/api/mc-management/material-category/${id}`, params);
};
// 更新材料分类
export const Update = (id: string, params: Params) => {
    return restService.put(`/api/mc-management/material-category/${id}`, params);
};
// 所有的材料分类
export const GetAllList = (params: Params) => {
    return restService.get('/api/mc-management/material-category/all', params);
};
// 获取所有的材料分类(用于选项或下拉框)
export const GetCategoriesOption = (params: Params) => {
    return restService.get('/api/mc-management/material-category/options', params);
};
// 根据父级获取子项分类
export const GetListByParentId = (params: Params) => {
    return restService.get('/api/mc-management/material-category/getby-parentid', params);
};
// 材料分类树形结构
export const GetMaterialCategoryTrees = (params: Params) => {
    return restService.get('/api/mc-management/material-category/tree', params);
};
