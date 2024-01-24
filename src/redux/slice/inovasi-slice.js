import { createSlice } from '@reduxjs/toolkit';

const inovasiSlice = createSlice({
    name: 'inovasi',
    initialState: {
        inovasi: {
            // form1: {},
            // form2: {},
            // form3: {},
        },
        // inovasi: []
    },

    reducers: {
        getValueFormPengajuan(state, action) {
            state.inovasi = action.payload
            // console.log(state)
            // console.log('action payload')
            // console.log(action.payload)
            // const newInovasi= {
            //     // isi form 1
            //     judul_inovasi : action.payload.judul_inovasi,
            //     deskripsi_singkat : action.payload.deskripsi_singkat,
            //     lokasi_kota : action.payload.lokasi_kota,
            //     lokasi_propinsi : action.payload.lokasi_propinsi,
            //     alamat : action.payload.alamat,
            //     kategori_inovasi : action.payload.kategori_inovasi,
            //     foto_pendukung : action.payload.foto_pendukung,
            //     video_pendukung : action.payload.video_pendukung,
            //     jml_pengajuan_dana : action.payload.jml_pengajuan_dana,
            //     durasi_kampanye : action.payload.durasi_kampanye,
                
            //     // isi form 2
            //     detail_inovasi : action.payload.detail_inovasi,

            //     // isi form
            //     dana_suvenir1 : action.payload.dana_suvenir1,
            //     bentuk_suvenir1 : action.payload.bentuk_suvenir1,
            //     dana_suvenir2 : action.payload.dana_suvenir2,
            //     bentuk_suvenir2 : action.payload.bentuk_suvenir2,
            //     dana_suvenir3 : action.payload.dana_suvenir1,
            //     bentuk_suvenir3 : action.payload.bentuk_suvenir3,
            // }

            // if (newInovasi.length === 10) {
            //     const form1 = [newInovasi]
            //     console.log(form1)
            // } else if (newInovasi.length === 1) {
            //     const form2 = [newInovasi]
            //     console.log(form2)
            // } else {
            //     const form3 = [newInovasi]
            //     console.log(form3)
            // }
            
            // console.log(newInovasi)
            // state.inovasi = [...state.inovasi, newInovasi]
            // state.inovasi = [newInovasi]



            // const ditampungdulu = {
            //     form1 : {},
            //     form2 : {},
            // }

            // const {form, value} = action.payload
            // ditampungdulu[form] = {...ditampungdulu[form], ...value}

            // console.log('ditampung')
            // console.log(ditampungdulu)

            // const formInput = action.payload
        
            // console.log(formInput)
            // console.log(typeof(formInput))

            // const valueForm = formInput.find(item => item.form === 'form1').value
            // console.log('isis value form')
            // const valueForm = formInput.value
            
            // const combineValue = {...state.inovasi, ...valueForm}
            // console.log('combine')
            // console.log(combineValue)

            // state.inovasi = [...state.inovasi, valueForm]


        }
    }
})

export const { getValueFormPengajuan } = inovasiSlice.actions
export default inovasiSlice.reducer