<template>
  <div>
    <div class="container mt-4">
      <div class="row">
        <div class="col">
          <div class="information-card">
            <ul class="information">
              <li>
                <font-awesome-icon :icon="['fas', 'briefcase']" />
                <span>
                  <b>{{ cliente.company_name }}</b>
                </span>
              </li>
              <li>
                <font-awesome-icon :icon="['fas', 'id-card']" />
                <span>{{ cliente.cnpj }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <DefaultModalForm />
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

import DefaultModalForm from "~/components/Cliente/DefaultModalForm";

export default {
  components: {
    DefaultModalForm
  },
  created() {
    this.setEditMode(true);
    this.setEndpoint("/clientes/");
    this.get(this.$route.params.id);
  },
  beforeUpdate() {
    this.setTitle(this.cliente.fantasy_name);
  },
  computed: {
    cliente() {
      return this.$store.state.pages.data;
    }
  },
  methods: {
    ...mapActions({
      get: "pages/get"
    }),
    ...mapMutations({
      setTitle: "pages/setTitle",
      setEndpoint: "pages/setEndpoint",
      setEditMode: "pages/setEditMode"
    })
  }
};
</script>