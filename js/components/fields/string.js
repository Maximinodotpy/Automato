export default {
    props: {
        min: Number,
        max: Number,
        modelValue: String,
    },
    emits: ['update:modelValue'],
    computed: {
        validate: {
            get() {
                return this.modelValue
            },
            set(ev) {


                /* if (value.length < this.min) {
                    this.$emit('update:modelValue', this.modelValue)
                } else {
                    this.$emit('update:modelValue', value)
                } */
            }
        }
    },
    methods: {
        check(ev) {
            console.log('fsad');

            console.log(this.min);
            console.log(ev);
            console.log(ev.target.value);

            if (ev.key == 'Backspace') {
                if (ev.target.value.length >= this.min) {
                    this.$emit('update:modelValue', ev.target.value)
                }
            } else {

            }
        },
    },
    template: `
        <input v-model="validate" :minlength="min" @keypress="check">
    `,
}