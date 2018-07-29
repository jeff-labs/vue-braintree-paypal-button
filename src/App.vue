<template>
  <div id="app">
    <input v-model="token" placeholder="Insert your Braintree client token here"/>
    <BraintreePaypalButton :token="token" :env="env" v-on:error="onError" v-on:authorized="onAuthorize" />
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
      env: 'sandbox',
      token: null,
    };
  },
  methods: {
    onAuthorize: (nonce) => {
      console.log(nonce);
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
