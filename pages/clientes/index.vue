<template>
  <div>
    <div class="container mt-4">
      <div class="row">
        <div class="col">
          <InfiniteTable :endpoint="endpoint" :fields="fields" />
        </div>
      </div>
    </div>
    <DefaultModalForm />
  </div>
</template>

<script>
import { mapMutations } from "vuex";

import InfiniteTable from "~/components/InfiniteTable";
import DefaultModalForm from "~/components/Cliente/DefaultModalForm";

export default {
  components: {
    InfiniteTable,
    DefaultModalForm
  },
  created() {
    this.reset();
    this.setTitle("Clientes");
    this.setEndpoint("/clientes/");
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
        }
      ]
    };
  },
  computed: {
    endpoint() {
      return this.$store.state.pages.endpoint;
    }
  },
  methods: {
    ...mapMutations({
      setEndpoint: "pages/setEndpoint",
      setTitle: "pages/setTitle",
      reset: "pages/reset"
    })
  }
};
</script>

