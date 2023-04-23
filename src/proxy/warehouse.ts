/*
 * @Author: Mr.Cong Wei
 * @Date: 2023-04-22 11:53:40
 * @LastEditTime: 2023-04-23 21:50:38
 */
import restService from '@util/rest.service';
type Params = Record<string, string>;

// 新增仓库
export const Create = (params: Params) => {
    return restService.post('/api/mc-management/warehouse', params);
};
// 获取仓库列表
export const GetList = (params: Params) => {
    return restService.get('/api/mc-management/warehouse', params);
};
// 删除仓库
export const Delete = (id: string, params: Params) => {
    return restService.delete(`/api/mc-management/warehouse/${id}`, params);
};
// 获取仓库明细
export const Get = (id: string, params: Params) => {
    return restService.get(`/api/mc-management/warehouse/${id}`, params);
};
// 更新仓库
export const Update = (id: string, params: Params) => {
    return restService.put(`/api/mc-management/warehouse/${id}`, params);
};
// 获取仓库下拉框
export const GeOptions = (params: Params) => {
    return restService.get('/api/mc-management/warehouse/options', params);
};
// 获取所有仓库
export const GetAllList = (params: Params) => {
    return restService.get('/api/mc-management/warehouse/all-list', params);
};
