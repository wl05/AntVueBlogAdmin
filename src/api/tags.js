import _request from '@/utils/request'

<<<<<<< HEAD
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
=======
export function create (name) {
    return _request.post('/tags', {name})
}

export function getList () {
    return _request.get('/tags')
}


export function deleteTag (id) {
    return _request.delete(`/tags/${id}`)
}

export function updateTag (id, name) {
    return _request.put(`/tags/${id}`, {name})
>>>>>>> 9e926002056326cce2bd476a6c8b23e9592204b7
}
