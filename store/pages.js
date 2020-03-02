/**
 * Gerencia estado e ações entre os componentes da página de cliente.
 */

const getDefaultState = () => {
  return {
    header: {
      title: ''
    },
    editMode: false,
    showGoBackButton: true,
    isHomePage: false,
    endpoint: '',
    data: {}
  }
}

export const state = getDefaultState()

export const mutations = {
  set(state, data) {
    state.data = data
  },
  setEndpoint(state, endpoint) {
    state.endpoint = endpoint
  },
  setEditMode(state, editMode) {
    state.editMode = editMode
  },
  setIsHomePage(state, isHomePage) {
    state.isHomePage = isHomePage
  },
  setTitle(state, title) {
    state.header.title = title
  },
  reset(state) {
    Object.assign(state, getDefaultState())
  }
}

export const actions = {
  create({ state }, form_data) {
    this.$axios
      .$post(state.endpoint, form_data)
      .then(data => {
        this.app.router.push(`${state.endpoint}${data.id}/`)
      })
      .catch(error => {});
  },
  update({ commit, state }, form_data) {
    console.log(form_data)
    this.$axios
      .$put(`${state.endpoint}${state.data.id}/`, form_data)
      .then(data => {
        commit('set', data)
        this.$bus.$emit('defaultModalForm')
      })
      .catch(error => {});
  },
  get({ commit, state }, id) {
    this.$axios
      .$get(`${state.endpoint}${id}/`)
      .then(data => {
        commit('set', data)
      })
      .catch(error => {});
  },
  delete({ state }) {
    this.$axios
      .$delete(`${state.endpoint}${state.data.id}/`)
      .then(() => {
        this.app.router.push(`${state.endpoint}`)
        this.$bus.$emit('confirmDeleteDialog')
      })
      .catch(error => {});
  }
}
