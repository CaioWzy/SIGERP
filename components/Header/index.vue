<template>
  <div class="page-header">
    <div class="container pb-1">
      <div class="row">
        <div class="col">
          <slot name="title"></slot>
        </div>
        <div class="col">
          <div class="controls float-right">
            <slot name="controls"></slot>
            <b-button @click="$bvModal.show('modalFormDefault')" class="btn btn-custom btn-add">
              <template v-if="!useEditIcon">
                <font-awesome-icon :icon="['fas', 'plus']" />
              </template>
              <template v-else>
                <font-awesome-icon :icon="['fas', 'edit']" />
              </template>
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    useEditIcon: {
      type: Boolean
    }
  }
};
</script>