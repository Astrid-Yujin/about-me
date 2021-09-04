import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isPageLoading: false,
  },
  mutations: {
    startPageLoading(state) {
      state.isPageLoading = true;
    },
    finishPageLoading(state) {
      state.isPageLoading = false;
    },
  },
  actions: {
  },
  modules: {
  },
});
