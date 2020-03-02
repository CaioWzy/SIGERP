<template>
  <b-modal id="escalaSemanalModalForm" title="Editar Escala Semanal" size="lg" hide-footer>
    <Form />
  </b-modal>
</template>

<script>
import DefaultModalBase from "~/components/DefaultModalBase";
import Form from "./Form";

export default {
  components: {
    DefaultModalBase,
    Form
  }
};
</script>