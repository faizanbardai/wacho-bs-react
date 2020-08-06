export default (state = {}, action) => {
  switch (action.type) {
    case "ADD_ART_TO_CART":
      return Object.assign({}, state, {
        art: [...state.art, action.payload],
      });
    case "REMOVE_ART_FROM_CART":
      const art = state.art.filter((art) => art !== action.payload);
      return Object.assign({}, state, {
        art: art.length === 0 ? [] : art,
      });
    default:
      return state;
  }
};
