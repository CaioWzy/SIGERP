<template>
  <nav class="page-header">
    <div class="container py-2">
      <div class="row">
        <div class="col-1">
          <template v-if="!disableGoBack">
            <button @click="goBack" type="button" class="btn btn-control btn-custom btn-back">
              <font-awesome-icon :icon="['fas', 'angle-left']" />
            </button>
          </template>
        </div>
        <div class="col">
          <SearchBox v-if="enableSearchBox" />
        </div>
        <div class="col-1">
          <UserMenuButton />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import UserMenuButton from "~/components/UserMenuButton";
import SearchBox from "~/components/SearchBox";

export default {
  components: {
    UserMenuButton,
    SearchBox
  },
  props: {
    enableGoBack: Boolean,
    enableSearchBox: Boolean
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  }
};
</script>