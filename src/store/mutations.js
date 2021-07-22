

export default {
  addCounter(state, payload) {
    payload.count++
  },
  addToCart(state, payload) {
    payload.isCheck = true
    state.cartList.push(payload)
  }
}
