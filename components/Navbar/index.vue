<template>
  <nav class="page-header">
    <div class="container py-2">
      <div class="row">
        <div class="col-1">
          <GoBackButton />
        </div>
        <div class="col">
          <SearchBox  />
        </div>
        <div class="col-1">
          <UserMenuButton />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import GoBackButton from './GoBackButton';
import SearchBox from './SearchBox';
import UserMenuButton from './UserMenuButton';

export default {
  components: {
    GoBackButton,
    UserMenuButton,
    SearchBox
  }
};
</script>