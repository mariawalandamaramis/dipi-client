import { createSlice } from '@reduxjs/toolkit';

const inovasiSlice = createSlice({
    name: 'inovasi',
    initialState: {
        inovasi: [],
        kategori: [],
        inovasiById: [],
        artikel: [],
        paketDukungan: []
    },

    reducers: {
        getSemuaInovasi(state, action) {
            state.inovasi = action.payload
        },
        getKategori(state, action) {
            state.kategori = action.payload
        },
        getInovasiById(state, action) {
            state.inovasiById = action.payload
        },
        getArtikel(state, action) {
            state.artikel = action.payload
        },
        getOpsiDukungan(state, action) {
            state.paketDukungan = action.payload
        }
    }
})

export const { getSemuaInovasi, getKategori, getInovasiById, getOpsiDukungan, getArtikel } = inovasiSlice.actions
export default inovasiSlice.reducer

export const getSemuaInovasiAPI = async (dispatch) => {
    try {
        const getRespon = await fetch('https://api.escuelajs.co/api/v1/products')
        const result = await getRespon.json()
        dispatch(getSemuaInovasi(result))

    } catch (error) {
        console.log('error ga bisa ambil API : get SemuaInovasi')
    }
}

export const getKategoriAPI = async (dispatch) => {
    try {
        const getRespon = await fetch('https://api.escuelajs.co/api/v1/categories')
        const result = await getRespon.json()
        dispatch(getKategori(result))

    } catch (error) {
        console.log('error ga bisa ambil API : get Kategori')
    }
}

export const getInovasiByIdAPI = (id) => {
    return async (dispatch) => {
        try {
            const getRespon = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
            const result = await getRespon.json()
            dispatch(getInovasiById(result))

        } catch (error) {
            console.log('error ga bisa ambil API : get Inovasi by Id')
        }
    }
}

export const getArtikelAPI = (id) => {
    return async (dispatch) => {
        try {
            const getRespon = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            const result = await getRespon.json()
            dispatch(getArtikel(result))

        } catch (error) {
            console.log('error ga bisa ambil API : get Artikel by Id inovasi')
        }
    }
}

export const getOpsiDukunganAPI = (id) => {
    return async (dispatch) => {
        try {
            const getRespon = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
            const result = await getRespon.json()
            dispatch(getOpsiDukungan(result))

        } catch (error) {
            console.log('error ga bisa ambil API : get Opsi Dukungan by Id inovasi')
        }
    }
}
