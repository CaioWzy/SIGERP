<template>
  <div>
    <div class="page-header">
      <div class="container py-1">
        <div class="row">
          <div class="col">
            <slot name="title"></slot>
          </div>
          <div class="col">
            <div class="controls float-right">
              <slot name="controls"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-4">
      <div class="row">
        <slot name="table"></slot>
      </div>
    </div>
  </div>
</template>