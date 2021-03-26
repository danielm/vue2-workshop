new Vue({
  el: '#app',
  data () {
    return  {
      name: 'Bitcoin',
      img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
      changePercent: 10,
      

      prices: [8400, 7900, 8200, 9000, 9400, 10000, 10200],

      pricesWithDays: [
        {day: "Monday", value: 8400},
        {day: "Tuesday", value: 7900},
        {day: "Wednesday", value: 8200},
        {day: "Thursday", value: 9000},
        {day: "Friday", value: 9400},
        {day: "Saturday", value: 10000},
        {day: "Sunday", value: 10200},
      ]
    };
  }
});