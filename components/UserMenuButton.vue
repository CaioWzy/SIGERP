<template>
  <b-dropdown
    type="button"
    right
    class="btn btn-control custom-dropdown float-right"
    toggle-class="btn-custom btn-user"
  >
    <template v-slot:button-content>
      <font-awesome-icon :icon="['fas', 'user']" />
    </template>
    <b-dropdown-item>
      <div class="row">
        <div class="col">Sair</div>
        <div class="col">
          <div class="float-right">
            <font-awesome-icon :icon="['fas', 'sign-out-alt']" />
          </div>
        </div>
      </div>
    </b-dropdown-item>
  </b-dropdown>
</template>

<style>
.custom-dropdown {
  padding: 0;
}

.btn-user {
  padding: 0;
}
.btn-user:hover {
  color: #2980b9 !important;
}
.btn-user::after {
  content: none;
}

.show > .btn-user.dropdown-toggle {
  color: #2980b9 !important;
  background: #fff !important;
}
</style>