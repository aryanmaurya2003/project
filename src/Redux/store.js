import { configureStore } from "@reduxjs/toolkit";
import toggleSlice  from "../feature/toggle/toggleSlice";

const store=configureStore({
    reducer:{
       toggle:toggleSlice
    }
})  

export default store;