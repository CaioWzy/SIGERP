<template>
  <div class="dashboard-card--wrapper">
    <nuxt-link :to="to">
      <div class="dashboard-card">
        <slot name="content" />
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: ""
    }
  }
};
</script>

<style>
.dashboard-card--wrapper > a {
  color: #2980b9;
  text-decoration: none;
}
.dashboard-card {
  background: rgba(236, 240, 241, 1);
  border-radius: 0.25rem;
}

.dashboard-card:hover {
  background: rgba(189, 195, 199, 1);
}
</style>