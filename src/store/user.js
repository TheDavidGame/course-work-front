const userModule = {
  state: () => ({
    isAuthenticated: false
  }),
  mutations: {
    authenticate(state) {
      state.isAuthenticated = true
    },
    notAuthenticate(state) {
      state.isAuthenticated = false
    }
  },
}

export default userModule;