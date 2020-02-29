export const state = () => ({
  id: null,
  company_name: null,
  fantasy_name: null,
  cnpj: null
})

export const mutations = {
  setCliente(state, { cliente }) {
    state.id = cliente.id
    state.company_name = cliente.company_name
    state.fantasy_name = cliente.fantasy_name
    state.cnpj = cliente.cnpj
  },
  setId(state, value) {
    state.id = value  
  },
  setCompanyName(state, value) {
    state.company_name = value  
  },
  setFantasyName(state, value) {
    state.fantasy_name = value
  },
  setCnpj(state, value) {
    state.cnpj = value
  },
  resetCliente(state) {
    state.id = null,
    state.company_name = null,
    state.fantasy_name = null,
    state.cnpj = null
  }
}
