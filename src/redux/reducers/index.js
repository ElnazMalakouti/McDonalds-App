import orderReducer from "./orderReducer/orderReducer";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import FoodReducer from "./foodReducer/foodReducer";

const combinedReducers = combineReducers({
    order : orderReducer,
    food : FoodReducer
})

const persistedReducer = persistReducer({key : 'rootPersist',storage,whitelist:['order','food']},combinedReducers)
export default persistedReducer