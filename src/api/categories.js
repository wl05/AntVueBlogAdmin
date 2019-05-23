import _request from '@/utils/request'

export function create(name) {
  return _request.post('/categories', { name })
}

export function getCategories() {
  return _request.get('/categories')
}

export function deleteCategory(id) {
  return _request.delete(`/categories/${id}`)
}

export function update(id, name) {
  return _request.put(`/categories/${id}`, { name })
}
