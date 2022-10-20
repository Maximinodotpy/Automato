import taskselector from "./taskSelector.js";

export default {
    props: {
        data: Object,
        index: Number,
        list: Object,
    },
    components: {
        taskselector,
    },
    methods: {
        moveUp() {
            
            if (this.index != 0) {
                console.log('faslkdfjaöslkd');

                [ this.list[this.index - 1], this.list[this.index] ] = [ this.list[this.index], this.list[this.index - 1] ]
            }
        },
        moveDown() {
            if (this.index != this.list.length) {    
                [ this.list[this.index + 1], this.list[this.index] ] = [ this.list[this.index], this.list[this.index + 1] ]
            }
        }
    },
    template: `
    <div class="taskHead display-flex justify-content-space-between" style="margin-bottom: 1rem">

        <div class="fontsize-18">
            <input type="text" v-model="data.name" class="bg-transparent border-color-transparent" placeholder="Task Name">
        </div>
            
        <div class="color-grey-500 taskActions">
            <span class="margin-right-1">
                {{ data.type }}
            </span>

            <taskselector :taskcontainer="list" :insertindex="index + 1" :buttontext="'Add Task'" class="margin-right-1"></taskselector>

            <span class="margin-right-1">
                <button class="flat" @click="moveUp">Up</button>
                <button class="flat" @click="moveDown">Down</button>
            </span>

            <button @click="this.$root.deleteTask(list, index)" class="flat margin-right-1">Delete</button>

            <button @click="data.disabled = !data.disabled" class="flat">Disable</button>
        </div >

    </div >
    `
}