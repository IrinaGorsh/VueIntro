const App = {
    data(){
        return {
            count: 0,
            buyBtn: 'Купить',
            isCanBuy: false,
            isCantBuy: false,
            isReadMore: false,

        };
    },

    methods: {
        buy() {
           if (this.count < 1) {
            this.count++;
            this.buyBtn = 'Товар в корзине';
           }
        }
    }
};



Vue.createApp(App).mount('#app');