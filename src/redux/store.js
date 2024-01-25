import { configureStore } from "@reduxjs/toolkit";
import inovasiSlice from "./slice/inovasi-slice";
import loginSlice from "./slice/login-slice";


const store = configureStore({
    reducer: {
        inovasi: inovasiSlice,
        login: loginSlice,
    }
})

export default store;