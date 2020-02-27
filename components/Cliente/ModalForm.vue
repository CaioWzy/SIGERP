<template>
  <ModalButton editMode entity="Cliente" modalFormId="modalFormDefault">
    <template v-slot:form>
      <Form />
    </template>
  </ModalButton>
</template>

<script>
import ModalButton from "../ModalButton";
import Form from "./Form";

export default {
  components: {
    ModalButton,
    Form
  }
};
</script>