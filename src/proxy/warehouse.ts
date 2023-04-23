import restService from '@util/rest.service';

// 新增仓库
export const Create = (params?: any) => {
    return restService.post('/api/mc-management/warehouse', params);
};
// 获取仓库列表
export const GetList = (params?: any) => {
    return restService.get('/api/mc-management/warehouse', params);
};
// 删除仓库
export const Delete = (id: string, params?: any) => {
    return restService.delete(`/api/mc-management/warehouse/${id}`, params);
};
// 获取仓库明细
export const Get = (id: string, params?: any) => {
    return restService.get(`/api/mc-management/warehouse/${id}`, params);
};
// 更新仓库
export const Update = (id: string, params?: any) => {
    return restService.put(`/api/mc-management/warehouse/${id}`, params);
};
// 获取仓库下拉框
export const GeOptions = (params?: any) => {
    return restService.get('/api/mc-management/warehouse/options', params);
};
// 获取所有仓库
export const GetAllList = (params?: any) => {
    return restService.get('/api/mc-management/warehouse/all-list', params);
};
