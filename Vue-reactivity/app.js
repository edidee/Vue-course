const app = Vue.createApp({
data() {
    return {
        value: 0,
    }
    },
    
 methods: {
     addNumber(num) {
         this.value= this.value + num
     }
    },
    computed: {
        results() {
            if (this.value > 37) {
                return "Too much!"
            } else if (this.value === 37) {
                return this.value
            } else{
                return "Not there yet"
            }
     }
    },
    watch: {
        results() {
            const that = this
            setTimeout(function() {
                that.value = 0
            } ,5000)
        }
    }
});

app.mount("#assignment");