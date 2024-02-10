import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const artikelSlice = createSlice({
    name: 'artikel',
    initialState: {
        postArtikel: [],
        semuaArtikel: []
    },
    reducers: {
        getDataPostArtikel(state, action) {
            state.postArtikel = action.payload
        },
        semuaArtikel(state, action) {
            state.semuaArtikel= action.payload
        }
    }
})

export const { getDataPostArtikel, semuaArtikel } = artikelSlice.actions
export default artikelSlice.reducer

export const PostArtikelAPi = (data) => async (dispatch) => {
    try {
        const token = JSON.parse(Cookies.get('responLogin')).token

        const postRespon = await fetch(`${import.meta.env.VITE_APIARTICLE_CREATE}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Authorization': token
            },
            body: JSON.stringify(data)
        })

        //console.log(postRespon)

        if (postRespon.ok) {
            const resultPost = await postRespon.json()
            //const parserResult = JSON.parse(resultPost) //// bikin errrorrr 404 not found
            dispatch(getDataPostArtikel(resultPost))
            //console.log('berhasil')
        }

    } catch (error) {
        console.log(error)
    }
}


export const getArtikelByIdInovAPI = (id) => {
    return async (dispatch) => {
        try {
            const getRespon = await fetch(`${import.meta.env.VITE_APIARTICLE_GET_BYIDINOV}${id}`)
            const result = await getRespon.json()
            dispatch(semuaArtikel(result))

        } catch (error) {
            console.log(error)
        }
    }
}