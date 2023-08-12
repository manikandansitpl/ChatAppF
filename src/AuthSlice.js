import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState:{value : {username:false}},
    reducers:{
        authname:(state,action)=>{
            state.value = action.payload
        }
    }
})

export const {authname} = authSlice.actions;
export default authSlice.reducer;