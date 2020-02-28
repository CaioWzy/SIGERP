<template>
  <b-table striped hover :items="fetchData" :fields="fields" @row-clicked="showFuncionario" />
</template>

<script>
export default {
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
    showFuncionario(funcionario, index) {
      this.$router.push(`/funcionarios/${funcionario.id}`)
    },
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