import restService from '@util/rest.service';

// 创建材料料规格类型
export const Create = (params?: any) => {
    return restService.post('/api/mc-management/material', params);
};
// 获取材料料规格类型列表
export const GetList = (params?: any) => {
    return restService.get('/api/mc-management/material', params);
};
// 删除材料规格类型
export const Delete = (id: string, params?: any) => {
    return restService.delete(`/api/mc-management/material/${id}`, params);
};
// 获取材料料规格类型明细
export const Get = (id: string, params?: any) => {
    return restService.get(`/api/mc-management/material/${id}`, params);
};
// 更新材料料规格类型信息
export const Update = (id: string, params?: any) => {
    return restService.put(`/api/mc-management/material/${id}`, params);
};
// 获取所有的材料料规格类型列表(导出excel)
export const GetAllMaterials = (params?: any) => {
    return restService.get('/api/mc-management/material/all', params);
};
// 获取材料选项集合(下拉框)
export const GetMaterialOptions = (params?: any) => {
    return restService.get('/api/mc-management/material/options', params);
};
