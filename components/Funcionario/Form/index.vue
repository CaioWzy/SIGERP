<template>
  <b-form @submit="onSubmit" @reset="onReset" v-if="show">
    <div class="form-row">
      <div class="col">
        <b-form-group id="input-group-name" label="Nome:" label-for="input-name">
          <b-form-input
            id="input-name"
            v-model="funcionario.name"
            required
            placeholder="Fulano da Silva"
            maxlength="120"
          ></b-form-input>
        </b-form-group>
      </div>
    </div>
    <div class="form-row">
      <div class="col">
        <b-form-group id="input-group-cpf" label="CPF:" label-for="input-cpf">
          <b-form-input
            id="input-cpf"
            v-model="funcionario.cpf"
            required
            placeholder="123.456.789-10"
            maxlength="14"
            v-mask="'###.###.###-##'"
          ></b-form-input>
        </b-form-group>
      </div>
      <div class="col">
        <b-form-group
          id="input-group-date_of_birth"
          label="Data de Nascimento:"
          label-for="input-date_of_birth"
        >
          <b-form-datepicker id="input-date_of_birth" v-model="funcionario.date_of_birth" required></b-form-datepicker>
        </b-form-group>
      </div>
    </div>
    <div class="form-row">
      <div class="col">
        <b-form-group id="input-group-email" label="E-mail:" label-for="input-email">
          <b-form-input
            id="input-email"
            v-model="funcionario.email"
            required
            placeholder="fulano@site.com.br"
            maxlength="120"
          ></b-form-input>
        </b-form-group>
      </div>
    </div>
    <div class="form-row">
      <div class="col">
        <ClientesVSelect />
      </div>
    </div>
    <div class="form-row">
      <div class="col">
        <b-form-group id="input-group-enrolment" label="Matrícula:" label-for="input-enrolment">
          <b-form-input
            id="input-enrolment"
            v-model="funcionario.enrolment"
            required
            placeholder="202002270001"
            maxlength="120"
          ></b-form-input>
        </b-form-group>
      </div>
      <div class="col">
        <b-form-group
          id="input-group-admission_date"
          label="Data de Admissão:"
          label-for="input-admission_date"
        >
          <b-form-datepicker
            id="input-admission_date"
            v-model="funcionario.admission_date"
            today-button
            required
          ></b-form-datepicker>
        </b-form-group>
      </div>
    </div>
    <div class="form-row">
      <div class="col">
        <b-button type="submit" class="btn float-right" variant="primary">
          <font-awesome-icon :icon="['fas', 'save']" />
        </b-button>
      </div>
    </div>
  </b-form>
</template>

<script>
import { mapActions } from "vuex";

import { mask } from "vue-the-mask";

import ClientesVSelect from "./ClientesVSelect";

export default {
  directives: { mask },
  components: {
    ClientesVSelect
  },
  /** Registra evento para capturar o cliente selecionado pelo VSelect */
  created() {
    this.$bus.$on("onClienteSelect", cliente => {
      this.funcionario.client = { ...cliente };
    });
  },
  data() {
    return {
      funcionario: { ...this.$store.state.pages.data },
      show: true
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      let _data = {...this.funcionario} // Copia o objeto para evitar que a remoção da pontuação afete o formulário.
      _data.cpf = _data.cpf.replace(/\D/g, ""); // Remove pontuação antes de enviar.
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
    })
  }
};
</script>