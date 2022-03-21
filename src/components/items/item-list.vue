<template>
  <category-items
      v-for="category in items"
      :key="category"
      :category-name="category.name"
      :items="category.products"
  />
</template>

<script>
import CategoryItems from "@/components/items/category-items";
import {mapActions} from "vuex";

export default {
  name: "item-list",
  components: {CategoryItems},
  data: () => ({
    items: []
  }),
  beforeMount() {
    this.$watch(() => this.$route.path, () => this.fetchItems())
    this.fetchItems()
  },
  methods: {
    ...mapActions(['getProductTypeProducts']),
    fetchItems() {
      this.getProductTypeProducts(this.$route.params.id).then(response => this.items = Array.isArray(response.data) ? response.data : [response.data])
    }
  }
}
</script>

<style>
a {
  color: black;
  text-decoration: none;
}

.item-list-card {
  border-color: red;
  border-width: 3px;
}
</style>