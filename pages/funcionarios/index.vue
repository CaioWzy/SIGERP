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
import DefaultModalForm from "~/components/Funcionario/DefaultModalForm";

export default {
  components: {
    InfiniteTable,
    DefaultModalForm
  },
  created() {
    this.reset();
    this.setTitle("Funcionários");
    this.setEndpoint("/funcionarios/");
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
          label: "Matrícula"
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

