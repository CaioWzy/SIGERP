<template>
  <div>
    <b-modal :id="modalFormId" size="lg" hide-footer>
      <template v-slot:modal-title>
        <template v-if="!editMode">Adicionar {{ entity }}</template>
        <template v-else>Editar {{ entity }}</template>
      </template>
      <slot name="form" />
    </b-modal>
  </div>
</template>
<script>
export default {
  props: {
    modalFormId: String,
    entity: String,
    editMode: Boolean
  }
};
</script>