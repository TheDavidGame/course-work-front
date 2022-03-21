<template>
  <v-container>
    <v-row>
      <v-spacer/>
      <v-col align="center">
        <h1>Test</h1>
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
          Процессор {{ product.CPU }}
        </div>
        <v-divider/>
        <div class="my-3">
          Оперативная память {{ product.RAM }}
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
  </v-container>
</template>

<script>
import {mapGetters, mapActions, mapState} from "vuex";
import router from "@/router";

export default {
  name: "item-info",
  data: () => ({
    product: {}
  }),
  computed: {
    ...mapGetters(['getImageUrl']),
    ...mapState({isAuthenticated: state => state.user.isAuthenticated})
  },
  methods: {
    ...mapActions(['getProduct', 'addItemToCart']),
    addToCart(id) {
      this.isAuthenticated ? this.addItemToCart(id) : router.push('/user')
    }
  },
  beforeMount() {
    this.getProduct(this.$route.params.id).then(result => this.product = result.data)
  },
}
</script>

