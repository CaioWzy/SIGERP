<template>
  <section>
    <div class="row mb-2">
      <div class="col">
        <h4>Escala Semanal</h4>
      </div>
      <div class="col">
        <button type="button" class="btn btn-control btn-custom btn-back float-right">
          <font-awesome-icon :icon="['fas', 'edit']" />
        </button>
      </div>
    </div>
    <div class="row">
      <template v-for="weekday in escalaSemanal">
        <div class="col" v-bind:key="weekday.id">
          <div class="card text-center">
            <div class="card-header bg-warning text-white"></div>
            <div class="card-body">
              <span>
                <b>{{ weekDayToString(weekday.weekday) }}</b>
                <br />
                {{ weekday.marking_in }} às {{ weekday.marking_out }}
              </span>
            </div>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    escalaSemanal: Array
  },
  methods: {
    weekDayToString(weekday) {
      console.log(weekday)
      let weekdays = {
        0: "Domingo",
        1: "Segunda-Feira",
        2: "Terça-Feira",
        3: "Quarta-Feira",
        4: "Quinta-Feira",
        5: "Sexta-Feira",
        6: "Sábado"
      };
      for (let key in weekdays) {
        if (key == weekday) return weekdays[key]
      }
    }
  }
};
</script>