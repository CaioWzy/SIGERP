<template>
  <div>
    <Header editMode>
      <template v-slot:title>
        <h2>{{ funcionario.name }}</h2>
      </template>
      <template v-slot:controls>
        <b-button @click="$bvModal.show('modalHistorico')" class="btn btn-custom btn-add">
          <font-awesome-icon :icon="['fas', 'history']" />
        </b-button>
        <b-button @click="$bvModal.show('modalHistorico')" class="btn btn-custom btn-add">
          <font-awesome-icon :icon="['fas', 'trash']" />
        </b-button>
      </template>
    </Header>
    <div class="container mt-4">
      <div class="row">
        <div class="col">
          <div class="information-card">
            <ul class="information">
              <li>
                <font-awesome-icon :icon="['fas', 'briefcase']" />
                <span>
                  <b>{{ funcionario.cliente.fantasy_name }}</b>
                  desde {{ funcionario.admission_date }}
                </span>
              </li>
              <li>
                <font-awesome-icon :icon="['fas', 'user']" />
                <span>
                  <b>{{ funcionario.enrolment }}</b>
                </span>
              </li>
              <li>
                <font-awesome-icon :icon="['fas', 'envelope']" />
                <span>{{ funcionario.email }}</span>
              </li>
              <li>
                <font-awesome-icon :icon="['fas', 'id-card']" />
                <span>{{ funcionario.cpf }}</span>
              </li>
              <li>
                <font-awesome-icon :icon="['fas', 'birthday-cake']" />
                <span>{{ funcionario.date_of_birth }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <EscalaSemanalCard class="mb=2" :escalaSemanal="funcionario.people_times" />
      <Historico />
    </div>
    <ModalForm />
    <ModalFormEscalaSemanal />
    <ModalHistorico />
  </div>
</template>

<script>
import { mapMutations } from "vuex";


import Header from "~/components/Header";
import EscalaSemanalCard from "~/components/Funcionario/EscalaSemanalCard";

import ModalForm from "~/components/Funcionario/ModalForm";
import ModalFormEscalaSemanal from "~/components/Funcionario/ModalFormEscalaSemanal";
import Historico from "~/components/Funcionario/Historico";

export default {
  layout: "default",
  components: {
    Header,
    EscalaSemanalCard,
    ModalForm,
    ModalFormEscalaSemanal,
    Historico
  },
  data() {
    return {
      funcionario: {
        cliente: {},
        people_times: []
      }
    };
  },
  created() {
    this.setEditMode(true);
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.$axios
        .$get("http://www.mocky.io/v2/5e55be303000000f0028e15f")
        .then(data => {
          this.funcionario = data;
        })
        .catch(error => {
          //return {};
        });
    },
    ...mapMutations({
      setEditMode: "pages/setEditMode",
    })
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