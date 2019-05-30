import _request from '@/utils/request'

<<<<<<< HEAD
export function fetchArticle(params) {
  return _request.get('/articles', params)
}

export function getArticleDetail(id) {
  return _request.get(`/articles/${id}`)
}

export function createArticle(data) {
  return _request.post('/articles', data)
}

export function updateArticle(id, data) {
  return _request.put(`/articles/${id}`, data)
}

export function deleteArticle(id) {
  return _request.delete(`/articles/${id}`)
}
=======
export function fetchArticle (params) {
    
    return _request.get('/articles', params)
}

export function getArticleDetail (id) {
    return _request.get(`/articles/${id}`)
}

export function createArticle (data) {
    return _request.post('/articles', data)
}

export function updateArticle (id, data) {
    return _request.put(`/articles/${id}`, data)
}

export function deleteArticle (id) {
    return _request.delete(`/articles/${id}`)
}

>>>>>>> 9e926002056326cce2bd476a6c8b23e9592204b7
