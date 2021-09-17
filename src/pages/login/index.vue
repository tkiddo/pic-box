<template>
  <div class="page-login">
    <div>登录</div>
    <div>
      <input placeholder="username" v-model="username" />
    </div>
    <div>
      <input placeholder="password" type="password" v-model="password" />
    </div>
    <n-button @click="login">登录</n-button>
  </div>
</template>

<script>
import { NButton } from 'naive-ui';
export default {
  components: {
    NButton
  },
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      this.$api
        .login({
          username: this.username,
          password: this.password
        })
        .then((res) => {
          const { token } = res;
          localStorage.setItem('token', token);
          this.$router.push('/home');
        });
    }
  }
};
</script>

<style lang="less" scoped>
.page-login {
  width: 100%;
}
</style>
