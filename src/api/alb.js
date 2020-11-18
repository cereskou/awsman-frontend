import request from '@/utils/request'

export function getElbList(query) {
  return request({
    url: '/elbv2/listelb',
    method: 'get',
    params: query
  })
}

export function getListeners(query) {
  return request({
    url: '/elbv2/listeners',
    method: 'get',
    params: query
  })
}

export function getRules(query) {
  return request({
    url: '/elbv2/rules',
    method: 'get',
    params: query
  })
}
