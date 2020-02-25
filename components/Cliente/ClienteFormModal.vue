<template>
    <FormModal>
        <template v-slot:form>
            <Form />
        </template>
    </FormModal>
</template>

<script>
import FormModal from '~/components/FormModal'
import Form from '~/components/Cliente/Form'
export default {
    components: {
        FormModal,
        Form
    }
}
</script>