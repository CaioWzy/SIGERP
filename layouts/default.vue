<template>
  <div>
    <Navbar />
    <Header />
    <nuxt />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar";
import Header from "~/components/Header";

export default {
  components: {
    Navbar,
    Header
  }
};
</script>
