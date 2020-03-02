<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-2">
        <Card to="/clientes/">
          <template v-slot:content>
            <Item v-slot:content faIcon="briefcase" title="Clientes" />
          </template>
        </Card>
      </div>
      <div class="col-2">
        <Card to="/funcionarios/">
          <template v-slot:content>
            <Item v-slot:content faIcon="user" title="Funcionários" />
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Card from "~/components/Dashboard/Card";
import Item from "~/components/Dashboard/Card/Item";
export default {
  created() {
    this.reset();
    this.setIsHomePage(true);
  },
  components: {
    Card,
    Item
  },
  methods: mapMutations({
    reset: "pages/reset",
    setTitle: "pages/setTitle",
    setIsHomePage: "pages/setIsHomePage"
  })
};
</script>