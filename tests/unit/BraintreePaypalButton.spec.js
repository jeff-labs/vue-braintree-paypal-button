import { shallowMount } from '@vue/test-utils';
import BraintreePaypalButton from '@/components/BraintreePaypalButton.vue';

jest.mock('braintree-web');
jest.mock('paypal-checkout');

describe('BraintreePaypalButton.vue', () => {
  it('renders when mounted', () => {
    shallowMount(BraintreePaypalButton, {
      propsData: {
        env: 'sandbox',
      },
    });
  });

  it('calls braintree api when change token', () => {
    const wrapper = shallowMount(BraintreePaypalButton, {
      propsData: {
        env: 'sandbox',
      },
    });

    wrapper.setProps({ token: 'braintreeToken' });
  });

  it('emits error event if fail Braintree api', () => {
    const wrapper = shallowMount(BraintreePaypalButton, {
      propsData: {
        env: 'sandbox',
      },
    });

    wrapper.setProps({ token: 'failBraintree' });

    expect(wrapper.emitted().error).toBeTruthy();
    expect(wrapper.emitted().error[0]).toEqual(['braintreeError']);
  });

  it('emits error event if fail PayPal checkout load', () => {
    const wrapper = shallowMount(BraintreePaypalButton, {
      propsData: {
        env: 'sandbox',
      },
    });

    wrapper.setProps({ token: 'failPaypalCheckout' });

    expect(wrapper.emitted().error).toBeTruthy();
    expect(wrapper.emitted().error[0]).toEqual(['paypalCheckoutError']);
  });

  it('emits error event if fail PayPal button load', () => {
    const wrapper = shallowMount(BraintreePaypalButton, {
      propsData: {
        env: 'onError',
      },
    });

    wrapper.setProps({ token: 'braintreeToken' });

    expect(wrapper.emitted().error).toBeTruthy();
    expect(wrapper.emitted().error[0]).toEqual(['paypalButtonOnError']);
  });

  it('emits cancel event', () => {
    const wrapper = shallowMount(BraintreePaypalButton, {
      propsData: {
        env: 'onCancel',
      },
    });

    wrapper.setProps({ token: 'braintreeToken' });

    expect(wrapper.emitted().canceled).toBeTruthy();
  });

  it('emits authorized event', () => {
    const wrapper = shallowMount(BraintreePaypalButton, {
      propsData: {
        env: 'onAuthorize',
      },
    });

    wrapper.setProps({ token: 'braintreeToken' });

    expect(wrapper.emitted().authorized).toBeTruthy();
    expect(wrapper.emitted().authorized[0]).toEqual(['braintreeToken']);
  });

  it('emits error event if fail authorization', () => {
    const wrapper = shallowMount(BraintreePaypalButton, {
      propsData: {
        env: 'onAuthorizeError',
      },
    });

    wrapper.setProps({ token: 'braintreeToken' });

    expect(wrapper.emitted().error).toBeTruthy();
    expect(wrapper.emitted().error[0]).toEqual(['braintreeTokenError']);
  });
});
