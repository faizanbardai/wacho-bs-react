export default (state = {}, action) => {
  const products = state.productsFromServer;
  let product, value;
  switch (action.type) {
    case "LOAD_PRODUCTS":
      return {
        productsFromServer: action.payload,
        fetchInProgress: false,
        showProductToast: false,
      };
    case "INCREASE_QTY":
      product = products.find((product) => product._id === action.payload);
      product.qty++;
      product.inventory--;
      value = products.reduce(
        (acc, product) => (acc = acc + product.price * product.qty),
        0
      );
      return {
        ...state,
        productsFromServer: products,
        amountToCharge: parseFloat(value).toFixed(2),
        showProductToast: true,
      };
    case "DECREASE_QTY":
      product = products.find((product) => product._id === action.payload);
      product.qty--;
      product.inventory++;
      value = products.reduce(
        (acc, product) => (acc = acc + product.price * product.qty),
        0
      );
      return {
        ...state,
        productsFromServer: products,
        amountToCharge: parseFloat(value).toFixed(2),
        showProductToast: true,
      };
    case "HIDE_PRODUCT_TOAST":
      return {
        ...state,
        showProductToast: false,
      };
    default:
      return state;
  }
};
