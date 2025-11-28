import { createSlice } from "@reduxjs/toolkit";

 const toggleSlice=createSlice({
    name:"toggle",
    initialState:{
        value:false
    },
    reducers:{
        toggleChange:(state)=>{
            console.log("the value is this")
            state.value=!state.value
        }
    }
})

export const {toggleChange}=toggleSlice.actions;
export default toggleSlice.reducer;



