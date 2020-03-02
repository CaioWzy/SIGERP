<template>
  <div class="text-center dashboard-card--icon">
    <font-awesome-icon :icon="['fas', faIcon]" size="5x" />
    <h5>{{ title }}</h5>
  </div>
</template>

<script>
export default {
  props: {
    faIcon: {
      type: String,
      default: "user"
    },
    title: {
      type: String,
      default: ""
    }
  }
};
</script>

<style>
.dashboard-card--icon {
  padding: 1rem !important;
}
.dashboard-card--icon > h5 {
  margin-top: .75rem;
  margin-bottom: 0;
}
</style>