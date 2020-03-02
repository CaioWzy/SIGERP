<template>
  <b-form @submit="onSubmit" @reset="onReset" v-if="show">
    <div class="form-row">
      <div class="col">
        <legend>Escala Semanal</legend>
      </div>
      <div class="col">
        <button
          @click="adicionarEscala"
          type="button"
          class="btn btn-control btn-custom btn-back float-right"
        >
          <font-awesome-icon :icon="['fas', 'plus']" />
        </button>
      </div>
    </div>
    <template v-for="(escala, index) in escala_semanal">
      <div class="form-row py-1" :key="escala.id">
        <div class="col-6">
          <b-form-select v-model="escala.weekday" :options="weekdays" required></b-form-select>
        </div>
        <div class="col">
          <b-form-input
            v-model="escala.marking_in"
            required
            placeholder="Entrada"
            type="time"
            min="00:00"
            max="23:59"
          ></b-form-input>
        </div>
        <div class="col">
          <b-form-input
            v-model="escala.marking_out"
            required
            placeholder="Saída"
            type="time"
            min="00:00"
            max="23:59"
          ></b-form-input>
        </div>
        <div class="col-1">
          <button
            @click="removerEscala(index)"
            type="button"
            class="btn btn-control btn-custom btn-danger float-right"
          >
            <font-awesome-icon :icon="['fas', 'trash']" />
          </button>
        </div>
      </div>
    </template>
    <div class="form-row">
      <div class="col">
        <b-button type="submit" class="btn btn-primary float-right mt-4" variant="primary">
          <font-awesome-icon :icon="['fas', 'save']" />
        </b-button>
      </div>
    </div>
  </b-form>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      escala_semanal: [
        {
          weekday: null,
          marking_in: "",
          marking_out: ""
        }
      ],
      weekdays: [
        {
          text: "Dia da Semana",
          value: null,
          disabled: true
        },
        {
          text: "Domingo",
          value: 0
        },
        {
          text: "Segunda-Feira",
          value: 1
        },
        {
          text: "Terça-Feira",
          value: 2
        },
        {
          text: "Quarta-Feira",
          value: 3
        },
        {
          text: "Quinta-Feira",
          value: 4
        },
        {
          text: "Sexta-Feira",
          value: 5
        },
        {
          text: "Sábado",
          value: 6
        }
      ]
    };
  },
  methods: {
    adicionarEscala() {
      if (this.escala_semanal.length < 7) {
        this.escala_semanal.push({
          weekday: null,
          marking_in: "",
          marking_out: ""
        });
      }
    },
    removerEscala(index) {
      this.escala_semanal.splice(index, 1);
    },
    onSubmit(e) {
      e.preventDefault();
    },
    onReset(e) {
      e.preventDefault();

      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>
