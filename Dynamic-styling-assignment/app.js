const app = Vue.createApp({
    data() {
        return {
            styleClass: '',
            visibilityValue: true,
            inputStyle: '',
        }
    },
    computed: {
        paraClasses() {
            return {
                user1: this.styleClass === 'user1',
                user2: this.styleClass === 'user2',
                visible: this.visibilityValue,
                hidden: !this.visibilityValue
            }
        }
    },

    methods: {
        toggleBtn() {
            this.visibilityValue = !this.visibilityValue
        }
    },

})

app.mount('#assignment')