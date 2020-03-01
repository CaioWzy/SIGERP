<template>
  <div>
    <b-table ref="table" striped hover :items="items" :fields="fields" @row-clicked="onRowClick" />
    <infinite-loading @infinite="onInfiniteScrolling">
      <div slot="no-more">Fim :)</div>
      <div slot="no-results">Nenhum registro foi encontrado</div>
    </infinite-loading>
  </div>
</template>

<script>
import InfiniteLoading from "vue-infinite-loading";

export default {
  components: {
    InfiniteLoading
  },
  data() {
    return {
      current_page: 1,
      items: []
    };
  },
  props: {
    endpoint: {
      type: String,
      default: ""
    },
    fields: {
      type: Array,
      default: []
    },
    per_page: {
      type: Number,
      default: 25
    }
  },
  methods: {
    onInfiniteScrolling($state) {
      const offset = this.per_page * this.current_page;
      const params = `?limit=${this.per_page}&offset=${offset}`;
      this.$axios
        .$get(this.endpoint + params)
        .then(data => {
          if (data.results.length) {
            this.items.push(...data.results);
            $state.loaded();
          }
          if (!data.next) $state.complete();
          this.current_page++;
        })
        .catch(error => {});
    },
    onRowClick(item, index) {
      this.$router.push(`${this.endpoint}${item.id}`);
    }
  }
};
</script>