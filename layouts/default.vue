<template>
  <div>
    <Navbar />
    <nuxt />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar";

export default {
  components: {
    Navbar
  }
};
</script>

<style>
.information {
  margin: 0;
  padding: 0;
  list-style: none;
}
.information > li > svg {
  width: 1rem !important;
  margin-right: 0.75rem;
  color: rgba(44, 62, 80, 1);
}

.information > li > span {
  color: rgba(127, 140, 141, 1);
}

.information-card {
  background: rgba(236, 240, 241, 1);
  border-radius: 0.25rem;
  padding: 1rem;
  height: 100%;
}
</style>