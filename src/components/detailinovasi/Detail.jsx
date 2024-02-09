import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DetailDesc from "./DetailDesc";
import KabarbaruDesc from "./KabarbaruDesc";
import { useDispatch, useSelector } from "react-redux";
import { getArtikelAPI, getInovasiByIdAPI, getKategoriAPI, getLokasiAPI, getUsersAPI } from "../../redux/slice/inovasi-slice";

function Detail() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const inovasiById = useSelector((state) => state.inovasi).inovasiById.data
  const artikelByIdInovasi = useSelector((state) => state.inovasi).artikel
  const semuaKategori = useSelector((state => state.inovasi)).kategori
  const semuaUser = useSelector((state => state.inovasi)).users
  const semuaLokasi = useSelector((state => state.inovasi)).lokasi
  const [toggleTab, setToggleTab] = useState(1)
  const updateToggle = (idTab) => { setToggleTab(idTab) }

  useEffect(() => {
    dispatch(getInovasiByIdAPI(id))
    dispatch(getArtikelAPI(id))
    dispatch(getKategoriAPI)
    dispatch(getUsersAPI)
    dispatch(getLokasiAPI)
  }, [])


  const persenTarget = Math.round((inovasiById.total_support / inovasiById?.amount) * 100)

  // sisa hari 
  // durasi - (jml hari yang sudah dilalui)
  // jml hari yang sudah dilalui 
  // waktu saat ini - waktu saat mulai 

  const dateNow = new Date()
  const dateStart = new Date(inovasiById?.createdAt)

  const jmlHariBerjalan = dateNow.getTime() - dateStart.getTime()
  const jmlHariBerjalan_convert = Math.ceil(jmlHariBerjalan / (1000 * 3600 * 24))
  const sisaWaktu = inovasiById?.duration - jmlHariBerjalan_convert

  // format tanggal
  const optionFormatDate = { year: 'numeric', month: 'long', day: 'numeric' }
  const formatDate = dateStart.toLocaleDateString('id-ID', optionFormatDate)

  // menampilkan kategori dari category_id yang didpt dari getInovation
  const namaKategori = {}
  semuaKategori.data?.forEach(kategori => {
    namaKategori[kategori.id] = kategori.category_name
  })

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

  console.log(inovasiById)

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


  return (
    <>
      <div className="flex flex-col md:flex-row p-6 md:px-20 lg:px-40 lg:py-10 gap-10">
        <div className="w-[54%] max-md:w-full">
          <img className='rounded w-full h-full object-cover' src={inovasiById?.image || '/BlankData.jpg'} alt="" srcset="" />
        </div>
        <div className="md:w-1/2 flex flex-col gap-4">
          <p className="text-base font-normal underline underline-offset-4">{namaKategori[inovasiById?.category_id]}</p>
          <h3 className="text-3xl font-extrabold">{inovasiById?.inovation_name.replace(/\b\w/g, match => match.toUpperCase())}</h3>
          <div className='flex items-center gap-2'>
            <div className='w-10 md:w-10 h-10 md:h-10'>
              <img className='w-full h-full rounded-full object-cover' src={fotoUser[inovasiById?.user_id]} alt="" srcset="" />
            </div>
            <p className='hidden sm:flex text-base font-semibold'>{namaUser[inovasiById?.user_id]}</p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <p className="text-2xl font-semibold">{inovasiById.total_support.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}</p>
              <p className="text-base font-normal">100 Pendukung</p>
            </div>

            {/* persenan */}
            <div className="w-full bg-slate-300 rounded-lg overflow-hidden">
              <div className="bg-green-900 h-3 rounded-lg" style={{ width: `${persenTarget}%` }}></div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-base font-normal">{persenTarget}% dari target {inovasiById?.amount.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })} </p>
              <p className="text-base font-normal">{sisaWaktu} Hari Lagi</p>
            </div>
          </div>
          <div className='flex gap-2'>
            <img src="/PinMap_green.svg" alt="" srcset="" />
            <p className='text-base font-normal'>{namaKota[inovasiById?.city_id]}, {namaPropinsi[inovasiById?.province_id]}</p>
          </div>
          <Link to={`dukungan`}>
            <button className="bg-green-900 w-full rounded py-2 px-3.5 text-white text-md font-semibold flex items-center justify-center gap-3">
              Dukung
            </button>
          </Link>
          <div className="flex sm:gap-5">
            <div className="flex flex-col sm:flex-row md:flex-col xl:flex-row align-end gap-1">
              <p className="text-base font-normal">Bagikan :</p>
              <ul className='flex gap-2'>
                <li><img src="/Facebook.svg" alt="" srcSet="" /></li>
                <li><img src="/Facebook.svg" alt="" srcSet="" /></li>
                <li><img src="/Facebook.svg" alt="" srcSet="" /></li>
                <li><img src="/Facebook.svg" alt="" srcSet="" /></li>
                <li><img src="/Facebook.svg" alt="" srcSet="" /></li>
                <li><img src="/Facebook.svg" alt="" srcSet="" /></li>
              </ul>
            </div>
            <div className="flex sm:flex-row md:flex-col xl:flex-row align-end gap-1 grow items-end">
              <p className="text-base font-normal invisible">atau</p>
              <button className="bg-green-900 rounded px-3 w-full h-3/4 sm:h-full text-white text-xs font-semibold">
                Link tautan
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col p-6 md:px-20 lg:px-40 lg:py-10 gap-10">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-extrabold">Mengenal Lebih Dalam Inovasi yang Dihadirkan</h2>
          <p className="text-lg font-normal">Pelajari inovasi ini secara mendalam untuk mendukungnya</p>
        </div>

        <div className="border-b flex items-center self-stretch px-8">
          <button onClick={() => updateToggle(1)} className={`${toggleTab === 1 ? 'bg-green-900 text-white' : 'bg-white'} p-2 sm:px-16 rounded-t-lg text-lg font-semibold`}>Detail</button>
          <button onClick={() => updateToggle(2)} className={`${toggleTab === 2 ? 'bg-green-900 text-white' : 'bg-white'} p-2 sm:px-16 rounded-t-lg text-lg font-semibold`}>Kabar Terbaru</button>
        </div>

        {/* hasil dari tab */}
        <div>
          <div className={toggleTab === 1 ? 'visible' : 'hidden'}>
            <DetailDesc
              description={inovasiById?.description}
            />
          </div>

          <div className={`${toggleTab === 2 ? 'visible' : 'hidden'} flex flex-col gap-8`}>
            {artikelByIdInovasi.data?.map((data, idx) => (
              <KabarbaruDesc
                key={data.id}
                artikelKe={artikelByIdInovasi.data.length - idx}
                name={namaUser[inovasiById.user_id]}
                foto={fotoUser[inovasiById.user_id]}
                title={'Judul kabar informasi terbaru'}
                description={data.description}
                created={new Date(data.createdAt).toLocaleDateString('id-ID', optionFormatDate)}
              />
            ))}
            <div className="py-10 text-base md:text-2xl text-center font-semibold bg-green-900 text-white rounded-lg">
              <p>
                Pencarian dukungan inovasi ini
                <br />
                dimulai pada tanggal {formatDate}
              </p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Detail