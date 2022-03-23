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
    <v-snackbar
        v-model="snackbar"
        :timeout="1500"
        top
        color="error"
    >
      <div style="text-align: center">
        Неверный логин или пароль
      </div>
    </v-snackbar>
  </v-container>
</template>

<script>
import {mapActions, mapMutations} from 'vuex'

export default {
  name: "login-form",
  data: () => ({
    snackbar: false,
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
      this.login(formBody).then(r => {
        if (r.request.responseURL.endsWith('?error')) this.snackbar = true
        else {
          this.$router.push('/')
          this.authenticate()
        }

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