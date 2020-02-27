<template>
  <div>
    <Header>
      <template v-slot:title>
        <h2>Clientes</h2>
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
import Header from "~/components/Header";
import ModalForm from "~/components/Cliente/ModalForm";
import List from "~/components/Cliente/List"
export default {
  layout: "list",
  components: {
    Header,
    ModalForm,
    List
  }
}
</script>

