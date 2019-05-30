import Cookies from 'js-cookie'

const TokenKey = 'token'

<<<<<<< HEAD
export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
=======
export function getToken () {
    return Cookies.get(TokenKey)
}

export function setToken (token) {
    return Cookies.set(TokenKey, token)
}

export function removeToken () {
    return Cookies.remove(TokenKey)
>>>>>>> 9e926002056326cce2bd476a6c8b23e9592204b7
}
