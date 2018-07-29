<template>
    <div class="braintree-paypal-button-container">
        <div id="braintree-paypal-button"/>
    </div>
</template>

<script>

import braintree from 'braintree-web';
import paypal from 'paypal-checkout';

export default {
  name: 'BraintreePaypalButton',
  env: {
    required: true,
    type: String,
  },
  props: {
    token: {
      default: null,
      type: String,
    },
  },
  watch: {
    token(token) {
      let vm = this;
      braintree.client.create({
        authorization: token,
      }, (clientError, clientInstance) => {
        if (clientError) {
          vm.$emit('error', clientError);
          return;
        }
        braintree.paypalCheckout.create({
          client: clientInstance,
        }, (paypalCheckoutErr, paypalCheckoutInstance) => {
          if (paypalCheckoutErr) {
            vm.$emit('error', paypalCheckoutErr);
            return;
          }
          paypal.Button.render({
            env: 'sandbox',
            payment() {
              return paypalCheckoutInstance.createPayment({ flow: 'vault' });
            },
            onAuthorize(data) {
              return paypalCheckoutInstance.tokenizePayment(data, (error, payload) => {
                if (error) {
                  vm.$emit('error', error);
                  return;
                }
                vm.$emit('authorized', payload.nonce);
              });
            },
            onCancel(data) {

            },
            onError(error) {
              vm.$emit('error', error);
            },
          }, '#braintree-paypal-button');
        });
      });
    },
  },
};
</script>

<style scoped>

</style>
