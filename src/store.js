import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import productReducer from "./Reducers/products";
import cartReducer from "./Reducers/cart";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  products: {
    fetchInProgress: true,
    showProductToast: false,
    amountToCharge: 0,
  },
  cart: { art: [], wine: [] },
};

const combinedReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

export default createStore(
  combinedReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
