import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import ViewHome from '@/components/viewHome/ViewHome.vue';

describe('Home.vue', () => {
  it('renders props.headline when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(ViewHome, {
      propsData: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});
