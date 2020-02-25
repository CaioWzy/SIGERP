<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-razao-social"
        label="Razão Social:"
        label-for="input-razao-social"
      >
        <b-form-input
          id="input-razao-social"
          v-model="form.company_name"
          required
          placeholder="..."
          maxlength="120"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-razao-social"
        label="Nome Fantasia:"
        label-for="input-nome-fantasia"
      >
        <b-form-input
          id="input-nome-fantasia"
          v-model="form.fantasy_name"
          required
          placeholder="..."
          maxlength="120"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-cnpj" label="CNPJ:" label-for="input-cnpj">
        <b-form-input id="input-cnpj" v-model="form.cnpj" required placeholder="..." maxlength="14"></b-form-input>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        company_name: "",
        fantasy_name: "",
        cnpj: ""
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();

      // Reset our form values
      this.form.company_name = "";
      this.form.fantasy_name = "";
      this.form.fantasy_name = "";

      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>