export default {
    props: [ 'modelValue' ],
    emits: [ 'update:modelValue' ],
    computed: {
        value: {
            get() {
                return this.modelValue
            },
            set(value) {
                this.$emit('update:modelValue', value);
            }
        }
    },
    methods: {
        keydown(ev) {
            if (ev.key == 'Enter') {
                this.value = [...this.value, ev.target.value]

                ev.target.value = ''
                ev.target.focus()
            }
        },
        deleteLink(index) {
            this.value.splice(index, 1)
        } 
    },
    template: `
    <div>
        <div style="max-height: 200px; overflow-y: auto">
            <div v-for="(link, i) in modelValue" >
                <button @click="deleteLink(i)" style="width: 100%; margin-bottom: 10px">{{ link }}</button>
            </div>
        </div>
        <hr>

        <button>Add File Paths</button>
    </div>
    `
}