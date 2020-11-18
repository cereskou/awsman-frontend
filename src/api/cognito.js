import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/cognito/user/list',
    method: 'get',
    params: query
  })
}

export function enableUser(query) {
  return request({
    url: '/cognito/user/enable/' + query.uuid,
    method: 'post',
    params: query
  })
}

export function syncUser() {
  return request({
    url: '/cognito/user/sync',
    method: 'get'
  })
}

export function deleteUser(uuid) {
  return request({
    url: '/cognito/user/' + uuid,
    method: 'delete'
  })
}

export function updateUser(data) {
  return request({
    url: '/cognito/user/' + data.uuid,
    method: 'put',
    data
  })
}

export function createUser(data) {
  return request({
    url: '/cognito/user',
    method: 'post',
    data
  })
}

export function changePassword(data) {
  return request({
    url: '/cognito/user/setpassword/' + data.uuid,
    method: 'post',
    data
  })  
}

export function fecthSetting() {
  return request({
    url: '/cognito/setting',
    method: 'get'
  })
}

export function saveSetting(data){
  return request({
    url: '/cognito/setting',
    method: 'post',
    data
  })
}