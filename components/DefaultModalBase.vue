<template>
  <div>
    <b-modal id="defaultModalForm" size="lg" hide-footer>
      <template v-slot:modal-title>
        <template v-if="!$store.state.pages.editMode">Adicionar {{ entity }}</template>
        <template v-else>Editar {{ entity }}</template>
      </template>
      <slot name="form" />
    </b-modal>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$bus.$on("defaultModalForm", () => {
      this.$bvModal.hide("defaultModalForm");
    });
  },
  props: {
    entity: String
  }
};
</script>