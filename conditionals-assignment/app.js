const app = Vue.createApp({
    data() {
        return {
            addedTask: '',
            tasks: [],
            listVisiblity: true
        }
    },

    computed: {
        buttonCaption() {
            this.listVisiblity ? 'Hide List' : 'Show List';
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.addedTask)
            this.addedTask = ''
        },

        toggleVisibility() {
            this.listVisiblity = !this.listVisiblity
        }
    },
})


app.mount("#assignment");
