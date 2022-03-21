import { createStore } from 'vuex'
import apiMethods from "@/store/api";
import userModule from "@/store/user";

const store = createStore({
  modules: {
    api: apiMethods,
    user: userModule
  }
})

export default store