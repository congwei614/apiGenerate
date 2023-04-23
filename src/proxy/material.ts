/*
 * @Author: Mr.Cong Wei
 * @Date: 2023-04-22 11:53:40
 * @LastEditTime: 2023-04-23 20:56:44
 */
import restService from '@util/rest.service';
type Params = Record<string, string>;

// 创建材料料规格类型1
export const Create = (params: Params) => {
    return restService.post('/api/mc-management/material', params);
};
// 获取材料料规格类型列表
export const GetList = (params: Params) => {
    return restService.get('/api/mc-management/material', params);
};
// 删除材料规格类型
export const Delete = (id: string, params: Params) => {
    return restService.delete(`/api/mc-management/material/${id}`, params);
};
// 获取材料料规格类型明细
export const Get = (id: string, params: Params) => {
    return restService.get(`/api/mc-management/material/${id}`, params);
};
// 更新材料料规格类型信息
export const Update = (id: string, params: Params) => {
    return restService.put(`/api/mc-management/material/${id}`, params);
};
// 获取所有的材料料规格类型列表(导出excel)
export const GetAllMaterials = (params: Params) => {
    return restService.get('/api/mc-management/material/all', params);
};
// 获取材料选项集合(下拉框)
export const GetMaterialOptions = (params: Params) => {
    return restService.get('/api/mc-management/material/options', params);
};
