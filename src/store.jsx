import {configureStore} from "@reduxjs/toolkit";
import  userReducer  from './reducer/userSlice';
import  productReducer  from './reducer/productSlice';
const store = configureStore({
    reducer:{
        user:userReducer,
        product:productReducer
    }
})
export default store;