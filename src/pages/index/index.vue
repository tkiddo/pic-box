<template>
  <n-layout class="index">
    <n-layout-header class="header" bordered>
      <n-button size="tiny" type="primary">上传</n-button>
      <n-popselect :options="options" v-model:value="value" @update:value="handleClick">
        <n-button text>欢迎，{{ username }}</n-button>
      </n-popselect>
    </n-layout-header>
    <n-layout-content>
      <router-view></router-view>
    </n-layout-content>
  </n-layout>
</template>

<script>
export default {
  data() {
    const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
    return {
      pictures: [],
      file: null,
      label: '',
      username: userInfo.username || '',
      options: [
        {
          label: '登出',
          value: 'logout'
        }
      ],
      value: ''
    };
  },
  mounted() {
    this.getPictures();
  },
  methods: {
    handleClick(res) {
      if (res === 'logout') {
        localStorage.clear();
        this.$router.replace('/login');
      }
    },
    getPictures() {
      this.$api.getPictures().then((res) => {
        this.pictures = res.items;
      });
    },
    handleChange(e) {
      const target = e.target;
      const files = target.files;
      if (files) {
        this.file = files[0];
      }
    },
    handleUpload() {
      if (this.file && this.label) {
        const formData = new FormData();
        formData.append('source', this.file);
        formData.append('label', this.label);
        this.$api.upload(formData).then(() => {
          this.getPictures();
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.index {
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
  }
}
</style>
