<template>
  <div>
    <h3>Pic Box</h3>
    <div>
      <input placeholder="标签" v-model="label" />
    </div>
    <div>
      <input type="file" @change="handleChange" />
      <button @click="handleUpload">上传</button>
    </div>
    <div class="img-list">
      <div v-for="item in pictures" :key="item._id" class="img-container">
        <img :src="item.tempFileURL" class="img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pictures: [],
      file: null,
      label: ''
    };
  },
  mounted() {
    this.getPictures();
  },
  methods: {
    getPictures() {
      this.$api.getPictures().then((res) => {
        this.pictures = res.data;
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

<style scoped>
.img-list {
  display: flex;
}

.img-container {
  width: 200px;
  margin: 10px;
}

.img {
  max-width: 100%;
}
</style>
