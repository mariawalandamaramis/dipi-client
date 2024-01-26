import { configureStore } from "@reduxjs/toolkit";
import inovasiSlice from "./slice/inovasi-slice";
import loginSlice from "./slice/login-slice";
import registerSlice from "./slice/register-slice";



const store = configureStore({
    reducer: {
        inovasi: inovasiSlice,
        login: loginSlice,
        register: registerSlice,
    }
})

export default store;