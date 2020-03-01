<template>
  <div>
    <div class="container mt-4">
      <div class="row">
        <div class="col">
          <List />
        </div>
      </div>
    </div>
    <DefaultModalForm />
  </div>
</template>

<script>
import { mapMutations } from "vuex";

import List from "~/components/Cliente/List";
import DefaultModalForm from "~/components/Cliente/DefaultModalForm";

export default {
  components: {
    List,
    DefaultModalForm
  },
  created() {
    this.reset()
    this.setTitle('Clientes');
    this.setEndpoint('/clientes/');
  },
  methods: {
    ...mapMutations({
      setEndpoint: "pages/setEndpoint",
      setTitle: "pages/setTitle",
      reset: "pages/reset",
    })
  }
};
</script>

