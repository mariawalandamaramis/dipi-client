import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const ajukanInovasiSlice = createSlice({
  name: 'ajukanInovasi',
  initialState: {
    dataImage: {},
    dataVideo: {},
    dataInovasi: {},
    dataPaketDonasi: [],
    messageRespon: '',
    dataSubmit: {}
  },

  reducers: {
    getDataSubmit(state, action) {
      state.dataSubmit = action.payload
    },
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

export const { getDataSubmit, messageRespon, getDataPostImage, getDataPostVideo, getDataPostInovasi, getDataPostPaketDonasi } = ajukanInovasiSlice.actions
export default ajukanInovasiSlice.reducer


export const postImageAPI = (imgFile) => {
  return (dispatch) => {
    try {
      const formData = new FormData();
      formData.append('file', imgFile, imgFile.name);
      const APIURL = 'http://localhost:3000/inovation/uploadImage'

      fetch(APIURL, {
        method: 'POST',
        body: formData
      })
        .then(postRespon => {
          if (postRespon.ok) {
            return postRespon.json()
          } else {
            throw new Error('respon upload image : GAGAL')
          }
        })
        .then(resultImg => {
          dispatch(getDataPostImage(resultImg))
          dispatch(messageRespon('Foto Berhasil di Upload'))
        })
        .catch(error => {
          console.log(error)
          dispatch(messageRespon(error.message))
        })

    } catch (error) {
      console.log(error)
      dispatch(messageRespon(error.message))
    }
  }
}

export const postVideoAPI = (videoFile) => {
  return (dispatch) => {
    try {
      const formData = new FormData();
      formData.append('video', videoFile, videoFile.name)
      const APIURL = 'http://localhost:3000/inovation/uploadvideo'

      fetch(APIURL, {
        method: 'POST',
        body: formData
      })
        .then(postRespon => {
          if (postRespon.ok) {
            return postRespon.json()
          } else {
            throw new Error('respon upload video : GAGAL')
          }
        })
        .then(resultVid => {
          dispatch(getDataPostVideo(resultVid))
          dispatch(messageRespon('Video Berhasil di Upload'))
        })
        .catch(error => {
          console.log(error)
          dispatch(messageRespon(error.message))
        })

    } catch (error) {
      console.log(error)
      dispatch(messageRespon(error))
    }
  }
}


export const postAjukanInovasiCompleted = (dataWithoutImgVid) => {
  return (dispatch, getState) => {
    try {

      const fromSubmit = dataWithoutImgVid // data dari hasil submitan form tanpa image

      const currentState = getState()
      const allStateHere = currentState.ajukanInovasi // akses satet disini
      // const fromSubmit = allStateHere.dataSubmit // data dari hasil submitan form ==> {amount, city_id, image, ...}
      // const APIURL_IMG = 'http://localhost:3000/inovation/uploadImage'
      // const APIURL_VID = 'http://localhost:3000/inovation/uploadvideo'
      const APIURL_INOVASI = 'http://localhost:3000/inovation'
      const APIURL_PKTDONASI = 'http://localhost:3000/package'
      const token = JSON.parse(Cookies.get('responLogin')).token

      // const imgDataSubmit = fromSubmit.image
      // const readyImgToPost = new FormData();
      // readyImgToPost.append('file', imgDataSubmit, imgDataSubmit.name)

      // const vidDataSubmit = fromSubmit.video
      // const readyVideoToPost = new FormData();
      // readyVideoToPost.append('video', vidDataSubmit, vidDataSubmit.name)


      // // ensure post img vid succes
      // await Promise.all([

      //   // post img
      //   fetch(APIURL_IMG, {
      //     method: 'POST',
      //     body: readyImgToPost
      //   })
      //     .then(postResponImg => {
      //       if (postResponImg.ok) {
      //         return postResponImg.json()
      //       } else {
      //         throw new Error('Image GAGAL di upload')
      //       }
      //     })
      //     .then(resultImg => {
      //       dispatch(getDataPostImage(resultImg))
      //       dispatch(messageRespon('Image BERHASIL di upload'))
      //     })
      //     .catch(error => {
      //       console.log(error)
      //       dispatch(messageRespon(error.message))
      //     }),


      //   // post video
      //   fetch(APIURL_VID, {
      //     method: 'POST',
      //     body: readyImgToPost
      //   })
      //     .then(postResponVid => {
      //       if (postResponVid.ok) {
      //         return postResponVid.json()
      //       } else {
      //         throw new Error('Video GAGAl di upload')
      //       }
      //     })
      //     .then(resultVid => {
      //       dispatch(getDataPostVideo(resultVid))
      //       dispatch(messageRespon('Video BERHASIL di upload'))
      //     })
      //     .catch(error => {
      //       console.log(error)
      //       dispatch(messageRespon(error.message))
      //     })

      // ])

      // check, are dataImage not empthy, if no? post inovasi ! and make sure post inovasi succes before run next step
      // if (Object.keys(allStateHere.dataImage).length !== 0
      //   && Object.keys(allStateHere.dataVideo).length !== 0) {

      const readyInovasiToPost = {
        inovation_name: fromSubmit.inovation_name,
        description: fromSubmit.description,
        duration: fromSubmit.duration,
        city_id: 1,
        province_id: 1,
        amount: fromSubmit.amount,
        category_id: 1,
        image: allStateHere.dataImage.data,
        video: allStateHere.dataImage.data,
      }

      fetch(APIURL_INOVASI, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        },
        body: JSON.stringify(readyInovasiToPost)
      })
        .then(postResponInovasi => {
          if (postResponInovasi.ok) {
            return postResponInovasi.json()
          } else {
            throw new Error('Inovasi GAGAL di upload')
          }
        })
        .then(resultInovasi => {
          dispatch(getDataPostInovasi(resultInovasi))
          dispatch(messageRespon('Inovasi BERHASIL di upload'))

          // do post package donate here 

          const readyPaketDonasiToPost = [];
          let packageCounter = 1;

          for (let i = 1; i <= 3; i++) {
            const nominalKey = `nominal${i}`;
            const suvenirKey = `suvenir${i}`;

            if (nominalKey in fromSubmit && suvenirKey in fromSubmit) {
              readyPaketDonasiToPost.push({
                inovation_id: allStateHere.dataInovasi.data.id,
                package_name: packageCounter.toString(),
                nominal: fromSubmit[nominalKey],
                description: fromSubmit[suvenirKey],
              });

              packageCounter++;
            }
          }

          return Promise.all(
            readyPaketDonasiToPost.map((paket, idx) => (
              fetch(APIURL_PKTDONASI, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': token
                },
                body: JSON.stringify(paket)
              })
                .then(responPaketDonasi => {
                  if (responPaketDonasi.ok) {
                    return responPaketDonasi.json();
                  } else {
                    throw new Error('Paket donasi GAGAL di upload');
                  }
                })
                .then(resultPaketDonasi => {
                  dispatch(getDataPostPaketDonasi(resultPaketDonasi));
                  dispatch(messageRespon(`Paket donasi ke-${idx + 1} BERHASIL di upload`));
                })
            ))
          );

        })
        .catch(error => {
          console.log(error)
          dispatch(messageRespon(error.message))
        })

      // }

      // i will fecth APIURL_PKTDONASI if post inovasi succes
      // because body request APIURL_PKTDONASI is combination of some dataSubmit and some dataInovasi
      // how can i do ?

    } catch (error) {
      dispatch(messageRespon(error.message))
    }
  }
}