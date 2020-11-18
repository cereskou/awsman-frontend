import request from '@/utils/request'

export function getEventList(query) {
  return request({
    url: '/cloudtrail/events',
    method: 'get',
    params: query
  })
}
