<template>
  <div>
    <div class="page-header mb-4">
      <div class="container py-2">
        <div class="row">
          <div class="col-1">
            <nuxt-link to="">
              <button type="button" class="btn btn-control btn-custom btn-back">
                <font-awesome-icon :icon="['fas', 'angle-left']" />
              </button>
            </nuxt-link>
          </div>
          <div class="col page-header--search-box">
            <SearchBox />
          </div>
          <div class="col-1">
            <UserMenuButton />
          </div>
        </div>
        <div class="row mt-4">
          <div class="col">
            <h2 class="listpage__title">Clientes</h2>
          </div>
          <div class="col">
            <div class="controls float-right">
              <FormModal />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style src="./style.css"></style>