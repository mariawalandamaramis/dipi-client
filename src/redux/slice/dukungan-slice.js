import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const dukunganSlice = createSlice({
    name: 'dukungan',
    initialState: {
        infoDukungan: [],
        yangDidukung: [],
        paketYangDidukung: [],
    },
    reducers: {
        getInfoDukungan(state, action) {
            state.infoDukungan = action.payload
        },
        getYangDidukung(state, action) {
            state.yangDidukung = action.payload
        },
        getPaketYangDidukung(state, action) {
            state.paketYangDidukung = [...state.paketYangDidukung, ...action.payload];
        }
        
    }
})

export const { getInfoDukungan, getYangDidukung, getPaketYangDidukung } = dukunganSlice.actions
export default dukunganSlice.reducer

export const postDukunganAPI = (data) => async (dispatch) => {
    try {
        const token = JSON.parse(Cookies.get('responLogin')).token

        console.log(data)

        const postRespon = await fetch(`${import.meta.env.VITE_APISUPPORT_CREATE}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json", // tambahhh iniii biar ga 404 not found
                'Authorization': token
            },
            body: JSON.stringify(data)
        })

       // console.log(postRespon)

        if (postRespon.ok) {
            const resultPost = await postRespon.json()
            // const parserResult = JSON.parse(resultPost)    
            dispatch(getInfoDukungan(resultPost))
        }

    } catch (error) {
        console.log(error)
    }
}

export const getYangDidukungAPI = () => async (dispatch) => {
    try {
        const token = JSON.parse(Cookies.get('responLogin')).token

        var myHeaders = new Headers();
        myHeaders.append("Authorization", token)

        const getRespon = await fetch(`${import.meta.env.VITE_APISUPPORT_GET_BYGIVER}`, {
            method: 'GET',
            headers: myHeaders
        })

        if (getRespon.ok) {
            const resultGet = await getRespon.json()
            // console.log(resultGet)
            // const parserResult = JSON.parse(resultGet)
            dispatch(getYangDidukung(resultGet))
        }

    } catch (error) {
        console.log(error)
    }
}

export const getPaketYangDidukungAPI = (id) => {
    return async (dispatch) => {
        try {
            const getRespon = await fetch(`${import.meta.env.VITE_APIPACKAGE_GET_BYIDINOV}${id}`)
            const result = await getRespon.json()
            // console.log(result)
           dispatch(getPaketYangDidukung(result.data))

        } catch (error) {
            console.log(error)
        }
    }
}
