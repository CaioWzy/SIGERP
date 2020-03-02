<template>
  <ModalButton editMode entity="Escala Semanal" modalFormId="modalFormEscalaSemanal">
    <template v-slot:form>
      <EscalaSemanalForm />
    </template>
  </ModalButton>
</template>

<script>
import ModalButton from "../ModalButton";
import EscalaSemanalForm from "./EscalaSemanalForm";

export default {
  components: {
    ModalButton,
    EscalaSemanalForm
  }
};
</script>