import { login } from '@/api/login'

const user = {
<<<<<<< HEAD
  namespaced: true,
  actions: {
    Create({ commit }, tag) {},
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password)
          .then(response => {
            const data = response.data
            setToken(data.token)
            commit('SET_TOKEN', data.token)
            resolve()
          })
          .catch(error => {
            reject(error)
          })
      })
    },
  },
=======
    namespaced : true,
    actions : {
        Create ({commit}, tag) {
        
        },
        // 登录
        Login ({commit}, userInfo) {
            const username = userInfo.username.trim()
            return new Promise((resolve, reject) => {
                login(username, userInfo.password).then(response => {
                    const data = response.data
                    setToken(data.token)
                    commit('SET_TOKEN', data.token)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
>>>>>>> 9e926002056326cce2bd476a6c8b23e9592204b7
}

export default user
