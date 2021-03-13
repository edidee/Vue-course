const app = Vue.createApp({
    data() {
        return {
            selectedBoxA: false,
            selectedBoxB: false,
            selectedBoxC: false
        }
    },
    methods: {
        clickBox(box) {
            if (box === 'A') {
                this.selectedBoxA = !this.selectedBoxA;
            } else if (box === 'B') {
                this.selectedBoxB = !this.selectedBoxB;
            } else if (box === 'C') {
                this.selectedBoxC = !this.selectedBoxC;
            }
        }
    },
    computed: {
        boxAClasses() {
            return { active: this.selectedBoxA };
        }
    }

})

app.mount("#styling")