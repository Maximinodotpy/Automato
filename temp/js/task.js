export default {
    data() {
        return {
            count: 0
        }
    },
    props: {
        data: Object,
        index: Number,
        list: Object,
    },
    template: `#taskTemplate`,
    mounted() {
        console.log(this.$parent.taskTypes);
    },
    name: 'taskcontainer'
}