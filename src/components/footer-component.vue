<template>
  <v-footer class="pa-0 app-footer">
    <v-row>
      <v-spacer/>
      <v-col sm="1" align="center">
        <v-img class="footer-logo" :src="require('../assets/vk-social-logotype.png')"/>
      </v-col>
      <v-col sm="1" align="center">
        <v-img class="footer-logo" :src="require('../assets/instagram.png')"/>
      </v-col>
      <v-col sm="1" align="center">
        <v-img class="footer-logo justify-center" :src="require('../assets/facebook.png')"/>
      </v-col>
      <v-spacer/>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'footer-component'
}
</script>

<style scoped>
  .app-footer {
    background-color: #1D3557;
    max-height: 7%;
    min-height: 70px;
  }
  .footer-logo {
    max-width: 45%;
    min-width: 45%;
    max-height: 45%;
    min-height: 45%;
  }
</style>
