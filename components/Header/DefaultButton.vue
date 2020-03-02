<template>
  <b-button @click="$bvModal.show('defaultModalForm')" class="btn btn-custom btn-add">
    <template v-if="!this.$store.state.pages.editMode">
      <font-awesome-icon :icon="['fas', 'plus']" />
    </template>
    <template v-else>
      <font-awesome-icon :icon="['fas', 'edit']" />
    </template>
  </b-button>
</template>