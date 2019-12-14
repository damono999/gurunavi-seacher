// import axios from '@helpers/axiosDefault'

export default {
  namespaced: true,
  state: {
    form: {
      keyword: ''
    },
    stores: [],
    doneMessage: '',
    errorMessage: '',
  },
  mutations: {
    updateForm(state, payload) {
      state.form.keyword = Object.assign(state.form.keyword, ...payload);
    },
    updateStores(state, payload) {
      state.stores = [...payload.stores];
    },
    updateDoneMessage(state, payload) {
      state.doneMessage = payload.doneMessage;
    },
    updateErrorMessage(state, payload) {
      state.errorMessage = payload.errorMessage;
    },
  },
  actions: {
    updateForm({ commit }, form) {
      commit('updateForm', form);
    },
    // searchStore({ state, commit }) {
    //   return new Promise((resolve, reject) => {
    //     const params = state.form;
    //     axios()({
    //       method: 'GET',
    //       params
    //     }).then(res => {
    //       commit('updateStores', { stores: res.data.rest})
    //       resolve();
    //     }).catch(err => {
    //       commit('updateErrorMessage', { errorMessage: err.error.message })
    //       reject();
    //     });
    //   });
    // },
  },
};