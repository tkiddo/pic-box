<template>
  <n-layout class="page-home">
    <n-layout-header class="header" bordered>
      <span>{{ username }}</span>
    </n-layout-header>
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
      username: userInfo.username || ''
    };
  },
  mounted() {
    this.getPictures();
  },
  methods: {
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
.page-home {
  .header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px 20px;
  }
}
</style>
