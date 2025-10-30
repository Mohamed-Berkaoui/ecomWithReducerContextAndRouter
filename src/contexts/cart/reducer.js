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
    case "INCQTY": {
      let newCart = state.map((element) =>
        element.product.id == action.payload.product.id
          ? { ...element, quantity: element.quantity + 1 }
          : element
      );
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    }

    case "DECQTY": {
      let newCart = state.map((element) =>
        element.product.id == action.payload.id
          ? element.quantity > 1
            ? { ...element, quantity: element.quantity - 1 }
            : element
          : element
      );
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    }
      case "DELETEFROMCART": {
      let newCart = state.filter((element) =>
        element.product.id !== action.payload.id
      );
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    }
    case "RESETCART": {
      localStorage.removeItem('cart')
      return []
    }
    default:
      return state;
  }
}

export default cartReducer;
