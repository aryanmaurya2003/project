import { createSlice } from "@reduxjs/toolkit";

 const LoaderSlice=createSlice({
    name:"loader",
    initialState:{
        value:true
    },
    reducers:{
        toggleChange:(state)=>{
            console.log("the value is this")
            state.value=!state.value
        }
    }
})

export const {LoaderChange}=LoaderSlice.actions;
export default LoaderSlice.reducer;



