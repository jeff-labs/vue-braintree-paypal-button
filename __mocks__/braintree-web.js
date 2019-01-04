module.exports = {
  client: {
    create: (config, callback) => {
      const token = config.authorization;
      if (token === 'failBraintree') {
        callback('braintreeError');
      }
      callback(null, token);
    },
  },
  paypalCheckout: {
    create: (config, callback) => {
      const client = config.client;
      if (client === 'failPaypalCheckout') {
        callback('paypalCheckoutError');
      }

      const fakePaypalCheckoutInstance = {
        tokenizePayment: (data, onAuthorizeCallback) => {
          if (data === 'authorized') {
            onAuthorizeCallback(null, {nonce: 'braintreeToken'});
          } else {
            onAuthorizeCallback('braintreeTokenError');
          }
        },
      };

      callback(null, fakePaypalCheckoutInstance);
    },
  },
};
