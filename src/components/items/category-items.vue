<template>
  <v-container>
    <v-row class="px-16">
      <v-col align="center">
        <h1>{{ categoryName }}</h1>
      </v-col>
    </v-row>
    <v-row class="px-16">
      <v-col
          sm="12"
          md="4"
          v-for="item in items"
          :key="item"
          class="ma-sm-auto"
      >
        <v-card
            class="item-list-card"
            rounded="0"
            variant="outlined"
            align="center"
            @click="goToItemPage(item.id)"
        >
          <v-img
              max-width="70%"
              :src="getImageUrl(item.image)"
              class="ma-5"
          />

          <v-card-title>{{ item.name }}</v-card-title>

          <v-card-title>{{ item.price }} руб</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "category-items",
  props: ['categoryName', 'items'],
  computed: {
    ...mapGetters(['getImageUrl'])
  },
  methods: {
    goToItemPage(id) {
      this.$router.push(`/items/${id}`)
    }
  }
}
</script>
