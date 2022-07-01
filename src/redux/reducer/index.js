import {combineReducers} from "redux";
import {ProductReducer} from "./ProductReducer";
import {ProductIdReducer} from "./ProductIdReducer";

export const rootReducer = combineReducers({
    products:ProductReducer,
    productID:ProductIdReducer,
});