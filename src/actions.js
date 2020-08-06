import { api_loadActiveWines, api_loadActiveArt } from "./APIs";
export const increaseQty = (_id) => ({ type: "INCREASE_QTY", payload: _id });
export const decreaseQty = (_id) => ({ type: "DECREASE_QTY", payload: _id });
export const hideProductToast = (_id) => ({ type: "HIDE_PRODUCT_TOAST" });
export const loadProducts = () => {
  return async (dispatch) => {
    const responseWines = await api_loadActiveWines();
    const wines = await responseWines.json();
    const responseArts = await api_loadActiveArt();
    const arts = await responseArts.json();
    dispatch({
      type: "LOAD_PRODUCTS",
      payload: { wines, arts },
    });
  };
};

export const addArtToCart = (art) => ({
  type: "ADD_ART_TO_CART",
  payload: art,
});
export const removeArtFromCart = (art) => ({
  type: "REMOVE_ART_FROM_CART",
  payload: art,
});
