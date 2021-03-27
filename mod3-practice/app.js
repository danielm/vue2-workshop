Vue.component('modal', {
  props: [
    'title'
  ],

  methods: {
    closeModal(){
      this.$emit('close');
    }
  },

  template: `
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <h3>{{ title }}</h3>
          <div>
            <slot></slot>
          </div>
          <footer>
            <button v-on:click="closeModal">Close</button>
          </footer>
        </div>
      </div>
    </div>`
})

new Vue({
  el: '#app',

  methods: {
    toggleModal(){
      this.showModal = !this.showModal;
    }
  },

  data(){
    return {
      showModal: false,
      title: 'My VueJS Modal'
    };
  }
})