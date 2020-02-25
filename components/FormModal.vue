<template>
  <div>
    <b-button v-b-modal.modalPopover class="btn btn-custom btn-add">
      <font-awesome-icon :icon="['fas', 'plus']" />
    </b-button>

    <b-modal id="modalPopover" ok-only>
      <template v-slot:modal-title>Novo Cliente</template>
      <slot name="form"></slot>
      <template v-slot:modal-footer>
        <b-button type="submit" variant="primary">
          <font-awesome-icon :icon="['fas', 'save']" />
        </b-button>
      </template>
    </b-modal>
  </div>
</template>
<script>
export default {
};
</script>