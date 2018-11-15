import { login, logout, getInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
    namespaced : true,
    state : {
        token : getToken(),
        name : '',
        avatar : '',
        role : '' // 普通权限都为0，目前角色只有admin 1
    },
    
    mutations : {
        SET_TOKEN : (state, token) => {
            state.token = token
        },
        SET_NAME : (state, name) => {
            state.name = name
        },
        SET_AVATAR : (state, avatar) => {
            state.avatar = avatar
        },
        SET_ROLES : (state, role) => {
            state.role = role
        },
        LOGOUT : (state, role) => {
            state.token = ''
            state.role = ''
            removeToken()
            location.reload()
        }
    },
    
    actions : {
        // 登录
        Login ({commit}, userInfo) {
            const username = userInfo.username.trim()
            return new Promise((resolve, reject) => {
                login(username, userInfo.password).then(response => {
                    const data = response.data
                    if (data.code) {
                        reject()
                    } else {
                        setToken(data.data.token)
                        commit('SET_TOKEN', data.data.token)
                        resolve()
                    }
                }).catch(error => {
                    reject(error)
                })
            })
        },
        
        // 获取用户信息
        GetInfo ({commit, state}) {
            return new Promise((resolve, reject) => {
                getInfo().then(response => {
                    const data = response.data
                    commit('SET_ROLES', data.role)
                    commit('SET_NAME', data.name)
                    commit('SET_AVATAR', data.avatar)
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        
        
        // 前端 登出
        FedLogOut ({commit}) {
            return new Promise(resolve => {
                commit('SET_TOKEN', '')
                removeToken()
                resolve()
            })
        }
    }
}

export default user
