<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-2">
        <nuxt-link to="/clientes">
          <Card>
            <template v-slot:content>
              <h1>clientes</h1>
              <font-awesome-icon :icon="['fas', 'briefcase']" size="5x" />
            </template>
          </Card>
        </nuxt-link>
      </div>
      <div class="col-2">
        <nuxt-link to="/funcionarios">
          <b-col>
            <b-button xs>
              <h3>Funcionarios</h3>
            </b-button>
          </b-col>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Card from "~/components/Dashboard/Card";
export default {
  created() {
    this.reset();
    this.setTitle("Olá, Caio.");
  },
  components: {
    Card
  },
  methods: mapMutations({
    reset: "pages/reset",
    setTitle: "pages/setTitle"
  })
};
</script>