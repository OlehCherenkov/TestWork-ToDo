<template>
  <!-- note list -->
  <div class="tasks">
    <div class="task full" v-for="task in tasks" :key="task.id">
      <div class="task-header full">
        <p @click="updateTask(task)" :class="{'task-completed': task.status}">{{ task.title }}</p>
        <p @click="removeTask(task.id)">x</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        tasks: {
            type: Array,
            required: true
        },
    },
    methods: {
        removeTask (id) {
            this.$emit('remove', id)
        },
        updateTask (data) {
            this.$emit('update', data)
        }
    }
}
</script>

<style lang="scss">
    .tasks {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 40px 0;
    }
    .task {
        width: 48%;
        padding: 5px 20px;
        margin-bottom: 20px;
        background-color: #ffffff;
        transition: all .25s cubic-bezier(.02,.01,.47,1);
        box-shadow: 0 30px 30px rgba(0,0,0,.02);
        &:hover {
            box-shadow: 0 30px 30px rgba(0,0,0,.04);
            transform: translate(0,-6px);
            transition-delay: 0s !important;
        }
        &.full {
            width: 100%;
            text-align: center;
        }
    }
    .task-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        h1 {
            font-size: 32px;
            flex-basis: 40%;
        }
        p {
            font-size: 22px;
            color: #402caf;
            cursor: pointer;
        }
        &.full {
            p {
                margin-right: 16px;
                &:last-child {
                    margin-right: 0;
                }
            }
        }
    }
    .task-completed {
        text-decoration: line-through;
    }
</style>

