<template>
  <v-container>
    <v-row>
      <v-col>
        <v-text-field
            label="Email"
            variant="outlined"
            v-model="email"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
            label="Пароль"
            variant="outlined"
            v-model="password"
            type="password"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn
            rounded="0"
            class="white--text main-color"
            width="100%"
            @click="callLogin"
        >
          ВОЙТИ
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapActions, mapMutations} from 'vuex'

export default {
  name: "login-form",
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    ...mapMutations(['authenticate']),
    ...mapActions(['login']),
    callLogin() {
      let formBody = new FormData();
      formBody.append('username', this.email)
      formBody.append('password', this.password)
      this.login(formBody).then(() => {
        this.$router.push('/')
        this.authenticate()
      })
    }
  }
}
</script>

<style>
.main-color {
  background-color: #E63946;
}
</style>