import { configureStore } from "@reduxjs/toolkit";
import inovasiSlice from "./slice/inovasi-slice";


const store = configureStore({
    reducer: {
        inovasi: inovasiSlice,
    }
})

export default store;