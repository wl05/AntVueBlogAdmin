import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import article from './modules/article'

Vue.use(Vuex)

const store = new Vuex.Store({
<<<<<<< HEAD
  modules: {
    app,
    user,
    article,
  },
=======
    modules : {
        app,
        user,
        article
    }
>>>>>>> 9e926002056326cce2bd476a6c8b23e9592204b7
})

export default store
