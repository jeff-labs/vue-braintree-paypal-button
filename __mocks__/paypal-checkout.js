module.exports = {
  Button: {
    render: (config, vm) => {
      console.log(config);
      const env = config.env;
      if (env === 'onError') {
        config.onError('paypalButtonOnError');
      } else if (env === 'onCancel') {
        config.onCancel();
      } else if (env === 'onAuthorize') {
        config.onAuthorize('authorized');
      } else if (env === 'onAuthorizeError') {
        config.onAuthorize('authorizedError');
      }
    },
  },
};
