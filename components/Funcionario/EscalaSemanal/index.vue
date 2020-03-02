<template>
  <div class="information-card mt-4">
    <div class="row">
      <div class="col">
        <div class="row mb-2">
          <div class="col">
            <h5>Escala Semanal</h5>
          </div>
          <div class="col">
            <button
              @click="$bvModal.show('escalaSemanalModalForm')"
              type="button"
              class="btn btn-control float-right"
              style="padding: 0"
            >
              <font-awesome-icon :icon="['fas', 'edit']" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <section>
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
          <ModalForm />
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import ModalForm from "./ModalForm";
export default {
  components: {
    ModalForm
  },
  props: {
    escalaSemanal: Array
  },
  methods: {
    weekDayToString(weekday) {
      console.log(weekday);
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
        if (key == weekday) return weekdays[key];
      }
    }
  }
};
</script>