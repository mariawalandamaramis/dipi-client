import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const inovasiSlice = createSlice({
    name: 'inovasi',
    initialState: {
        inovasi: [],
        kategori: [],
        inovasiById: [],
        artikel: [],
        paketDukungan: [],
        lokasi: [],
        users: {},
        danaInovasi: [],
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
        },
        getLokasi(state, action) {
            state.lokasi = action.payload
        },
        getUsers(state, action) {
            state.users = action.payload
        },
        getDanaDukungan(state, action) {
            state.danaInovasi = action.payload
        }
    }
})

export const { getSemuaInovasi, getKategori, getInovasiById,
    getOpsiDukungan, getArtikel, getUsers, getLokasi, getDanaDukungan } = inovasiSlice.actions
export default inovasiSlice.reducer

export const getSemuaInovasiAPI = async (dispatch) => {
    try {
        const getRespon = await fetch(import.meta.env.VITE_APIINOVATION)
        const result = await getRespon.json()
        dispatch(getSemuaInovasi(result.data))

    } catch (error) {
        console.log('error ga bisa ambil API : get SemuaInovasi')
    }
}

export const getKategoriAPI = async (dispatch) => {
    try {
        const getRespon = await fetch(import.meta.env.VITE_APICATEGORY)
        const result = await getRespon.json()
        dispatch(getKategori(result))

    } catch (error) {
        console.log('error ga bisa ambil API : get Kategori')
    }
}

export const getInovasiByIdAPI = (id) => {
    return async (dispatch) => {
        try {
            const getRespon = await fetch(`${import.meta.env.VITE_APIINOVATION}${id}`)
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
            const getRespon = await fetch(`${import.meta.env.VITE_APIARTICLE_GET_BYIDINOV}${id}`)
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
            const getRespon = await fetch(`${import.meta.env.VITE_APIPACKAGE_GET_BYIDINOV}${id}`)
            const result = await getRespon.json()
            dispatch(getOpsiDukungan(result))

        } catch (error) {
            console.log('error ga bisa ambil API : get Opsi Dukungan by Id inovasi')
        }
    }
}

export const getUsersAPI = async (dispatch) => {
    try {
        const getRespon = await fetch(`${import.meta.env.VITE_APIUSERS}`)
        const result = await getRespon.json()
        dispatch(getUsers(result))

    } catch (error) {
        console.log('error ga bisa ambil API : get Users')
    }

}

export const getLokasiAPI = async (dispatch) => {
    try {
        const getRespon = await fetch(`${import.meta.env.VITE_APILOCATION}`)

        if (getRespon.ok) {
            const result = await getRespon.json()
            dispatch(getLokasi(result))
        }

    } catch (error) {
        console.log('error ga bisa ambil API : get Lokasi')
    }
}

export const getDanaDukunganByInov = () => async (dispatch) => {
    try {
        const token = JSON.parse(Cookies.get('responLogin')).token

        var myHeaders = new Headers();
        myHeaders.append("Authorization", token)

        const getRespon = await fetch(`${import.meta.env.VITE_APISUPPORT_GET_BYINO}`, {
            method: 'GET',
            headers: myHeaders
        })

        if (getRespon.ok) {
            const resultGet = await getRespon.json()
            // console.log(resultGet)
            // const parserResult = JSON.parse(resultGet)
            dispatch(getDanaDukungan(resultGet))
        }

    } catch (error) {
        console.log(error)
    }
}
