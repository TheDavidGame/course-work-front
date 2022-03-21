<template>
  <v-container>
    <v-row>
      <v-spacer/>
      <v-col>
        <v-row>
          <v-spacer/>
          <v-col>
            <v-tabs>
              <v-tab @click="registration = true">РЕГИСТРАЦИЯ</v-tab>
              <v-tab @click="registration = false">ВХОД</v-tab>
            </v-tabs>
          </v-col>
          <v-spacer/>
        </v-row>
        <v-row>
          <v-col>
            <registration-form v-if="registration"/>
            <login-form v-else/>
          </v-col>
        </v-row>
        <v-spacer/>
      </v-col>
      <v-spacer/>
    </v-row>
  </v-container>
</template>

<script>
import LoginForm from "@/components/user/login-form";
import RegistrationForm from "@/components/user/registration-form";

export default {
  name: "UserForm",
  components: {LoginForm, RegistrationForm},
  data: () => ({
    registration: true
  })
}
</script>

<style scoped>

</style>