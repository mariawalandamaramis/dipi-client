import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const ajukanInovasiSlice = createSlice({
  name: 'ajukanInovasi',
  initialState: {
    dataImage: {},
    dataVideo: {},
    lokasi: [],
    kategori: [],
    dataInovasi: [],
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
    getLokasi(state, action) {
      state.lokasi = action.payload
    },
    getKategori(state, action) {
      state.kategori = action.payload
    },
    getDataPostInovasi(state, action) {
      state.dataInovasi = action.payload
    }
  }
})

export const { messageRespon, getDataPostImage, getDataPostVideo, getLokasi, getKategori, getDataPostInovasi } = ajukanInovasiSlice.actions
export default ajukanInovasiSlice.reducer


export const postImageAPI = (imgFile) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append("file", imgFile[0], imgFile[0].name)
      const postRespon = await fetch('http://localhost:3000/inovation/uploadImage', {
        method: 'POST',
        body: formData
      })

      if (postRespon.ok) {
        const resultImg = await postRespon.json()
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
      formData.append("video", videoFile[0], videoFile[0].name)
      const postRespon = await fetch('http://localhost:3000/inovation/uploadvideo', {
        method: 'POST',
        body: formData
      })

      if (postRespon.ok) {
        const resultImg = await postRespon.json()
        dispatch(getDataPostVideo(resultImg))
        dispatch(messageRespon('Video Berhasil di Upload'))
      } else {
        console.log('respon upload image : GAGAL')
      }

    } catch (error) {
      console.log(error)
      dispatch(messageRespon(error))
    }
  }
}

export const getLokasiAPI = async (dispatch) => {
  try {
    const getRespon = await fetch(`https://nice-cowboy-boots-pike.cyclic.app/cities`)

    if (getRespon.ok) {
      const result = await getRespon.json()
      dispatch(getLokasi(result))
    }

  } catch (error) {
    console.log('error ga bisa ambil API : get Lokasi')
  }
}

export const getKategoriAPI = async (dispatch) => {
  try {
    const getRespon = await fetch(`https://nice-cowboy-boots-pike.cyclic.app/category`)

    if (getRespon.ok) {
      const result = await getRespon.json()
      dispatch(getKategori(result))
    }

  } catch (error) {
    console.log('error ga bisa ambil API : get Lokasi')
  }
}


export const postAjukanInovasiCompleted = (dataWithoutImgVid) => {
  return async (dispatch, getState) => {
    try {

      const fromSubmit = dataWithoutImgVid // data dari hasil submitan form tanpa image
      // console.log(fromSubmit)

      const currentState = getState()
      const allStateHere = currentState.ajukanInovasi // akses satet disini
      const APIURL_INOVASI = 'http://localhost:3000/inovation'
      const token = JSON.parse(Cookies.get('responLogin')).token

      const readyInovasiToPost = {
        inovation_name: fromSubmit.inovation_name,
        description: fromSubmit.description,
        city_id: fromSubmit.city_id,
        image: allStateHere.dataImage.data,
        video: allStateHere.dataVideo.data,
        amount: fromSubmit.amount,
        duration: fromSubmit.duration,
        category_id: fromSubmit.category,
        package_names: [ "Paket Donasi 1", "Paket Donasi 2", "Paket Donasi 3" ],
        package_nominals: [fromSubmit.nominal1, fromSubmit.nominal2, fromSubmit.nominal3],
        package_descriptions: ["Deskripsi Paket 1", "Deskripsi Paket 2", "Deskripsi Paket 3"],
        package_souvenirs: [fromSubmit.suvenir1, fromSubmit.suvenir2, fromSubmit.suvenir3]
      }

      console.log(JSON.stringify(readyInovasiToPost))

      const postResponInovasi = await fetch(APIURL_INOVASI, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        },
        body: JSON.stringify(readyInovasiToPost)
      });
    
      if (postResponInovasi.ok) {
        const resultInovasi = await postResponInovasi.json();
        dispatch(getDataPostInovasi(resultInovasi));
        dispatch(messageRespon('Inovasi BERHASIL di upload'));
      } else {
        throw new Error('Inovasi GAGAL di upload');
      }

    } catch (error) {
      dispatch(messageRespon(error.message))
    }
  }
}