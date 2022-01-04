import {combineReducers} from "redux";
import {productReducer, selectedproductReducer} from "../reducers/productReducer";

const reducers = combineReducers({
  allProducts : productReducer,
  product:selectedproductReducer,
})

export default reducers;
