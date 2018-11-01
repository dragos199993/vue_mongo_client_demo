/* eslint-disable */
const mutations = {
  UPDATE_AUTHENTICATION(state, payload) {
    return state.authenticated = payload;
  },
  GENERAL_ERROR(state, payload) {
    return state.generalError = payload;
  }
};

export default mutations;
