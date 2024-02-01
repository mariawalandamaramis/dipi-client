import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const ajukanInovasiSlice = createSlice({
    name: 'ajukanInovasi',
    initialState: {
        dataImage: {},
        dataVideo: {},
        dataInovasi: {},
        dataPaketDonasi: [],
        messageRespon: ''
    },

    reducers: {
        messageRespon(state, actions) {
            state.messageRespon = actions.payload
        },
        getDataPostImage(state, action) {
            state.dataImage = action.payload
        },
        getDataPostVideo(state, action) {
            state.dataVideo = action.payload
        },
        getDataPostInovasi(state, action) {
            state.dataInovasi = action.payload
        },
        getDataPostPaketDonasi(state, action) {
            state.dataPaketDonasi = [...state.dataPaketDonasi, action.payload]
        }
    }
})

export const { messageRespon, getDataPostImage, getDataPostVideo, getDataPostInovasi, getDataPostPaketDonasi } = ajukanInovasiSlice.actions
export default ajukanInovasiSlice.reducer

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
                // const resultImgParse = JSON.parse(resultImg)
                // dispatch(getDataPostImage(resultImgParse))
                dispatch(getDataPostImage(resultImg))
                dispatch(messageRespon('Foto Berhasil di Upload'))
            } else {
                console.log('respon upload image : GAGAL')
            }

        } catch (error) {
            console.log(error)
            dispatch(messageRespon(error))
        }
    }
}

export const postVideoAPI = (videoFile) => {
    return async (dispatch) => {
        try {
            const formData = new FormData();
            formData.append("video", videoFile, videoFile.name)
            const APIURL = "http://localhost:3000/inovation/uploadvideo"

            const postRespon = await fetch(APIURL, {
                method: 'POST',
                body: formData
            })

            if (postRespon.ok) {
                const resultVid = await postRespon.json()
                // const resultVidParse = JSON.parse(resultVid)
                // dispatch(getDataPostVideo(resultVidParse))
                dispatch(getDataPostVideo(resultVid))
                dispatch(messageRespon('Video Berhasil di Upload'))
            } else {
                console.log('respon upload video : GAGAL')
            }

        } catch (error) {
            console.log(error)
            dispatch(messageRespon(error))
        }
    }
}

export const postInovasiAPI = (dataInovation) => {
    return async (dispatch) => {
        try {
            const token = JSON.parse(Cookies.get('responLogin')).token
            const APIURL = "http://localhost:3000/inovation";

            const postRespon = await fetch(APIURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
                body: JSON.stringify(dataInovation),
            });

            if (postRespon.ok) {
                const resultInovasi = await postRespon.json()
                // const resultInovasiParse = JSON.parse(resultInovasi)
                // dispatch(getDataPostInovasi(resultInovasiParse))
                dispatch(getDataPostInovasi(resultInovasi))
                dispatch(messageRespon('Data Inovasi Berhasil di Upload'))
            } else {
                console.log('respon upload inovasi: GAGAL');
            }

        } catch (error) {
            console.log(error)
            dispatch(messageRespon(error))
        }
    }
}

export const postPaketDonasiAPI = (dataPackage) => {
    return async (dispatch) => {
        try {
            const token = JSON.parse(Cookies.get('responLogin')).token
            const APIURL = "http://localhost:3000/package";

            const postRespon = await fetch(APIURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
                body: JSON.stringify(dataPackage),
            });

            if (postRespon.ok) {
                const resultPackage = await postRespon.json();
                // const resultPackageParse = JSON.parse(resultPackage);
                // dispatch(getDataPostPaketDonasi(resultPackageParse));
                dispatch(getDataPostPaketDonasi(resultPackage))
                dispatch(messageRespon('Data Paket Suvenir Berhasil di Upload'))
            } else {
                console.log('respon upload package: GAGAL');
            }

        } catch (error) {
            console.log(error)
            dispatch(messageRespon(error))
        }
    }
}

