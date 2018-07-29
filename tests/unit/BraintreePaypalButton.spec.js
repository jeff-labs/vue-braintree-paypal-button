import { shallowMount } from '@vue/test-utils';
import BraintreePaypalButton from '@/components/BraintreePaypalButton.vue';

describe('BraintreePaypalButton.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(BraintreePaypalButton, {
      propsData: { },
    });
    // expect(wrapper.text()).toMatch(msg);
  });
});
