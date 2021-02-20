const app = Vue.createApp({
    data() {
        return {
            name: ''
        }
    },
    methods: {
        buttonPressed() {
            alert("Button pressed")
        },
        displayName(event) {
            this.name = event.target.value
        }
    },
})