import { configureStore } from "@reduxjs/toolkit";
import toggleSlice  from "../feature/toggle/toggleSlice";
import UserSlice from "../feature/User/UserSlice"

const store=configureStore({
    reducer:{
       toggle:toggleSlice,
       user:UserSlice
    }
})  

export default store;