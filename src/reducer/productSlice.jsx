import { createSlice } from "@reduxjs/toolkit";
const productState={
   productList:[]
}
export const productSlice= createSlice({
    name:'product',
    initialState:productState,
    reducers:{
        productUpdate:(state,action)=>{
           state.productList.push(action.payload)
        }
      
    }
})
export const{productUpdate}=productSlice.actions;
export default productSlice.reducer;