<template>
    <div class="wrapper">
        <div class="wrapper-content">
            <section>
                <div class="container">
                    <div class="task-header">
                        <h1> {{ title }} </h1>
                        <input
                            v-model="task"
                            placeholder="New task"
                        />
                        <button class="btn btnPrimary" @click="addTask">Add</button>
                    </div>
                    <preloader v-if="isLoading"/>
                    <tasks :tasks="tasks" @remove="removeTask" @update="updateTask" v-else/>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import preloader from '../components/Preloader'
import tasks from '../components/Tasks'

export default {
    components: {
        preloader, tasks
    },
    data () {
        return {
            title: 'To-Do List',
            isLoading: false,
            task: '',
            tasks: []
        }
    },
    async created() {
        this.isLoading = true
        await this.fetchTasks()
            .then(() => {
                if (this.isError) {
                    this.$toast.error(this.getTaskActionMessage)
                    return false;
                }
                this.tasks = this.getTasks
                this.isLoading = false
            })
    },
    computed: {
        ...mapGetters([
            'getTasks',
            'getTaskActionMessage',
            'isError'
        ]),
    },
    methods: {
        ...mapActions([
            'fetchTasks',
            'createTask',
            'editTask',
            'deleteTask'
        ]),
        addTask () {
            let title = this.task
            if (title === '') {
                this.$toast.error("Task can`t be empty!")
                return false
            }
            this.isLoading = true
            this.createTask({title})
                .then(() => {
                    if (this.isError) {
                        this.$toast.error(this.getTaskActionMessage)
                        this.isLoading = false
                        return false;
                    }
                    this.tasks = this.getTasks
                    this.isLoading = false
                    this.$toast.success(this.getTaskActionMessage)
                })
            this.task = ''
        },
        updateTask (data) {
            this.isLoading = true
            const task = {
                id: data.id,
                status: !data.status
            }
            this.editTask(task)
                .then(() => {
                    if (this.isError) {
                        this.$toast.error(this.getTaskActionMessage)
                        this.isLoading = false
                        return false;
                    }
                    this.tasks = this.getTasks
                    this.isLoading = false
                    this.$toast.success(this.getTaskActionMessage)
                })
        },
        removeTask (id) {
            this.isLoading = true
            this.deleteTask(id)
                .then(() => {
                    if (this.isError) {
                        this.$toast.error(this.getTaskActionMessage)
                        this.isLoading = false
                        return false;
                    }
                    this.tasks = this.getTasks
                    this.isLoading = false
                    this.$toast.success(this.getTaskActionMessage)
                })
        }
    }
}
</script>

<style scoped>
    .container {
        max-width: 800px;
    }
    input {
        padding: 16px 16px 16px 56px !important;
        margin-bottom: 0px;
        margin-right: 15px;
        border-radius: 30px;
        color: #909399;
        font-size: 16px;
        min-width: 400px;
        height: auto;
    }
</style>
