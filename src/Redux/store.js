import { configureStore } from "@reduxjs/toolkit";
import toggleSlice  from "../pages/feature/toggle/toggleSlice";

const store=configureStore({
    reducer:{
       toggle:toggleSlice
    }
})  

export default store;