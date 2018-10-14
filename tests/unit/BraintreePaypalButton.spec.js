
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
});
