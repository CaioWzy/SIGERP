<template>
  <b-modal id="modalHistorico" title="Histórico" size="lg" hide-footer>
    <div class="row">
      <div class="col">
        <div class="row">
          <div class="col">
            <label for="from-datepicker">De</label>
          </div>
          <div class="col">
            <label for="from-datepicker">Até</label>
          </div>
          <div class="col-1"></div>
        </div>
        <div class="row">
          <div class="col">
            <div class="row">
              <div class="col">
                <b-form-datepicker id="from-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
              </div>
              <div class="col">
                <b-form-datepicker id="to-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
              </div>
            </div>
          </div>
          <div class="col-1">
            <button type="button" class="btn btn-control btn-custom btn-back float-right">
              <font-awesome-icon :icon="['fas', 'search']" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <b-table striped hover :items="items"></b-table>
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
        { age: 38, first_name: "Jami", last_name: "Carney" }
      ]
    };
  }
};
</script>