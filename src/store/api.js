import axios from "axios";

const BACKEND_URL = 'https://heroku-web-course-work-backend.herokuapp.com'
const API_PATH = '/api/v1'

const http = axios.create({
  baseURL: BACKEND_URL,
  withCredentials: true
});

const api = axios.create({
  baseURL: BACKEND_URL + API_PATH,
  withCredentials: true
});

const apiMethods = {
  getters: {
    getImageUrl: () => imageName => {
      return imageName ? 'https://heroku-web-course-work-backend.herokuapp.com/image/' + imageName : null
    }
  },
  actions: {
    login(context, formBody) {
      return http.post('/login', formBody, {headers: {"Content-Type": "multipart/form-data"}})
    },
    logout() {
      return http.post('/logout', {headers: {"Content-Type": "multipart/form-data"}})
    },
    checkAuthentication(context) {
      return api.get('/users/isAuthenticated').then(() => context.commit('authenticate')).catch(() => context.commit('notAuthenticate'))
    },
    registration(context, user) {
      return api.post('/users', user)
    },
    getProductTypes() {
      return api.get('productTypes')
    },
    getProductTypeProducts(context, productTypeId) {
      return api.get(`productTypes/${productTypeId ? productTypeId + '/' : ''}products`)
    },
    getProduct(context, id) {
      return api.get(`products/${id}`)
    },
    getCart() {
      return api.get('users/cart')
    },
    addItemToCart(context, id) {
      return api.put(`users/cart/${id}`)
    },
    deleteItemFromCart(context, id) {
      return api.delete(`users/cart/${id}`)
    }
  }
}

export default apiMethods