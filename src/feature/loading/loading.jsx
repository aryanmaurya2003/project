import { createSlice } from "@reduxjs/toolkit";

 const LoaderSlice=createSlice({
    name:"loader",
    initialState:{
        value:false
    },
    reducers:{
        LoaderChange:(state)=>{
                state.value=!state.value
        }
    }
})

export const {LoaderChange}=LoaderSlice.actions;
export default LoaderSlice.reducer;



