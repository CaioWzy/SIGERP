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
                  <b>{{ funcionario.client.fantasy_name }}</b>
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
                  <b>{{ funcionario.cpf }}</b>
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
      <EscalaSemanalCard class="mb=2" :escalaSemanal="funcionario.people_times" />
      <Historico />
    </div>
    <DefaultModalForm />
    <ModalFormEscalaSemanal />
    <ModalHistorico />
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import { humanizeDate } from "~/utils";

import EscalaSemanalCard from "~/components/Funcionario/EscalaSemanalCard";

import DefaultModalForm from "~/components/Funcionario/DefaultModalForm";

import ModalFormEscalaSemanal from "~/components/Funcionario/ModalFormEscalaSemanal";
import Historico from "~/components/Funcionario/Historico";

export default {
  components: {
    EscalaSemanalCard,
    DefaultModalForm,
    ModalFormEscalaSemanal,
    Historico
  },
  created() {
    console.log(humanizeDate);
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
    }
  },
  methods: {
    fetchData() {
      this.$axios
        .$get(`http://127.0.0.1:8000/api/funcionarios/${this.$route.params.id}`)
        .then(data => {
          //this.funcionario = data;
          this.setFuncionario(data);
          console.log(data);
        })
        .catch(error => {
          //return {};
        });
    },
    ...mapActions({
      get: "pages/get"
    }),
    ...mapMutations({
      setTitle: "pages/setTitle",
      setEndpoint: "pages/setEndpoint",
      setEditMode: "pages/setEditMode"
    }),
    humanizeDate
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