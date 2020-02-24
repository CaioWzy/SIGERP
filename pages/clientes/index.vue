<template>
  <div class="col">
    <b-table striped hover :items="items" :fields="fields"></b-table>
  </div>
</template>

<script>
export default {
  layout: "list",
  data() {
        return {
          fields: [
            {
              key: 'fantasy_name',
              sortable: 'true',
              label: 'Nome Fantasia'
            },
            {
              key: 'company_name',
              sortable: 'true',
              label: 'Razão Social'
            },
            {
              key: 'cnpj',
              label: 'CNPJ'
            },
          ],
          items: [
            { id: 1, fantasy_name: 'Ristoranti in Brasile', company_name: 'COMIDAS BRASILEIRAS LTDA', cnpj: '35.535.360/0001-72' },
            { id: 2, fantasy_name: 'Ristoranti in Brasile', company_name: 'COMIDAS BRASILEIRAS LTDA', cnpj: '35.535.360/0001-72' },
            { id: 3, fantasy_name: 'Ristoranti in Brasile', company_name: 'COMIDAS BRASILEIRAS LTDA', cnpj: '35.535.360/0001-72' },
            { id: 4, fantasy_name: 'Ristoranti in Brasile', company_name: 'COMIDAS BRASILEIRAS LTDA', cnpj: '35.535.360/0001-72' },
          ]
        }
      }
};
</script>

