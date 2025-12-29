import { configureStore } from "@reduxjs/toolkit";
import toggleSlice  from "../feature/toggle/toggleSlice";
import UserSlice from "../feature/User/UserSlice"
import LoaderSlice from "../feature/loading/loading"

const store=configureStore({
    reducer:{
       toggle:toggleSlice,
       user:UserSlice,
       loading:LoaderSlice
    }
})  

export default store;