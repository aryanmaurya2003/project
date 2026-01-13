import { configureStore } from "@reduxjs/toolkit";
import toggleSlice  from "../feature/toggle/toggleSlice";
import UserSlice from "../feature/User/UserSlice"
import LoaderSlice from "../feature/loading/loading"
import accountsSlice from "../feature/Accounts/Accounts";

const store=configureStore({
    reducer:{
       toggle:toggleSlice,
       user:UserSlice,
       loading:LoaderSlice,
       accounts:accountsSlice
    }
})  

export default store;