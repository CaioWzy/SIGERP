<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <div class="form-row">
        <div class="col">
          <b-form-group
            id="input-group-nome-fantasia"
            label="Nome Fantasia:"
            label-for="input-nome-fantasia"
          >
            <b-form-input
              id="input-nome-fantasia"
              v-model.trim="cliente.fantasy_name"
              required
              placeholder="..."
              maxlength="120"
            ></b-form-input>
          </b-form-group>
        </div>
      </div>
      <div class="form-row">
        <div class="col">
          <b-form-group
            id="input-group-razao-social"
            label="Razão Social:"
            label-for="input-razao-social"
          >
            <b-form-input
              id="input-razao-social"
              v-model.trim="cliente.company_name"
              required
              placeholder="..."
              maxlength="120"
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-4">
          <b-form-group id="input-group-cnpj" label="CNPJ:" label-for="input-cnpj">
            <b-form-input
              id="input-cnpj"
              v-model.trim="cliente.cnpj"
              required
              placeholder="..."
              v-mask="'##.###.###/####-##'"
            ></b-form-input>
          </b-form-group>
        </div>
      </div>
      <div class="form-row">
        <div class="col">
          <b-button type="submit" class="btn btn-primary rounded-circle float-right" variant="primary">
            <font-awesome-icon :icon="['fas', 'save']" />
          </b-button>
        </div>
      </div>
    </b-form>
  </div>
</template>

<script>
import { mask } from "vue-the-mask";
import { stripNonNumeric } from "~/utils";

import { mapMutations, mapActions } from "vuex";

export default {
  directives: {
    mask
  },
  data() {
    return {
      cliente: { ...this.$store.state.pages.data },
      show: true
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      let _data = { ...this.cliente }; // Copia o objeto para evitar que a remoção da pontuação afete o formulário.
      _data.cnpj = stripNonNumeric(_data.cnpj)
      if (!_data) this.create(_data);
      else this.update(_data);
    },
    onReset(e) {
      e.preventDefault();

      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    ...mapActions({
      create: "pages/create",
      update: "pages/update"
    }),
    ...mapMutations({
      reset: "pages/reset"
    }),
    stripNonNumeric
  }
};
</script>