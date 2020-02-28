<template>
  <div>
    <Header>
      <template v-slot:title>
        <h2>Funcionários</h2>
      </template>
    </Header>
    <div class="container mt-4">
      <div class="row">
        <div class="col">
          <List />
        </div>
      </div>
    </div>
    <ModalForm />
  </div>
</template>

<script>
import { mapMutations } from "vuex";


import Header from "~/components/Header";
import List from "~/components/Funcionario/List";
import ModalForm from "~/components/Funcionario/ModalForm";

export default {
  layout: "list",
  components: {
    Header,
    List,
    ModalForm
  },
  created() {
    this.setEditMode(false);
  },
  methods: {
    ...mapMutations({
      setEditMode: "pages/setEditMode",
    })
  }
};
</script>

