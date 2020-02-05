import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import productReducer from "./Reducers/products";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  products: { fetchInProgress: true, showProductToast: false }
};

const combinedReducer = combineReducers({
  products: productReducer
});

export default createStore(
  combinedReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
