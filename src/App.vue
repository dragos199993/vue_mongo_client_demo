<template>
  <div id="app">

      <transition name="fade">
        <div class="overlay" v-if="isLoading">
          <div class="loader"></div>
        </div>
      </transition>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/signin">Sign in</router-link>
    </div>
    <div class="main-view">
      <router-view/>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  computed: {
    ...mapState('helpers', ({
      isLoading: 'loading',
    })),
  },
};
</script>


<style lang="scss">
.error{
  background: #cc0000;
  color: #fff;
  display: inline-block;
  padding: 8px 15px;
  border-radius: 5px;
  margin-bottom: 15px;
  font-size: 14px;
}
.inline-error{
  color: #cc0000;
  font-size: 12px;
  font-weight: bold;
}
  .form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 250px;
    max-width: 375px;
    width: 100%;
    form{
      text-align: center;
        width: 100%;
      small{
        display: block;
      }
      input{
        width: 100%;
        padding: 10px 0px;
        margin-bottom: 20px;
        border: none;
        box-shadow: 1px 1px 1px 1px #000;
        margin-top: 5px;
        text-indent: 12px;
      }
      button{
        display: inline-block;
        border: none;
        margin-top: 5px;
        padding: 8px 12px;
        cursor: pointer;
        box-shadow: 1px 1px 1px 1px #000;
      }
    }
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .main-view{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}


  .posts-wrapper{
    .create-post{
      margin-bottom:50px;
    }
  }
  .overlay{
    position: fixed;
    top: 0; right: 0; bottom: 0; left: 0;
    background: rgba(0,0,0,0.4);
  }
  .loader {
    border: 8px solid #f3f3f3;
    border-top: 8px solid orange;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 2s linear infinite;
    left:50%;
    top: 50%;
    position: absolute;
    transform: translate(-50%,-50%);
}

  @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
  }

  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
