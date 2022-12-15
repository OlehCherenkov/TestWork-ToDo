import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import todo from './modules/todo'

export default new Vuex.Store({
    modules: {
        todo,
    }
})
