import taskcontainer from './js/task.js'
import taskTypes from './js/taskTypes.js'
import tasks from './js/testTasks.js'

const { createApp } = Vue

console.log(taskTypes);

const app = {
    data() {
        return {
            tasks,
            taskTypes,
        }
    },
    components: {
        taskcontainer
    },
    methods: {
        getD(obj, key, defaultValue) {
            if (!Object.keys(obj.arguments).includes(key)) {
                obj.arguments[key] = defaultValue
            }
        },
        deleteTask(list, index) {
            console.log(list, index);
            list.splice(index, 1);
        },
        addTask(list, index, taskType) {
            console.log('Adding Task', taskType);
            console.log(this.taskTypes[taskType]);
            
            const newItem = {
                name: 'New Item',
                disabled: false,
                type: taskType,
                arguments: this.taskTypes[taskType].arguments
            }

            if ('childTasks' in this.taskTypes[taskType]) {
                newItem.childTasks = []
            }

            console.log(newItem);
            list.splice(index+1, 0, newItem);
        }
    }
}

createApp(app).mount('#app')