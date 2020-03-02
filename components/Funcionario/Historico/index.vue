<template>
  <div class="information-card">
    <div class="row">
      <div class="col">
        <h5>Resumo do Mês</h5>
        <ul class="information">
          <li>
            <font-awesome-icon :icon="['fas', 'calendar-times']" />
            <span>
              <b>4</b> Faltas
            </span>
          </li>
          <li>
            <font-awesome-icon :icon="['fas', 'clock']" />
            <span>
              <b>2</b> Atrasos
            </span>
          </li>
          <li>
            <font-awesome-icon :icon="['fas', 'hourglass']" />
            <span>
              <b>4</b> horas extras
            </span>
          </li>
        </ul>
      </div>
      <div class="col-1">
        <button type="button" @click="$bvModal.show('historicoModalForm')" class="btn btn-control float-right" style="padding: 0;">
          <font-awesome-icon :icon="['fas', 'history']" />
        </button>
        <Form />
      </div>
    </div>
  </div>
</template>

<script>
import Form from './Form'
export default {
  components: {
    Form
  }
}
</script>