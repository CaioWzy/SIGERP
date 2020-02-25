<template>
  <div>
    <div class="page-header">
      <div class="container py-2">
        <div class="row">
          <div class="col-1">
            <nuxt-link to>
              <button type="button" class="btn btn-control btn-custom btn-back">
                <font-awesome-icon :icon="['fas', 'angle-left']" />
              </button>
            </nuxt-link>
          </div>
          <div class="col">
            <SearchBox />
          </div>
          <div class="col-1">
            <UserMenuButton />
          </div>
        </div>
      </div>
    </div>
    <nuxt />
  </div>
</template>

<script src="./script.js"></script>

<style src="./style.css"></style>