<template>
  <n-layout class="page-login" :content-style="contentStyle">
    <n-form class="login-form" size="large">
      <n-space vertical align="center">
        <h3>登录</h3>
        <n-form-item label="用户名" :style="itemStyle">
          <n-input placeholder="username" v-model:value="username" />
        </n-form-item>
        <n-form-item label="密码" :style="itemStyle">
          <n-input placeholder="password" type="password" v-model:value="password" />
        </n-form-item>
        <n-button @click="login">登录</n-button>
      </n-space>
    </n-form>
  </n-layout>
</template>

<script>
const contentStyle = {
  display: 'flex',
  'justify-content': 'center',
  'align-items': 'center'
};
const itemStyle = {
  width: '200px'
};
export default {
  data() {
    return {
      contentStyle,
      itemStyle,
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
          const { token, ...userInfo } = res;
          localStorage.setItem('token', token);
          localStorage.setItem('userInfo', JSON.stringify(userInfo));
          this.$router.push('/home');
        });
    }
  }
};
</script>

<style lang="less" scoped>
.page-login {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-form {
    display: block;
    padding: 40px 140px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 5px;
    border-radius: 10px;
    margin: 0 10px;
  }
}
</style>
