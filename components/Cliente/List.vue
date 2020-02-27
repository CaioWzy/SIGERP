<template>
  <b-table striped hover :items="fetchData" :fields="fields"  @row-clicked="showItem" />
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