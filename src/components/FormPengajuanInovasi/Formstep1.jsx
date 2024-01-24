import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { getValueForm } from '../../redux/slice/inovasi-slice';

const Formstep1 = ({ stateLocalMOM, handleInput }) => {

  // const dispatch = useDispatch();


  // // const handleChange = (e) => {
  // //   const { name, value } = e.target;
  // //   dispatch(getValueForm({ [name]: value }))
  // // }


  // const [stateLocal, setStateLocal] = useState({
  //   judul_inovasi: '',
  //   deskripsi_singkat: '',
  //   lokasi_kota: '',
  //   lokasi_propinsi: '',
  //   alamat: '',
  //   kategori_inovasi: '',
  //   foto_pendukung: '',
  //   video_pendukung: '',
  //   jml_pengajuan_dana: '',
  //   durasi_kampanye: '',
  // })




  // // console.log(stateLocal)

  // const inputHandle = (e) => {
  //   setStateLocal({ ...stateLocal, [e.target.name]: e.target.value })
  //   // setStateLocal({...stateLocal, [name] : value})

  //   // console.log(stateLocal)

  //   // dispatch(getValueForm(stateLocal))

  //   // Memeriksa apakah semua nilai dalam stateLocal sudah terisi
  //   // const isFormComplete = Object.values(stateLocal).every((val) => val !== '');

  //   // // Jika semua nilai sudah terisi, lakukan dispatch
  //   // if (isFormComplete) {
  //   //   dispatch(getValueForm(stateLocal));
  //   // }

  // }


  // const handleNotFocus = (e) => {
  //   const { name, value } = e.target

  //   if (value !== '') {
  //     // dispatch(getValueForm(stateLocal))
  //     dispatch(getValueForm({ form: 'form1', value: stateLocal }))
  //   }
  // }

  // const formValues1 = useSelector((state) => state.inovasi).inovasi.form1


  // useEffect(() => {
  //   // Loop melalui kunci-kunci objek stateLocal
  //   Object.keys(stateLocal).forEach((key) => {
  //     // Cek apakah nilai pada kunci tersebut kosong dan apakah ada nilai yang sesuai di formValues1
  //     if (!stateLocal[key] && formValues1 && formValues1[key]) {
  //       // Atur nilai stateLocal dengan nilai dari formValues1
  //       setStateLocal((prev) => ({ ...prev, [key]: formValues1[key] }));
  //     }
  //   });
  // }, [stateLocal, formValues1]);

  // // const formValues1 = useSelector((state) => state.inovasi).inovasi.form1
  // // // console.log(formValues1)


  // // const handleValue = (e) => {
  // //   // console.log(e)

  // //   let valuenya;

  // //   if (formValues1 === undefined || stateLocal.e === '') {
  // //     valuenya = stateLocal.e
  // //   } else if (formValues1.e !== '' || stateLocal.e !== '') {
  // //     console.log(formValues1)
  // //     valuenya = formValues1.e
  // //   }

  // //   console.log(valuenya)
  // //   return valuenya
  // // }

  return (
    <>
      <div className='mb-8'>
        <h2 className='text-2xl font-bold'>Apa inovasimu ?</h2>
        <p className='text-lg font-normal'>Buatlah inovasimu mudah dipahami oleh para pendukung</p>
      </div>
      <div>
        <form className='flex flex-col gap-4' action="">
          <div>
            <label className='text-lg font-medium' htmlFor="">Judul Inovasi</label>
            <div>
              <input id='judul_inovasi' name='judul_inovasi' value={stateLocalMOM.judul_inovasi} onChange={handleInput} className='w-full rounded-md border-2 p-2 text-xs font-normal' type="text" placeholder='Masukan judul inovasimu disini' />
            </div>
          </div>
          <div>
            <label className='text-lg font-medium' htmlFor="">Deskripsi Singkat</label>
            <div>
              <textarea id='deskripsi_singkat' name='deskripsi_singkat' value={stateLocalMOM.deskripsi_singkat} onChange={handleInput} className='w-full rounded-md border-2 p-2 text-xs font-normal' type="text" placeholder='Masukan deskripsi singkat tentang inovasimu disini' />
            </div>
          </div>
          <div>
            <label className='text-lg font-medium' htmlFor="">Lokasi</label>
            <div className='flex flex-col sm:flex-row justify-between gap-2'>
              <input id='lokasi_kota' name='lokasi_kota' value={stateLocalMOM.lokasi_kota} onChange={handleInput} className='w-full rounded-md border-2 p-2 text-xs font-normal' type="text" placeholder='Kota' />
              <input id='lokasi_propinsi' name='lokasi_propinsi' value={stateLocalMOM.lokasi_propinsi} onChange={handleInput} className='w-full rounded-md border-2 p-2 text-xs font-normal' type="text" placeholder='Propinsi' />
            </div>
          </div>
          <div>
            <label className='text-lg font-medium' htmlFor="">Alamat Lengkap</label>
            <div>
              <input id='alamat' name='alamat' value={stateLocalMOM.alamat} onChange={handleInput} className='w-full rounded-md border-2 p-2 text-xs font-normal' type="text" placeholder='Masukan alamat lengkap' />
            </div>
          </div>
          <div>
            <label className='text-lg font-medium' htmlFor="">Kategori Inovasi</label>
            <div>
              <input id='kategori_inovasi' name='kategori_inovasi' value={stateLocalMOM.kategori_inovasi} onChange={handleInput} className='w-full rounded-md border-2 p-2 text-xs font-normal' type="text" placeholder='Kategori Inovasi' />
            </div>
          </div>
          <div>
            <label className='text-lg font-medium' htmlFor="">Foto Pendukung</label>
            <div>
              <input id='foto_pendukung' name='foto_pendukung' value={stateLocalMOM.foto_pendukung} onChange={handleInput} className='w-full rounded-md border-2 text-xs font-normal file:border-none file:p-2 file:bg-gray-200' type="file" multiple />
            </div>
          </div>
          <div>
            <label className='text-lg font-medium' htmlFor="">Video Pendukung (Opsional) </label>
            <div>
              <input id='video_pendukung' name='video_pendukung' value={stateLocalMOM.video_pendukung} onChange={handleInput} className='w-full rounded-md border-2 text-xs font-normal file:border-none file:p-2 file:bg-gray-200' type="file" multiple />
            </div>
          </div>
          <div>
            <label className='text-lg font-medium' htmlFor="">Jumlah Pengajuan Dana Inovasi </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 bg-gray-200 border border-e-0 rounded-s-md">
                <p className='text-xs font-normal'>Rp</p>
              </span>
              <input id='jml_pengajuan_dana' name='jml_pengajuan_dana' value={stateLocalMOM.jml_pengajuan_dana} onChange={handleInput} className="rounded-e-md border-2 p-2 text-xs w-full" type="text" placeholder="Masukan nominal dana untuk mewujudkan inovasimu" />
            </div>
          </div>
          <div>
            <label className='text-lg font-medium' htmlFor="">Durasi Kampanye Inovasi</label>
            <div>
              <input id='durasi_kampanye' name='durasi_kampanye' value={stateLocalMOM.durasi_kampanye} onChange={handleInput} className='w-full rounded-md border-2 p-2 text-xs font-normal' type="text" placeholder='Masukan jumlah hari yang dibutuhkan untuk mengumpulkan dana' />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Formstep1