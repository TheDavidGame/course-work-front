<template>
  <v-app id="apps" style="min-height: 100%">
    <header-component/>
    <main-component/>
    <footer-component/>
  </v-app>
</template>

<script>
import HeaderComponent from "@/components/header-component"
import MainComponent from "@/components/main-component"
import FooterComponent from "@/components/footer-component"

export default {
  name: 'App',

  components: {
    FooterComponent,
    MainComponent,
    HeaderComponent
  },

  data: () => ({
    //
  }),
}
</script>
