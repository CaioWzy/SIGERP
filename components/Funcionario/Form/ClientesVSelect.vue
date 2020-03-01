<template>
  <b-form-group id="input-group-cliente" label="Empresa:" label-for="select-cliente">
    <v-select
      @search="onSearch"
      label="company_name"
      placeholder="Pesquisar cliente"
      :options="options"
      @input="onSelect"
      v-model="selected"
    ></v-select>
  </b-form-group>
</template>

<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

import _ from "lodash";

export default {
  components: {
    vSelect
  },
  data() {
    return {
      options: [],
      selected: { ...this.$store.state.pages.data.client }
    };
  },
  computed: {},
  methods: {
    /** Quando um Cliente (Empresa) é selecionado, dispara um evento
     * que será capturado e armazenado nos dados do formulário.
     */
    onSelect(cliente) {
      this.$bus.$emit("onClienteSelect", cliente);
    },
    onSearch: _.debounce(function(search, loading) {
      loading = true;
      this.$axios
        .$get(`/clientes/?search=${escape(search)}&limit=10`)
        .then(data => {
          if (Object.keys(data.results).length) this.options = data.results;
          else this.options = [];
          loading = false;
        })
        .catch(error => {
          this.options = [];
          loading = false;
        });
    }, 500)
  }
};
</script>