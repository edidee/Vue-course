const app = Vue.createApp({
    data() {
        return {
            myName: 'Edidiong Etok',
            myAge: 24,
            image: ''
            

        }
    },
    methods: {
        randomNum() {
            Math.random()
            return
        }
    },
})


app.mount('#assignment')