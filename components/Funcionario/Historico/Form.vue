<template>
  <b-modal id="historicoModalForm" title="Histórico" size="lg" hide-footer>
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
            <button type="button" class="btn btn-control float-right">
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
        { Dia: "02/02/2019", Chegada: "10:00", Saída: "18:00" },
        { Dia: "05/02/2019", Chegada: "12:00", Saída: "13:00" },
        { Dia: "10/02/2019", Chegada: "10:00", Saída: "18:00" },
        { Dia: "12/02/2019", Chegada: "-", Saída: "-" },
      ]
    };
  }
};
</script>