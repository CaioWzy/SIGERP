<template>
  <button
    v-if="this.$store.state.pages.showGoBackButton"
    @click="goBack"
    type="button"
    class="btn btn-control btn-custom btn-back"
  >
    <font-awesome-icon :icon="['fas', 'angle-left']" />
  </button>
</template>
<script>
export default {
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  }
};
</script>
