<template>
  <v-container>
    <v-form
        ref="form"
    >
      <v-row>
        <v-col>
          <v-text-field
              label="Имя"
              variant="outlined"
              v-model="user.firstName"
              ref="firstName"
              @blur="this.$refs.firstName.validate()"
              required
              :rules="notEmptyRules"
          />
        </v-col>
        <v-col>
          <v-text-field
              label="Фамилия"
              variant="outlined"
              v-model="user.lastName"
              ref="lastName"
              @blur="this.$refs.lastName.validate()"
              required
              :rules="notEmptyRules"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
              label="Email"
              variant="outlined"
              v-model="user.username"
              ref="username"
              @blur="this.$refs.username.validate()"
              required
              :rules="usernameRules"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
              label="Пароль"
              variant="outlined"
              type="password"
              v-model="user.password"
              ref="password"
              @blur="this.$refs.password.validate()"
              required
              :rules="notEmptyRules"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn
              rounded="0"
              class="white--text main-color"
              block
              @click="validate"
          >
            ЗАРЕГИСТРИРОВАТЬСЯ
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import {mapActions, mapMutations} from "vuex";

export default {
  name: "registration-form",
  data: () => ({
    user: {
      username: '',
      password: '',
      firstName: '',
      lastName: ''
    },
    valid: false,
    notEmptyRules: [
      v => !!v || 'Поле обязательно для заполнения'
    ],
    usernameRules: [
      v => !!v || 'Поле обязательно для заполнения',
      v => /.+@/.test(v) || 'Email должен содержать символ @',
      v => /.+@.+/.test(v) || 'Обязательно указать домен после @',
    ]
  }),
  methods: {
    ...mapMutations(['authenticate']),
    ...mapActions(['login', 'registration']),
    validate() {
      this.$refs.form.validate().then(r => r.valid && this.registration(this.user).then(() => {
            let formBody = new FormData();
            formBody.append('username', this.user.username)
            formBody.append('password', this.user.password)
            this.login(formBody).then(() => {
              this.$router.push('/')
              this.authenticate()
            })
          })
      )
    }
  }
}
</script>

<style>
.main-color {
  background-color: #E63946;
}
</style>
