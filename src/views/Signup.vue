<template>
  <div class="signup form">
    <h2>Create account</h2>
    <transition name="fade">
      <div class="error" v-if="message">
        {{ message }}
      </div>
    </transition>
    <form action="" @submit.prevent="submitSignup">
        <span class="inline-error">{{ errors.first('email') }}</span>
        <input autocomplete="off"
               data-vv-name="email"
               v-validate="'required|email'"
               type="text" v-model="user"
               placeholder="Email">
        <span class="inline-error">{{ errors.first('password') }}</span>
        <input autocomplete="off"
               data-vv-name="password"
               v-validate="'required|min:3'"
               type="password"
               v-model="password"
               placeholder="Password">
        <span class="inline-error">{{ errors.first('passwordConfirm') }}</span>
        <input autocomplete="off"
               data-vv-name="passwordConfirm"
               v-validate="'required|min:3'"
               type="password"
               v-model="passwordConfirm"
               placeholder="Repeat Password">
        <small>Already have an account? Log in <router-link to="/signin">here</router-link></small>
        <button>Sign up</button>
    </form>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import UserService from '../service/UserService';

export default {
  data() {
    return {
      user: '',
      password: '',
      passwordConfirm: '',
    };
  },

  computed: {
    ...mapState('alerts', ['message', 'type']),
  },

  methods: {
    ...mapMutations('alerts', {
      error: 'ERROR',
    }),
    ...mapMutations('helpers', {
      loading: 'SET_LOADING',
    }),

    submitSignup() {
      this.loading(true);
      if (this.user === '' || this.password === '' || this.passwordConfirm === '') {
        this.error('Fields cannot be empty');
        this.loading(false);
        return;
      }
      if (this.passwordConfirm === this.password) {
        UserService.signUp({
          user: this.user,
          password: this.password,
        }).catch((error) => {
          this.error('Something went wrong during registration');
          this.loading(false);
        });
        this.error('');
      } else {
        this.error('Password must be the same');
        this.loading(false);
      }
    },
  },
};
</script>

