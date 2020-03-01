<template>
  <b-form-group id="input-group-cliente" label="Empresa:" label-for="select-cliente">
    <v-select
      @search="onSearch"
      label="company_name"
      placeholder="Pesquisar cliente"
      :options="options"
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
      selected: ""
    };
  },
  methods: {
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