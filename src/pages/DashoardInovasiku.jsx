import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import Cardinovasi from '../components/Cardinovasi'
import { useDispatch, useSelector } from 'react-redux'
import { getKategoriAPI, getLokasiAPI, getSemuaInovasiAPI, getUsersAPI } from '../redux/slice/inovasi-slice'
import Cookies from 'js-cookie'

const DashoardInovasiku = () => {
  const [isModeDetail, setIsModeDetail] = useState(false)
  const HandleModeDetail = () => { setIsModeDetail(!isModeDetail) }

  // get all inovation --- filter berdasarkan id user (krn 1 user bisa punya banyak inovasi)
  const dispatch = useDispatch()
  const semuaInovasi = useSelector((state) => state.inovasi).inovasi

  const userId = JSON.parse(Cookies.get('responLogin')).user.id
  const inovasinyaUser = semuaInovasi?.filter(item => item.user_id === userId)
  const semuaLokasi = useSelector((state => state.inovasi)).lokasi
  const semuaUser = useSelector((state => state.inovasi)).users
  const semuaKategori = useSelector((state => state.inovasi)).kategori

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
    namaKota[user.city_id] = user.city_name
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

  console.log(inovasinyaUser)

  return (
    <>
      <div className='flex flex-col gap-6'>
        <div className='flex justify-between'>
          <h2 className='text-4xl font-semibold'>Inovasiku</h2>
          <Link to={'/ajukaninovasi'}>
            <button className='bg-green-900 h-10 rounded-lg py-4 px-3.5 text-white text-sm font-semibold flex items-center justify-center gap-3'>
              <img src="/add.svg" alt="" />
              <p>Ajukan Inovasi</p>
            </button>
          </Link>
        </div>

        {/* <div>
          <Link to={'/dashboard/inovasiku'}>
            <button onClick={HandleModeDetail} className='flex items-center gap-2 text-green-900'>
              <img src="/Back.svg" alt="" />
              Kembali
            </button>
          </Link>
        </div> */}

        <div className={`grid p-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3`}>
          {inovasinyaUser.map((data) => (
            <Cardinovasi
              addButton={true}
              linkButton={`/dashboard/inovasiku/${data.id}`}
              handleButton={HandleModeDetail}
              image={data.image}
              catagory_id={namaKategori[data.category_id]}
              inovation_name={data.inovation_name.replace(/\b\w/g, match => match.toUpperCase())}
              id={data.id}
              user_name={namaUser[data.user_id]}
              time={sisaHari(data.duration, data.createdAt)}
              persenTarget={persenTarget(data.amount, 1000)}
              kota={namaKota[data.city_id]}
              propinsi={namaPropinsi[data.province_id]}
            />
          ))}
          {/* <Cardinovasi addButton={true} linkButton={`/dashboard/inovasiku/${3}`} handleButton={HandleModeDetail} /> */}
        </div>

        {/* <Outlet /> */}

      </div>
    </>
  )
}

export default DashoardInovasiku