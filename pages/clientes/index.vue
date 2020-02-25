<template>
  <ListPage>
    <template v-slot:title>
      <h2>Cliente</h2>
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
          key: "fantasy_name",
          sortable: "true",
          label: "Nome Fantasia"
        },
        {
          key: "company_name",
          sortable: "true",
          label: "Razão Social"
        },
        {
          key: "cnpj",
          label: "CNPJ"
        }
      ]
    };
  },
  methods: {
    fetchData(ctx, callback) {
      this.$axios
        .$get("http://www.mocky.io/v2/5e544f143100006d00eb3154")
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

