<template>
  <ListPage>
    <template v-slot:title>
      <h2>Funcionários</h2>
    </template>
    <template v-slot:controls>
      <ClienteFormModal />
    </template>
    <template v-slot:table>
      <b-table striped hover :items="fetchData" :fields="fields" />
    </template>
  </ListPage>
</template>

<script>
import ListPage from "~/components/ListPage";
import ClienteFormModal from "~/components/Cliente/ClienteFormModal";
export default {
  layout: "list/index",
  components: {
    ListPage,
    ClienteFormModal
  },
  data() {
    return {
      fields: [
        {
          key: "name",
          sortable: "true",
          label: "Nome"
        },
        {
          key: "enrolment",
          sortable: "true",
          label: "Matrícula"
        }
      ]
    };
  },
  methods: {
    fetchData(ctx, callback) {
      this.$axios
        .$get("http://www.mocky.io/v2/5e5580d531000033b7eb38fb")
        .then(data => {
          callback(data);
        })
        .catch(error => {
          return [];
        });
    }
  }
};
</script>

