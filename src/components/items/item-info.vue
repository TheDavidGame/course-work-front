<template>
  <v-container>
    <v-row>
      <v-spacer/>
      <v-col align="center">
        <h1>{{ product.name }}</h1>
      </v-col>
      <v-spacer/>
    </v-row>
    <v-row class="mt-5">
      <v-col>
        <v-img :src="getImageUrl(product.image)"/>
      </v-col>
      <v-col class="mx-7">
        <div class="mb-4">
          Характеристики
          <v-divider thickness="3" color="red"/>
        </div>
        <div class="my-3">
          Диагональ {{ product.diagonal }}
        </div>
        <v-divider/>
        <div class="my-3">
          Процессор {{ product.cpu }}
        </div>
        <v-divider/>
        <div class="my-3">
          Оперативная память {{ product.ram }}
        </div>
        <v-divider/>
        <div class="my-3">
          Вес {{ product.weight }}
        </div>
        <v-divider/>
        <div class="my-3">
          Операционная система {{ product.system }}
        </div>
        <v-divider/>
      </v-col>
      <v-col>
        <div class="mb-4">
          Описание
          <v-divider thickness="3" color="red"/>
        </div>
        <div>
          {{ product.description }}
        </div>
        <div class="mt-9 mb-4">
          Цена
          <v-divider thickness="3" color="red"/>
        </div>
        <div>
          {{ product.price }} руб
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-spacer/>
      <v-col sm="2">
        <v-btn @click="addToCart(product.id)">Добавить в корзину</v-btn>
      </v-col>
    </v-row>
    <v-snackbar
        v-model="snackbar"
        :timeout="1500"
        top
        color="success"
    >
      <div style="text-align: center">
        Товар добавлен в корзину
      </div>
    </v-snackbar>
  </v-container>
</template>

<script>
import {mapGetters, mapActions, mapState} from "vuex";
import router from "@/router";

export default {
  name: "item-info",
  data: () => ({
    snackbar: false,
    product: {}
  }),
  computed: {
    ...mapGetters(['getImageUrl']),
    ...mapState({isAuthenticated: state => state.user.isAuthenticated})
  },
  methods: {
    ...mapActions(['getProduct', 'addItemToCart']),
    addToCart(id) {
      this.isAuthenticated ? this.addItemToCart(id).then(() => this.snackbar = true) : router.push('/user')
    }
  },
  beforeMount() {
    this.getProduct(this.$route.params.id).then(result => this.product = result.data)
  },
}
</script>

