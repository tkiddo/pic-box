<template>
  <div>
    <div>登录</div>
    <div>
      <input placeholder="username" v-model="username" />
    </div>
    <div>
      <input placeholder="password" type="password" v-model="password" />
    </div>
    <button @click="login">登录</button>
  </div>
</template>

<script>
export default {
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
