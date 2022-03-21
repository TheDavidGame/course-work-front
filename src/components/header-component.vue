import

<template>
  <v-app-bar
      elevation="0"
      style="background-color: rgba(29, 53, 87); z-index: 1000"
  >
    <router-link to="/">
      <v-toolbar-title style="color: #e63946">Itmall</v-toolbar-title>
    </router-link>

    <v-spacer></v-spacer>

    <v-btn v-if="isAuthenticated" @click="logoutUser">
      <v-img :src="require('../assets/logout.png')"/>
    </v-btn>
    <router-link v-else to="/user">
      <v-btn>
        <v-img :src="require('../assets/user.png')"/>
      </v-btn>
    </router-link>

    <v-btn class="ml-4" @click="openCart">
      <v-img :src="require('../assets/cart.png')"/>
    </v-btn>

    <v-menu offset-y>
      <template v-slot:activator="{ props }">
        <v-btn
            v-bind="props"
            rounded="0"
            class="white--text mr-15 ml-10 app-menu-category"
            :ripple="false"
        >
          Категории
        </v-btn>
      </template>
      <v-list class="pt-0">
        <v-list-item
            v-for="(item, index) in items"
            :key="index"
            link
            style="background-color: #F1FAEE; z-index: 1001"
        >
          <v-list-item-title @click="goToProductTypePage(item.id)">{{ item.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

  </v-app-bar>
</template>

<script>
import router from "@/router";
import {mapActions, mapMutations, mapState} from "vuex";

export default {
  name: 'header-component',
  data: () => ({
    items: []
  }),
  computed: {
    ...mapState({isAuthenticated: state => state.user.isAuthenticated})
  },
  beforeMount() {
    this.checkAuthentication()
    this.getProductTypes()
        .then(result => this.items = result.data)
  },
  methods: {
    ...mapMutations(['notAuthenticate']),
    ...mapActions(['getProductTypes', 'checkAuthentication', 'logout']),
    goToProductTypePage(id) {
      router.push(`/categories/${id}`);
    },
    logoutUser() {
      this.logout().then(() => {
        this.notAuthenticate()
        router.push(`/`)
      })
    },
    openCart() {
      this.isAuthenticated ? router.push('/cart') : router.push('/user')
    }
  }
}
</script>

<style>
.app-menu-category {
  background-color: #E63946;
  color: #F1FAEE
}

.app-menu-category:hover, .app-menu-category:focus {
  background-color: #457B9D;
}
</style>
