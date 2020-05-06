import request from '@/utils/request';
import { TableListParams, TableListItem, TableListItemParams } from './data.d';

export async function queryRule(params?: TableListParams) {
  return request('/poetry/list', {
    params,
  });
}

export async function removeRule(params: { ids: number[] }) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params: TableListItem) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateRule(params: TableListItemParams) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}
