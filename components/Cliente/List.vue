<template>
  <b-table id="clientesListTable" striped hover :items="fetchData" :fields="fields"  @row-clicked="showItem" />
</template>

<script>
export default {
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
    showItem(item, index) {
      this.$router.push(`/clientes/${item.id}`)
    },
    fetchData(ctx, callback) {
      this.$axios
        .$get("http://127.0.0.1:8000/api/clientes/")
        .then(data => {
          callback(data.clientes);
        })
        .catch(error => {
          return [];
        });
    }
  }
};
</script>