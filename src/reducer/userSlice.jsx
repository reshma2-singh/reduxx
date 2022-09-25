import { createSlice } from "@reduxjs/toolkit";
const userState={
    name:'',
    age:0,
    location:'',
    profession:'',
}
export const userSlice= createSlice({
    name:'user',
    initialState:userState,
    reducers:{
        userUpdate:(state,action)=>{
            const{payload:{key,value}}=action
            state[key]=value
        }
    }
})
export const{userUpdate}=userSlice.actions;
export default userSlice.reducer;