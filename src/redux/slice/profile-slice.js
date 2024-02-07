import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const profilSlice = createSlice({
    name: 'profil',
    initialState: {
        userById: {},
        lokasi: [],
        dataImage: {},
        message: ''
    },
    reducers: {
        getUserById(state, action) {
            state.userById = action.payload
        },
        getLokasi(state, action) {
            state.lokasi = action.payload
        },
        getDataPostImage(state, action) {
            state.dataImage = action.payload
        },
        responMessage(state, action) {
            state.message = action.payload
        }
    }
})

export const { getUserById, getLokasi, responMessage, getDataPostImage } = profilSlice.actions
export default profilSlice.reducer

export const getUserByIdAPI = (id) => {
    return async (dispatch) => {
        try {
            const getRespon = await fetch(`http://localhost:3000/users/${id}`)
            const result = await getRespon.json()
            dispatch(getUserById(result))

        } catch (error) {
            console.log('error ga bisa ambil API : get User by Id')
        }
    }
}

export const getLokasiAPI = async (dispatch) => {
    try {
        const getRespon = await fetch(`http://localhost:3000/location/cities`)

        if (getRespon.ok) {
            const result = await getRespon.json()
            dispatch(getLokasi(result))
        }

    } catch (error) {
        console.log('error ga bisa ambil API : get Lokasi')
    }
}

export const putUpdateProfile = (bodyReq, id) => {
    return async (dispatch) => {
        try {

            const token = JSON.parse(Cookies.get('responLogin')).token
            // console.log(token)

            const putRespon = await fetch(`http://localhost:3000/users/${id}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': token
                },
                body: JSON.stringify(bodyReq)
            })

            if (putRespon.ok) {
                const resultPut = await putRespon.json()
                // const profil = JSON.parse(resultPut)
                // console.log(resultPut)
                dispatch(responMessage(resultPut.message))
            }

        } catch (error) {
            console.log(error)
        }
    }
}

export const postImageAPI = (imgFile) => {
    return async (dispatch) => {
        try {
            const formData = new FormData();
            formData.append("file", imgFile, imgFile.name)
            const postRespon = await fetch('http://localhost:3000/inovation/uploadImage', {
                method: 'POST',
                body: formData
            })

            if (postRespon.ok) {
                const resultImg = await postRespon.json()
                dispatch(getDataPostImage(resultImg))
                dispatch(responMessage('Foto Berhasil di Upload'))
            } else {
                console.log('respon upload image : GAGAL')
            }

        } catch (error) {
            console.log(error)
            dispatch(messageRespon(error))
        }
    }
}