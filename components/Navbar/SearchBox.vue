<template>
  <div class="input-group input-group--custom">
    <input
      type="text"
      class="form-control form-control--custom"
      :class="{'form-control--active': hasChars }"
      v-model="SearchInput"
      @change="checkHasChars"
      placeholder="Pesquisar"
    />
  </div>
</template>

<style>
.form-control--custom {
  background: rgba(0, 0, 0, 0.15);
  border: none;
}

.form-control--custom:focus {
  box-shadow: none;
  border: none;
}

.form-control--custom::placeholder {
  color: #fff;
}

.form-control--active {
  background: #fff !important;
}
</style>

<script>
export default {
  data() {
    return {
      hasChars: false,
      SearchInput: ""
    };
  },
  methods: {
    checkHasChars() {
      if (this.SearchInput.trim() == "") {
        this.hasChars = false;
      } else {
        this.hasChars = true;
      }
    }
  }
};
</script>