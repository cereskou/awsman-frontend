import request from '@/utils/request'

export function getRepositories(query) {
  return request({
    url: '/code/codecommit/repositories',
    method: 'get',
    params: query
  })
}
