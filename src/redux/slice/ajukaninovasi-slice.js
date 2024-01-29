import { createSlice } from "@reduxjs/toolkit";

const ajukanInovasiSlice =  createSlice({
    name: 'ajukanInovasi',
    initialState: {
        uploadImage: {},
        uploadInovasi: {},
        responUpImage: {},
        responForm: {}
    },

    reducers: {
        getResponForm (state, action) {
            state.responForm = {...state.responForm, ...action.payload}
        },

        upImage(state, action) {
            state.uploadImage = action.payload
        },

        upInovasi(state, action) {
            state.uploadInovasi = action.payload
        },
    }
})

export const { getResponForm, upImage } = ajukanInovasiSlice.actions
export default ajukanInovasiSlice.reducer