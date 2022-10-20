'use strict';

const commonParameters = {
    name: 'New Task',
    disabled: false,
}

export default {
    data() {
        return {
            types: this.$root.taskTypes,
            searchValue: '',
            showing: false,
        }
    },
    props: {
        taskcontainer: Object,
        insertindex: Number,
        buttontext: String,
        position: String,
    },
    template: `
    <span style="display: inline-block;">
        <button @click="showing = !showing" class="flat">{{ buttontext }}</button>
        <div class="taskSelectorPanelContainer" v-if="showing">
            <div class="taskSelectorPanel padding-1">
                <input v-model="searchValue" placeholder="Search Task">

                <hr>
                <button v-for="(type, key) of types" @click="add(key)">{{ type.name }}</button>
            </div>
        </div>
    </span>`,
    methods: {
        add(type) {
            console.log(type);
            console.log(this.types[type].parameters);
            
            const newParameters = {}
            for (let param of this.types[type].parameters) {
                newParameters[param.nameShort] = param.defaultValue
            }

            const newItem = {
                ...commonParameters,
                type,
                parameters: newParameters
            }

            if ('childTasks' in this.types[type]) {
                newItem.childTasks = []
            }

            this.taskcontainer.splice(this.insertindex, 0, newItem)

            this.showing = false;
        }
    }
}