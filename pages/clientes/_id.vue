<template>
  <div>
    <Header>
      <template v-slot:title>
        <h2>{{ company_name }}</h2>
      </template>
      <template v-slot:controls>
        <ModalForm editMode />
      </template>
    </Header>
    <div class="container mt-4">
      <div class="row">
        <div class="col">
          <div class="information-card">
            <ul class="information">
              <li>
                <font-awesome-icon :icon="['fas', 'briefcase']" />
                <span>
                  <b>{{ fantasy_name }}</b>
                </span>
              </li>
              <li>
                <font-awesome-icon :icon="['fas', 'id-card']" />
                <span>{{ cnpj }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Header from "~/components/Header";
import ModalForm from "~/components/Cliente/ModalForm";

export default {
  layout: "default",
  components: {
    Header,
    ModalForm
  },
  mounted() {
    console.log(this.$route.params.id);
  },
  created() {
    this.fetchData();
  },
  computed: {
    fantasy_name() {
      return this.$store.state.clientes.fantasy_name;
    },
    company_name() {
      return this.$store.state.clientes.company_name;
    },
    cnpj() {
      return this.$store.state.clientes.cnpj;
    }
  },
  methods: {
    fetchData() {
      this.$axios
        .$get("http://127.0.0.1:8000/api/clientes/2")
        .then(data => {
          this.setCliente(data);
        })
        .catch(error => {
          //return {};
        });
    },
    ...mapMutations({
      setCliente: "clientes/setCliente"
    })
  }
};
</script>