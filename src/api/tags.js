import _request from '@/utils/request'

export function create(name) {
  return _request.post('/tags', { name })
}

export function getList() {
  return _request.get('/tags')
}

export function deleteTag(id) {
  return _request.delete(`/tags/${id}`)
}

export function updateTag(id, name) {
  return _request.put(`/tags/${id}`, { name })
}
