<template>
  <v-footer class="pa-0 app-footer">
    <v-row>
      <v-spacer/>
      <v-col sm="1">
        <v-img max-width="70%" max-height="70%" :src="require('../assets/vk-social-logotype.png')"/>
      </v-col>
      <v-col sm="1">
        <v-img max-width="70%" max-height="70%" :src="require('../assets/instagram.png')"/>
      </v-col>
      <v-col sm="1">
        <v-img max-width="70%" max-height="70%" :src="require('../assets/facebook.png')"/>
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

<style>
  .app-footer {
    background-color: #1D3557;
    max-height: 7%;
    min-height: 70px;
  }
</style>
