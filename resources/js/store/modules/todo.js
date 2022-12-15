import axiosIns from '../../plugins/axios'
export default {
    actions: {
        async fetchTasks({commit}) {
            return await axiosIns().get(`tasks`)
                .then((result) => {
                    if(result.data && result.data.status === 'success') {
                        commit('GET_TASKS', result.data.data)
                    }
                })
                .catch((error) => {
                    commit('GET_ERROR', true)
                    commit('GET_TASK_ACTION_RESULT', error.response.data.message)
                })
        },
        async fetchTask({commit}, id) {
            return await axiosIns().get(`tasks/${id}`)
                .then((result) => {
                    if(result.data && result.data.status === 'success') {
                        commit('GET_TASK', result.data.data)
                    }
                })
                .catch((error) => {
                    commit('GET_ERROR', true)
                    commit('GET_TASK_ACTION_RESULT', error.response.data.message)
                })
        },
        async createTask({commit}, data) {
            return await axiosIns().post(`tasks`, data)
                .then((result) => {
                    if(result.data && result.data.status === 'success') {
                        commit('GET_TASKS', result.data.data)
                        commit('GET_TASK_ACTION_RESULT', result.data.message)
                    }
                })
                .catch((error) => {
                    commit('GET_ERROR', true)
                    commit('GET_TASK_ACTION_RESULT', error.response.data.message)
                })
        },
        async editTask({commit}, data) {
            return await axiosIns().put(`tasks/${data.id}`, data)
                .then((result) => {
                    if(result.data && result.data.status === 'success') {
                        commit('GET_TASKS', result.data.data)
                        commit('GET_TASK_ACTION_RESULT', result.data.message)
                    }
                })
                .catch((error) => {
                    commit('GET_ERROR', true)
                    commit('GET_TASK_ACTION_RESULT', error.response.data.message)
                })
        },
        async deleteTask({commit}, id) {
            return await axiosIns().delete(`tasks/${id}`)
                .then((result) => {
                    if(result.data && result.data.status === 'success') {
                        commit('GET_TASKS', result.data.data)
                        commit('GET_TASK_ACTION_RESULT', result.data.message)
                    }
                })
                .catch((error) => {
                    commit('GET_ERROR', true)
                    commit('GET_TASK_ACTION_RESULT', error.response.data.message)
                })
        },
    },
    mutations: {
        GET_TASKS(state, data) {
            state.tasks = data
        },
        GET_TASK(state, data) {
            state.task = data
        },
        GET_TASK_ACTION_RESULT(state, data) {
            state.taskActionMessage = data
        },
        GET_ERROR(state, data) {
            state.error = data
        },
    },
    state: {
        tasks: [],
        task: {},
        taskActionMessage: '',
        error: false,
    },
    getters: {
        getTasks: (state) => {
            return state.tasks
        },
        getTask: (state) => {
            return state.task
        },
        getTaskActionMessage: (state) => {
            return state.taskActionMessage
        },
        isError: (state) => {
            return state.error
        }
    }
}
