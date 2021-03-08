const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  methods: {
    increase(num) {
       this.counter = this.counter + 1
     
    },
    decrease(num) {
      this.counter = this.counter - 1
      
    },
    setName(event) {
      this.name = event.target.value
    }
  },
});

app.mount('#events');
