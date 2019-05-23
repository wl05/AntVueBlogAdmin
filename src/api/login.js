<<<<<<< HEAD
import _request from '@/utils/request'

export function login(name, password) {
  return _request.post('/login', { name, password })
}

export function getInfo() {
  return _request.get('/user')
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post',
  })
}
=======

import _request from '@/utils/request'

export function login (name, password) {
    return _request.post('/login', {name, password})
}

export function getInfo () {
    return _request.get('/user')
}

export function logout () {
    return request({
        url : '/user/logout',
        method : 'post'
    })
}
>>>>>>> 9e926002056326cce2bd476a6c8b23e9592204b7
