new Vue({
  el: '#app',
  data () {
    return  {
      name: 'Bitcoin',
      symbol: 'BTC',
      img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
      changePercent: -10,
      

      prices: [8400, 7900, 8200, 9000, 9400, 10000, 10200],

      price: 8200,

      color: 'f4f4f4',

      value: 0,

      pricesWithDays: [
        {day: "Monday", value: 8400},
        {day: "Tuesday", value: 7900},
        {day: "Wednesday", value: 8200},
        {day: "Thursday", value: 9000},
        {day: "Friday", value: 9400},
        {day: "Saturday", value: 10000},
        {day: "Sunday", value: 10200},
      ],

      showPrices: false,
    };
  },

  computed: {
    title () {
      return `${this.name} - ${this.symbol}`;
    },
    convertedValue (){
      if (!this.value){
        return 0;
      }

      return this.value / this.price;
    }
  },

  watch: {
    showPrices (newValue, oldValue) {// name must match the data() property
      console.log(newValue, oldValue);
    }
  },

  methods: {
    toggleShowPrices () {
      // this, gives you access to properties and methods within my VUE instance
      this.showPrices = !this.showPrices;

      this.color = this.color.split('').reverse().join('')
    }
  }
});