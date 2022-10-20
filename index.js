import taskcontainer from './js/components/task.js'
import taskselector from './js/components/taskSelector.js'
import taskTypes from './js/taskTypes_v2.js'

import stringList from './js/components/fields/string-list.js'
import pathList from './js/components/fields/path-list.js'

const { createApp } = Vue

const commonParameters = {
    name: 'New Task',
    disabled: false,
}

const app = {
    data() {
        return {
            tasks: [],
            taskTypes,
        }
    },
    components: {
        taskcontainer,
        taskselector,
    },
    methods: {
        deleteTask(list, index) {
            list.splice(index, 1);
        },
        addTask(list, index, taskType) {
            console.log('fasdf');
            const newItem = {
                ...commonParameters,
                type: taskType,
                arguments: this.taskTypes[taskType].arguments
            }

            if ('childTasks' in this.taskTypes[taskType]) {
                newItem.childTasks = []
            }

            list.splice(index+1, 0, newItem);
        },
        openAutomationFile() {
            pywebview.api.openFile().then((json) => {
                pywebview.api.test(json)

                if (json != 'CANCELED') {
                    this.tasks = JSON.parse(json)
                }
            })
        },
        saveAutomationFile() {
            pywebview.api.saveFile(JSON.stringify(this.tasks))
        },
        runAutomation() {
            pywebview.api.runFile()
        }
    },
    mounted() {
        pywebview.api.test('MOUNTED')
        
        pywebview.api.requestContent().then((content) => {
            pywebview.api.test(content)
        
            this.tasks = JSON.parse(content)
        })
    }
}

window.addEventListener('pywebviewready', () => {
    const madeApp = createApp(app)
    madeApp.mount('#app')

    madeApp.component('string-list', stringList)
    madeApp.component('path-list', pathList)
})