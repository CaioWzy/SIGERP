<template>
  <DefaultModalBase entity="Cliente">
    <template v-slot:form>
      <Form />
    </template>
  </DefaultModalBase>
</template>

<script>
import DefaultModalBase from "../DefaultModalBase";
import Form from "./Form";

export default {
  components: {
    DefaultModalBase,
    Form
  }
};
</script>