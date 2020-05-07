import { api_loadActiveProducts } from "./APIs";
export const increaseQty = (_id) => ({ type: "INCREASE_QTY", payload: _id });
export const decreaseQty = (_id) => ({ type: "DECREASE_QTY", payload: _id });
export const hideProductToast = (_id) => ({ type: "HIDE_PRODUCT_TOAST" });
export const loadProducts = () => {
  return async (dispatch) => {
    const responseProducts = await api_loadActiveProducts();
    const products = await responseProducts.json();
    dispatch({
      type: "LOAD_PRODUCTS",
      payload: products,
    });
  };
};
