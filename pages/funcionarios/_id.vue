<template>
  <div>
    <div class="container mt-4">
      <div class="row">
        <div class="col">
          <div class="information-card">
            <ul class="information">
              <li v-if="hasClienteData">
                <font-awesome-icon :icon="['fas', 'briefcase']" />
                <span>
                  Trabalha na empresa
                  <b>{{ funcionario.client.company_name }}</b>
                  desde
                  <b>{{ humanizeDate(funcionario.admission_date) }}</b>
                </span>
              </li>

              <li>
                <font-awesome-icon :icon="['fas', 'user']" />
                <span>
                  Matrícula
                  <b>{{ funcionario.enrolment }}</b>
                </span>
              </li>
              <li>
                <font-awesome-icon :icon="['fas', 'envelope']" />
                <span>
                  E-mail
                  <b>{{ funcionario.email }}</b>
                </span>
              </li>
              <li>
                <font-awesome-icon :icon="['fas', 'id-card']" />
                <span>
                  CPF
                  <b>{{ maskedCpf }}</b>
                </span>
              </li>
              <li>
                <font-awesome-icon :icon="['fas', 'birthday-cake']" />
                <span>
                  Nasceu em
                  <b>{{ humanizeDate(funcionario.date_of_birth) }}</b>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-4">
          <div class="information-card"></div>
        </div>
      </div>
      <EscalaSemanal class="mb=2" :escalaSemanal="funcionario.people_times" />
      <Historico />
    </div>
    <DefaultModalForm />
    <ModalHistorico />
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import { humanizeDate } from "~/utils";
import { maskIt } from "~/utils";


import DefaultModalForm from "~/components/Funcionario/DefaultModalForm";

import EscalaSemanal from "~/components/Funcionario/EscalaSemanal";
import Historico from "~/components/Funcionario/Historico";

export default {
  components: {
    EscalaSemanal,
    DefaultModalForm,
    Historico
  },
  created() {
    this.setEditMode(true);
    this.setEndpoint("/funcionarios/");
    this.get(this.$route.params.id);
  },
  beforeUpdate() {
    this.setTitle(this.funcionario.name);
  },
  computed: {
    funcionario() {
      return this.$store.state.pages.data;
    },
    hasClienteData() {
      if (this.funcionario.client)
        return Boolean(Object.keys(this.funcionario.client).length);
    },
    maskedCpf() {
      let cpf = this.$store.state.pages.data.cpf;
      if (cpf) return this.maskIt(cpf, "###.###.###.##");
    }
  },
  methods: {
    ...mapActions({
      get: "pages/get"
    }),
    ...mapMutations({
      setTitle: "pages/setTitle",
      setEndpoint: "pages/setEndpoint",
      setEditMode: "pages/setEditMode"
    }),
    humanizeDate,
    maskIt
  }
};
</script>

<style>
.information {
  margin: 0;
  padding: 0;
  list-style: none;
}
.information > li > svg {
  width: 1rem !important;
  margin-right: 0.75rem;
  color: rgba(44, 62, 80, 1);
}

.information > li > span {
  color: rgba(127, 140, 141, 1);
}

.information-card {
  background: rgba(236, 240, 241, 1);
  border-radius: 0.25rem;
  padding: 1rem;
  height: 100%;
}
</style>