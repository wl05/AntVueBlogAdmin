import _request from '@/utils/request'

export function login(email, password) {
    return _request.post('/login', {email, password})
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
