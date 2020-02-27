export const state = () => ({
  company_name: "",
  fantasy_name: "",
  cnpj: ""
})

export const mutations = {
  setCliente(state, { cliente }) {
    state.company_name = cliente.company_name
    state.fantasy_name = cliente.fantasy_name
    state.cnpj = cliente.cnpj
  },
  setCompanyName(state, value) {
    state.company_name = value  
  },
  setFantasyName(state, value) {
    state.fantasy_name = value
  },
  setCnpj(state, value) {
    state.cnpj = value
  }
  /*
  add(state, text) {
    state.list.push({
      text,
      done: false
    })
  },
  remove(state, {
    todo
  }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(state, todo) {
    todo.done = !todo.done
  }
  */
}
