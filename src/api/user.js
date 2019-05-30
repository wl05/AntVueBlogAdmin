import _request from '@/utils/request'

<<<<<<< HEAD
export function update(id, name, password) {
  return _request.put(`/user`, { name, password, id })
}

export function getUserList() {
  return _request.get(`/users`)
=======
export function update (id, name, password) {
    return _request.put(`/user`, {name, password, id})
}

export function getUserList () {
    return _request.get(`/users`)
>>>>>>> 9e926002056326cce2bd476a6c8b23e9592204b7
}
