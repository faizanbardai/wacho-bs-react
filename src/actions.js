export const increaseQty = (_id) => ({ type: "INCREASE_QTY", payload: _id });
export const decreaseQty = (_id) => ({ type: "DECREASE_QTY", payload: _id });
export const hideProductToast = (_id) => ({ type: "HIDE_PRODUCT_TOAST" });
export const loadProducts = () => {
  return async (dispatch) => {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const responseProducts = await fetch(baseURL + "/products?active=1");
    const products = await responseProducts.json();
    dispatch({
      type: "LOAD_PRODUCTS",
      payload: products,
    });
  };
};
