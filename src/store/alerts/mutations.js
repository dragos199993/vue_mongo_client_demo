/* eslint-disable */
const mutations = {
  SUCESS(state, message){
    state.type = 'alert-success';
    state.message = message;
  },
  ERROR(state, message){
    state.type = 'alert-danger';
    state.message = message;
  },
  clear(state){
    state.type = null;
    state.message = null;
  }
};

export default mutations;
