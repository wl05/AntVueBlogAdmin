import _request from '@/utils/request'

export function update(id, name, password) {
  return _request.put(`/user`, { name, password, id })
}

export function getUserList() {
  return _request.get(`/users`)
}
