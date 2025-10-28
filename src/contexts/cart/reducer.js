function cartReducer(state, action) {
  //{type:"",payload:}
  switch (action.type) {
    case "ADDTOCART": {
      const newcart = state.find((e) => e.product.id == action.payload.id)
        ? state
        : [...state, { product: action.payload, quantity: 1 }];
      localStorage.setItem("cart", JSON.stringify(newcart));
      return newcart;
    }
    default:
      return state;
  }
}

export default cartReducer;
