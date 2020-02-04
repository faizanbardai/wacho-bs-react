export const increaseQty = _id => ({ type: "INCREASE_QTY", payload: _id });
export const decreaseQty = _id => ({ type: "DECREASE_QTY", payload: _id });
export const loadProducts = () => {
  return async dispatch => {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const responseProducts = await fetch(baseURL + "/products");
    const products = await responseProducts.json();
    dispatch({
      type: "LOAD_PRODUCTS",
      payload: products
    });
  };
};
