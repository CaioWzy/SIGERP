<template>
  <b-button
    v-if="this.$store.state.pages.editMode"
    @click="$bvModal.show('confirmDeleteDialog')"
    class="btn btn-custom btn-add"
  >
    <font-awesome-icon :icon="['fas', 'trash']" />
    <b-modal id="confirmDeleteDialog" hide-header hide-footer>
      <div class="row">
        <div class="col-2">
          <font-awesome-icon :icon="['fas', 'exclamation-triangle']" class="text-secondary" size="3x" />
        </div>
        <div class="col">
          <p>
            Esta operação não poderá ser revertida.
            <br />
            <span class="text-danger">Deseja continuar mesmo assim?</span>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="float-right">
            <button class="btn btn-secondary btn-sm" @click="$bvModal.hide('confirmDeleteDialog')">Não</button>
            <button class="btn btn-danger btn-sm" @click="this.delete">Sim</button>
          </div>
        </div>
      </div>
    </b-modal>
  </b-button>
</template>

<script>
import { mapActions } from "vuex";

export default {
  mounted() {
    this.$bus.$on("confirmDeleteDialog", () => {
      this.$bvModal.hide("confirmDeleteDialog");
    });
  },
  methods: {
    ...mapActions({ delete: "pages/delete" })
  }
};
</script>