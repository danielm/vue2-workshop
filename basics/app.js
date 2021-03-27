Vue.component('CoinDetail', {
  data (){
    return {
      showPrices: false,
      value: 0,
    };
  },

  props: [
    'coin'
  ],

  computed: {
    convertedValue (){
      if (!this.value){
        return 0;
      }

      return this.value / this.coin.price;
    },
    title () {
      return `${this.coin.name} - ${this.coin.symbol}`;
    },
  },

  methods: {
    toggleShowPrices () {
      // this, gives you access to properties and methods within my VUE instance
      this.showPrices = !this.showPrices;

      this.$emit('change-color', this.showPrices);
    }
  },

  created(){
    // After parent component is created() and before mounted()
    console.log('created coin detail');
  },

  mounted(){
    // called before parent mounted() as well.
    console.log('mounted coin detail');
  },

  template: `
    <div>
      <img v-bind:src="coin.img" v-bind:alt="coin.name" style="width: 50px;">

      <h1 v-bind:class="coin.changePercent > 0 ? 'green' : 'red'">
        {{ title }}
        <!-- v-if removes the element from dom if condition is not met -->
        <span v-if="coin.changePercent > 0">:)</span>
        <span v-else-if="coin.changePercent < 0">:(</span>
        <span v-else>:|</span>

        <!-- v-show ads display:non when condition is not met -->
        <span v-show="coin.changePercent > 0">:)</span>
        <span v-show="coin.changePercent < 0">:(</span>
        <span v-show="coin.changePercent == 0">:|</span>
      </h1>

      <hr />

      <a href="#" v-on:click="toggleShowPrices">{{ showPrices ? 'Hide' : 'Show' }} Prices</a>

      <hr />

      Enter USD: <input type="number" v-model="value">
      Equals <span>{{ convertedValue }}</span> {{ coin.symbol }}

      <div v-show=showPrices>
        <ul>
          <li
            class="bold"
            v-for="(p, i) in coin.pricesWithDays"
            v-bind:key="p.day"
            v-bind:class="{ orange: p.value == coin.price, red: p.value < coin.price }"
          >
            {{ i }} - {{ p.day }} - &#36;{{ p.value }}
          </li>
        </ul>
      </div>

      <hr />

      <slot name="text"></slot>
      <slot name="link"></slot>

    </div>
  `
});

new Vue({
  el: '#app',
  data () {
    return  {
      btc: {
        name: 'Bitcoin',
        symbol: 'BTC',
        img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
        changePercent: 10,
        price: 8200,
        pricesWithDays: [
          {day: "Monday", value: 8400},
          {day: "Tuesday", value: 7900},
          {day: "Wednesday", value: 8200},
          {day: "Thursday", value: 9000},
          {day: "Friday", value: 9400},
          {day: "Saturday", value: 10000},
          {day: "Sunday", value: 10200},
        ],
      },
      color: 'f4f4f4'
    };
  },

  watch: {
    color (newValue, oldValue) {// name must match the data() property
      console.log(newValue, oldValue);
    }
  },

  methods: {
    updateColor (status) {
      if (status){
        this.color = '4f4f4f';
      } else {
        this.color = 'f4f4f4';
      }
    }
  },

  created(){
    // Good place to get information from a server/API and populate my component with info from it
    console.log('created');
  },

  mounted(){
    // Doom availabe: can access stuf like HTML elements (not available on created())
    console.log('mounted');
  },
});