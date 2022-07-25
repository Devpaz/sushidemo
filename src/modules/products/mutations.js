export function setProducts (state, products) {
    state.products = products
  }
  export function productsError (state, payload) {
    state.error = true
    state.errorMessage = payload
    state.todos = []
  }