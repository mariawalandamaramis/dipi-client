import React, { useEffect } from 'react'
import Cardinovasi from './Cardinovasi'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getKategoriAPI, getLokasiAPI, getSemuaInovasiAPI, getUsersAPI } from '../redux/slice/inovasi-slice'

const Spillcardinovasi = () => {
  const dispatch = useDispatch()
  const semuaInovasi = useSelector((state) => state.inovasi).inovasi
  const semuaLokasi = useSelector((state => state.inovasi)).lokasi
  const semuaUser = useSelector((state => state.inovasi)).users
  const semuaKategori = useSelector((state => state.inovasi)).kategori

  // ambil acak inovasi sebanyak 6 object
  const ambilAcak = (array, n) => {
    // set array yg akan diacak, jgn gunakan array utama
    const acakArray = array.slice()
    // acak array dgn metode fisher yates
    for (let i = acakArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [acakArray[i], acakArray[j]] = [acakArray[j], acakArray[i]]
    }
    return acakArray.slice(0, n)
  }

  const beberapaInovasi = ambilAcak(semuaInovasi, 6)

  // menampilkan nama user dari user_id yang didpt dari getInovation
  const namaUser = {}
  semuaUser.data?.forEach(user => {
    namaUser[user.id] = user.name.replace(/\b\w/g, match => match.toUpperCase())
  })

  // menampilkan kategori dari category_id yang didpt dari getInovation
  const namaKategori = {}
  semuaKategori.data?.forEach(kategori => {
    namaKategori[kategori.id] = kategori.category_name
  })

  // menampilkan nama kota dari city_id yang didpt dari getInovation
  const namaKota = {}
  semuaLokasi.data?.forEach(user => {
    // console.log(user)
    namaKota[user.province_id] = user.name
  })

  // menampilkan nama propinsi dari province_id yang didpt dari getInovation
  const namaPropinsi = {}
  semuaLokasi.data?.forEach(user => {
    namaPropinsi[user.province_id] = user.province
  })

  // hitung sisa hari
  const sisaHari = (duration, createdAt) => {
    const dateNow = new Date()
    const dateStart = new Date(createdAt)

    const jmlHariBerjalan = dateNow.getTime() - dateStart.getTime()
    const jmlHariBerjalan_convert = Math.ceil(jmlHariBerjalan / (1000 * 3600 * 24))
    const sisaHari = duration - jmlHariBerjalan_convert

    return sisaHari
  }

  // hitung persentase target pendanaan
  const persenTarget = (amount, donate) => {
    if (amount <= 0) { return 0 }
    const persentase = Math.round((donate / amount) * 100)
    return persentase
  }

  useEffect(() => {
    dispatch(getSemuaInovasiAPI)
    dispatch(getUsersAPI)
    dispatch(getKategoriAPI)
    dispatch(getLokasiAPI)
  }, [])

  console.log(beberapaInovasi)

  return (
    <>
      <div className='bg-white p-6 md:px-20 lg:px-40 lg:py-20 flex flex-col gap-14 items-center'>
        <div className='text-center'>
          <h1 className='text-3xl font-extrabold mb-2'>Daftar Inovasi dari Perempuan Hebat</h1>
          <p className='text-base font-normal'>Mulailah berkontribusi dengan mendukung inovasi pilihanmu</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
          {beberapaInovasi.map((data) => (
            <Cardinovasi
              key={data.id}
              addLocation={true}
              image={data.image}
              catagory_id={namaKategori[data.category_id]}
              inovation_name={data.inovation_name.replace(/\b\w/g, match => match.toUpperCase())}
              id={data.id}
              user_name={namaUser[data.user_id]}
              time={sisaHari(data.duration, data.createdAt)}
              persenTarget={persenTarget(data.amount, data.total_support)}
              kota={namaKota[data.province_id]}
              propinsi={namaPropinsi[data.province_id]}
            />
          ))}
        </div>
        <Link to={'/inovasi'}>
          <button className='bg-orange-600 h-10 w-fit rounded-lg py-4 px-3.5 text-white text-sm font-black flex items-center justify-center gap-3'>
            <p>Cari Inovasi Lainnya</p>
            <img src="Arrow-right.svg" alt="" />
          </button>
        </Link>
      </div>
    </>
  )
}

export default Spillcardinovasi