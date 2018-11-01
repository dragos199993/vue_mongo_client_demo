<template>
  <div class="posts-wrapper">
    <p v-if="error">{{ error }}</p>
    <div class="create-post">
      <form action="" @submit.prevent="createPost">
        <div><textarea v-model="content" name="text" id="" cols="30" rows="10"></textarea></div>
        <button class="submit-text">Submit post</button>
      </form>
    </div>
    <div class="posts-container" v-if="posts.length">
      <div class="post" v-for="(post, index) in posts"
          :key="post._id"
          :index="index">
        <div class="time">
          {{`${post.createdAt.getDate()}/
          ${post.createdAt.getMonth()}/
          ${post.createdAt.getFullYear()}`}}
        </div>
        {{ post.text }}
        <button class="delete" @click="deletePost(post._id, index)">Delete</button>
      </div>
    </div>
    <div class="no-posts" v-else>No posts to show</div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import PostSerivce from '../service/PostService';

export default {
  data() {
    return {
      content: '',
      posts: [],
      error: '',
      text: '',
    };
  },
  async created() {
    try {
      this.loading(true);
      this.posts = await PostSerivce.getPost();
      this.loading(false);
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    ...mapMutations('helpers', {
      loading: 'SET_LOADING',
    }),
    async deletePost(id) {
      this.loading(true);
      await PostSerivce.deletePost(id);
      this.posts = await PostSerivce.getPost();
      this.loading(false);
    },
    async createPost() {
      if (this.content) {
        this.loading(true);
        await PostSerivce.createPost(this.content);
        this.posts = await PostSerivce.getPost();
        this.error = '';
        this.content = '';
        this.loading(false);
      } else {
        this.error = 'Field cannot be empty';
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
