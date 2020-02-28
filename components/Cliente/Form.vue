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
              v-model.trim="fantasy_name"
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
              v-model.trim="company_name"
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
              v-model.trim="cnpj"
              required
              placeholder="..."
              v-mask="'##.###.###/####-##'"
            ></b-form-input>
          </b-form-group>
        </div>
      </div>
      <div class="form-row">
        <div class="col">
          <b-button type="submit" class="btn btn-custom btn-add float-right" variant="primary">
            <font-awesome-icon :icon="['fas', 'save']" />
          </b-button>
        </div>
      </div>
    </b-form>
  </div>
</template>

<script>
import { mask } from "vue-the-mask";

export default {
  directives: { mask },
  data() {
    return {
      id: this.$store.state.clientes.id,
      fantasy_name: this.$store.state.clientes.fantasy_name,
      company_name: this.$store.state.clientes.company_name,
      cnpj: this.$store.state.clientes.cnpj,
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      if (!this.$store.state.pages.editMode) {
        this.createCliente();
      } else {
        this.updateCliente();
      }
    },
    onReset(evt) {
      evt.preventDefault();

      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    getClienteForm() {
      return {
        id: this.$store.state.clientes.id,
        fantasy_name: this.fantasy_name,
        company_name: this.company_name,
        cnpj: this.cnpj
      };
    },
    refreshClienteData() {
      let cliente = this.getClienteForm();
      this.$store.commit("clientes/setFantasyName", cliente.fantasy_name);
      this.$store.commit("clientes/setCompanyName", cliente.company_name);
      this.$store.commit("clientes/setCnpj", cliente.cnpj);
    },
    createCliente() {
      let cliente = this.getClienteForm();
      this.$axios
        .$post("http://127.0.0.1:8000/api/clientes/", cliente)
        .then(data => {
          this.$bvModal.hide("modalFormDefault");
          if (data.id) this.$router.push(`/clientes/${data.id}`);
        })
        .catch(error => {
          //return {};
        });
    },
    updateCliente() {
      let cliente = this.getClienteForm();
      this.$axios
        .$post(`http://127.0.0.1:8000/api/clientes/${this.id}`, cliente)
        .then(data => {
          this.refreshClienteData();
          this.$bvModal.hide("modalFormDefault");
        })
        .catch(error => {
          //return {};
        });
    }
  }
};
</script>