import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { getInovasiByIdAPI, getLokasiAPI, getOpsiDukunganAPI, getUsersAPI } from '../redux/slice/inovasi-slice'
import { useParams } from 'react-router-dom'
import Cardopsidonasi from '../components/Cardopsidonasi'

const OpsiDukungan = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const inovasiById = useSelector((state) => state.inovasi).inovasiById.data
  const OpsiDukungan = useSelector((state) => state.inovasi).paketDukungan.data
  const semuaUser = useSelector((state => state.inovasi)).users
  const semuaLokasi = useSelector((state => state.inovasi)).lokasi
  const [nominalDukungan, setNominalDukungan] = useState(0)
  const [btnClick, setBtnClick] = useState(false)
  const [msgInput, setMsgInput] = useState(false)
  const [tryReqDonation, setTryReqDonation] = useState({})

  useEffect(() => {
    dispatch(getInovasiByIdAPI(id))
    dispatch(getOpsiDukunganAPI(id))
    dispatch(getUsersAPI)
    dispatch(getLokasiAPI)

    if (btnClick) {
      if (tryReqDonation.nominal === 0 || tryReqDonation.nominal === "") { setMsgInput(true) }
      else {
        alert(JSON.stringify(tryReqDonation))
        setMsgInput(false)
      }
      setBtnClick(false)
    }

  }, [btnClick])

  const handleClikDukung = ({ type, nominal, suvenir }) => {
    setTryReqDonation({
      inovation_id: id,
      type: type,
      nominal: nominal,
      suvenir: suvenir
    })
    setBtnClick(true)
    // alert(JSON.stringify(tryReqDonation))
  }

  const onChangeInput = (e) => {
    setNominalDukungan(e.target.value)
    setMsgInput(false)
  }

  // menampilkan nama user dari user_id yang didpt dari getInovation
  const namaUser = {}
  semuaUser.data?.forEach(user => {
    namaUser[user.id] = user.name.replace(/\b\w/g, match => match.toUpperCase())
  })

  // menampilkan foto user dari user_id yang didpt dari getInovation
  const fotoUser = {}
  semuaUser.data?.forEach(user => {
    fotoUser[user.id] = user.profile
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

  const tglSemingguStlhSelesai = (duration, createdAt) => {
    const tanggalMulai = new Date(createdAt)
    const tanggalSelesai = new Date(tanggalMulai.getTime() + duration * 24 * 60 * 60 * 1000)
    tanggalSelesai.setDate(tanggalSelesai.getDate() + 7);

    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return tanggalSelesai.toLocaleDateString('id-ID', options);
  }

  console.log(OpsiDukungan[0].nominal)


  return (
    <>
      <Navbar />

      <div className='flex flex-col gap-4 bg-green-900 text-white p-6 md:px-20 lg:px-40 lg:py-16'>
        <p className='text-base font-semibold'>Kamu memilih untuk menjadi pendukung inovasi :</p>
        <h3 className='text-4xl font-extrabold'>{inovasiById.inovation_name.replace(/\b\w/g, match => match.toUpperCase())}</h3>
        <div className='flex items-center gap-2'>
          <div className='w-10 md:w-10 h-10 md:h-10'>
            <img className='w-full h-full rounded-full object-cover' src={fotoUser[inovasiById.user_id]} alt="" srcset="" />
          </div>
          <p className='flex text-base font-semibold'>{namaUser[inovasiById.user_id]}</p>
        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-6 bg-green-700 text-white p-6 md:px-20 lg:px-40 lg:py-10'>
        <div className='flex gap-6 w-full'>
          <img src="/heart.svg" alt="" srcset="" />
          <div>
            <p className='text-lg font-semibold'>Kami mengapresiasi setiap pendukung inovasi</p>
            <p className='text-base font-normal'>Dukunganmu adalah keberhasilan inovasi kami</p>
          </div>
        </div>
        <div className='flex gap-6 w-full'>
          <img src="/people-group.svg" alt="" srcset="" />
          <div>
            <p className='text-lg font-semibold'>Sovenir Untuk Pendukung Hebat</p>
            <p className='text-base font-normal'>Kami ingin terus terkoneksi agar bisa berkolaborasi</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-10 p-6 md:px-20 lg:px-40 lg:py-16'>

        <div className='flex flex-col gap-2'>
          <h3 className='text-3xl font-extrabold'>Menjadi Pendukung Sejati</h3>
          <p className='text-base font-normal'>Kami sangat menghargai dukungan para pendukung sejari yang tulus mendukung inovasi kami.</p>
        </div>

        <div>
          <div className='flex flex-col md:flex-row md:gap-4'>
            <div className="flex grow">
              <span className="inline-flex items-center px-3 bg-gray-200 border border-e-0 rounded-s-md">
                <p className='text-xs font-normal'>Rp</p>
              </span>
              <input onChange={onChangeInput}
                className="rounded-e-md border-2 p-2 text-xs w-full" type="number" placeholder="0" />
            </div>
            <p className={`${msgInput ? ('flex md:hidden') : ('hidden')} text-xs font-normal text-red-700 mb-2`}>Isi dulu nominalnya !</p>
            <p className='flex md:hidden text-sm font-normal'>Masukan nominal dana pendukung yang ingin diberikan, tidak ada batas maksimal dan minimal</p>
            <button onClick={() => handleClikDukung(
              {
                type: 0,
                nominal: nominalDukungan, // isi dari input
                suvenir: '',
              }
            )}
              className='mt-5 md:mt-0 bg-green-900 rounded py-2 md:py-0 px-3 text-white text-sm font-semibold'>
              Lanjutkan pembayaran
            </button>
          </div>
          <p className={`hidden md:flex ${msgInput ? ('md:flex') : ('md:hidden')} text-xs font-normal text-red-700 mb-2`}>Isi dulu nominalnya !</p>
          <p className='hidden md:flex text-sm font-normal'>Masukan nominal dana pendukung yang ingin diberikan, tidak ada batas maksimal dan minimal</p>
        </div>
      </div>

      <div className='flex flex-col gap-10 p-6 md:px-20 lg:px-40 lg:py-16'>

        <div className='flex flex-col gap-2'>
          <h3 className='text-3xl font-extrabold'>Menjadi Pendukung Hebat</h3>
          <p className='text-base font-normal'>Kami memberikan sovenir kepada pendukung hebat sebagai bentuk harapan untuk tetap saling terkoneksi</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5'>
          {OpsiDukungan.map((data, idx) => (
            <Cardopsidonasi
              key={data.id}
              sovenir={idx + 1}
              nominal={data.nominal.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}
              description={data.description}
              inovation_name={inovasiById.inovation_name}
              kota={namaKota[inovasiById.city_id]}
              propinsi={namaPropinsi[inovasiById.province_id]}
              estimasipengiriman={tglSemingguStlhSelesai(inovasiById.duration, inovasiById.createdAt)}
              onClick={() => handleClikDukung({
                type: 1,
                nominal: data.nominal,
                suvenir: data.description
              })}
            />
          ))}
        </div>

      </div>


      <Footer />
    </>
  )
}

export default OpsiDukungan