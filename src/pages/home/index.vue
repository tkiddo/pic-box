<template>
  <div>home</div>
</template>

<script>
export default {
  data() {
    return {
      pictures: []
    };
  },
  mounted() {
    this.getPictures();
  },
  methods: {
    getPictures() {
      this.$api.getPictures().then((res) => {
        this.pictures = res;
      });
    }
  }
};
</script>
