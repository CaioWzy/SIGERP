<template>
  <div class="page-header">
    <div class="container pb-1">
      <div class="row">
        <div class="col">
          <h2 v-if="this.$store.state.pages.header.title">{{ this.$store.state.pages.header.title }}</h2>
        </div>
        <div class="col">
          <div v-if="!this.$store.state.pages.isHomePage" class="controls float-right">
            <slot name="controls"></slot>
            <DefaultButton />
            <DeleteButton />
          </div>
        </div>
      </div>
    </div>
    <confirmDeleteDialog />
  </div>
</template>

<script>
import DefaultButton from "./DefaultButton";
import DeleteButton from "./DeleteButton";

export default {
  components: {
    DefaultButton,
    DeleteButton
  }
};
</script>