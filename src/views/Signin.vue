<template>
  <div class="signin form">
      <h2>Log in</h2>
    <transition name="fade">
      <div class="error" v-if="message">
        {{ message }}
      </div>
    </transition>
    <form action="" @submit.prevent="submitSignin">
        <span class="inline-error">{{ errors.first('email') }}</span>
        <input data-vv-name="email"
               v-validate="'required|email'"
               type="text" v-model="user"
               placeholder="Email">
        <span class="inline-error">{{ errors.first('password') }}</span>
        <input data-vv-name="password"
               v-validate="'required|min:3'"
               type="password" v-model="password"
               placeholder="Password">
        <small>No account? Create one <router-link to="/signup">here</router-link></small>
        <button>Sign in</button>
    </form>
  </div>
</template>

<script>
import UserService from '../service/UserService';
import { mapMutations, mapState } from 'vuex';

export default {
  data() {
    return {
      user: '',
      password: '',
    };
  },

  computed: {
    ...mapState('alerts', ({
      message: 'message',
      type: 'type',
    })),
  },
  methods: {
    ...mapMutations('alerts', {
      error: 'ERROR',
    }),
    ...mapMutations('helpers', {
      loading: 'SET_LOADING',
    }),

    submitSignin() {
      this.loading(true);
      UserService.signIn({
        user: this.user,
        password: this.password,
      }).catch((err) => {
        this.error('Password not correct or the email is not registered');
        this.loading(false);
      });
    },
  },
};
</script>
