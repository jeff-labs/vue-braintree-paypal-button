<template>
  <div id="app">
    <div>
      <h1>Vue Braintree PayPal button</h1>
      <p>Vue component to integrate PayPal payments through Braintree using Vault flow.</p>
    </div>
    <div id="tokengenerator">
      <div class="input-container">
        <input v-model="token" placeholder="Insert your Braintree client token here"/>
      </div>
      <div  class="input-container">
        <BraintreePaypalButton v-bind:styles="{ shape: 'rect' }" :token="token" :env="environment" :locale="locale" v-on:error="onError" v-on:authorized="onAuthorize" v-on:canceled="onCancel" />
      </div>
      <div class="input-container">
        <p>{{ paymentNonce }}</p>
      </div>
    </div>
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
      paymentNonce: '',
    };
  },
  methods: {
    onAuthorize(nonce) {
      this.paymentNonce = nonce;
    },
    onCancel() {
      this.paymentNonce = 'Cancelled';
    },
    onError(error) {
      this.paymentNonce = error.message;
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

#tokengenerator input {
  min-width: 260px;
  margin-right: 10px;
}

.input-container {
  padding: 12px;
}
</style>
