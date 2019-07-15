# Vue Braintree PayPal button
![npm (scoped)](https://img.shields.io/npm/v/@mrjeffapp/vue-braintree-paypal-button.svg)

Vue component to integrate PayPal payments through Braintree using Vault flow.

## Documentation

[Braintree PayPal vault flow](https://developers.braintreepayments.com/guides/paypal/vault/javascript/v3)

[Paypal button customization](https://developer.paypal.com/docs/checkout/how-to/customize-button/)

## Installation
### Yarn
```bash
yarn add @mrjeffapp/vue-braintree-paypal-button
```
### NPM
```bash
npm install --save @mrjeffapp/vue-braintree-paypal-button
```

## Usage
### Example: TokenGenerator.vue
```javascript
<template>
    <BraintreePaypalButton v-bind:styles="{ shape: 'rect' }" :token="token" :env="environment" :locale="locale" v-on:error="onError" v-on:authorized="onAuthorize" v-on:canceled="onCancel" />
</template>

<script>

import BraintreePaypalButton from '@/components/BraintreePaypalButton.vue';

export default {
  name: 'TokenGenerator',
  components: {
    BraintreePaypalButton,
  },
  data() {
    return {
      environment: 'sandbox',
      token: 'token',
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
</style>

```

### Component props

#### env
- Type: `String`
- Required: `true`
- Values: `production` | `sandbox`

#### token
- Type: `String`
- Required: `false`
- Value: [Client token from your integration to Braintree](https://developers.braintreepayments.com/reference/request/client-token/generate/node)

#### locale
- Type: `String`
- Required: `false`
- Default: `en_US`
- Values: [Supported locales](https://developer.paypal.com/docs/checkout/how-to/customize-button/#supported-locales)

#### styles
- Type: `Object`
- Required: `false`
- Default: `{}`
- Values: [Customize button](https://developer.paypal.com/docs/checkout/how-to/customize-button/)

### Component events

#### authorize
When customer authorize vault flow.

#### cancel
When customer cancel vault flow.

#### error
When an error occurs.

## Developing
### Project setup
```bash
yarn install
```

### Compiles and hot-reloads for development
```bash
yarn serve
```

### Compiles and minifies for production
```bash
yarn build
```

### Lints and fixes files
```bash
yarn lint
```

### Run unit tests
```bash
yarn test:unit
```

### Run en to end tests
```bash
yarn test:e2e
```
