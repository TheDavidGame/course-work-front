<template>
  <v-container>
    <v-row class="mb-3">
      <v-col>
        <h1>Корзина</h1>
      </v-col>
      <v-divider class="mx-2" thickness="3" color="red"/>
    </v-row>
    <div
        v-for="item in items"
        :key="item"
    >
      <v-row class="mb-3">
        <v-col sm="2">
          Product image
        </v-col>
        <v-col sm="2">
          Product
        </v-col>
        <v-spacer/>
        <v-col sm="2">
          Price
        </v-col>
        <v-col sm="2">
        </v-col>
        <v-divider class="mx-2" thickness="3" color="red"/>
      </v-row>
      <v-row class="mb-3">
        <v-col sm="2" align-self="center">
          <v-img
              max-width="70%"
              :src="getImageUrl(item.image)"
              class="ma-5"
          />
        </v-col>
        <v-col sm="2" align-self="center">
          {{ item.name }}
        </v-col>
        <v-spacer/>
        <v-col sm="2" align-self="center">
          {{ item.price }} руб
        </v-col>
        <v-col sm="2" align-self="center">
          <v-btn @click="deleteItem(item.id)">Удалить</v-btn>
        </v-col>
        <v-divider class="mx-2" thickness="3" color="red"/>
      </v-row>
    </div>
    <v-row>
      <v-col sm="1">
        Всего: {{ total }}
      </v-col>
      <v-col sm="2">
        <v-btn
            size="x-small"
        >
          Перейти к оплате
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "cart-info",
  data: () => ({
    items: []
  }),
  computed: {
    ...mapGetters(['getImageUrl']),
    total: function() {
      console.log(this.items.length ? this.items.map(p => p.price).reduce((a, b) => a + b, 0) : 0)
      return this.items.length ? this.items.map(p => p.price).reduce((a, b) => a + b, 0) : 0
    }
  },
  methods: {
    ...mapActions(['getCart', 'deleteItemFromCart']),
    fetchProducts() {
      this.getCart().then(response => this.items = response.data)
    },
    deleteItem(id) {
      this.deleteItemFromCart(id).then(() => this.fetchProducts())
    }
  },
  beforeMount() {
    this.fetchProducts();
  }
}
</script>

<style scoped>

</style>