<template>
  <div id="app">
    <input v-model="token" placeholder="Insert your Braintree client token here"/>
    <BraintreePaypalButton :token="token" :env="environment" :locale="locale" v-on:error="onError" v-on:authorized="onAuthorize" v-on:canceled="onCancel" />
  </div>
</template>

<script>

import BraintreePaypalButton from '@/components/BraintreePaypalButton.vue';

export default {
  name: 'app',
  components: {
    BraintreePaypalButton,
  },
  data() {
    return {
      environment: 'sandbox',
      token: null,
      locale: 'es_ES',
    };
  },
  methods: {
    onAuthorize: (nonce) => {
      console.log(nonce);
    },
    onCancel: () => {
      console.log('Cancelled');
    },
    onError: (error) => {
      console.error(error);
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
