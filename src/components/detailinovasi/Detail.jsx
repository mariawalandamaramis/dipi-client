import React, { useState } from "react";
import { Link } from "react-router-dom";
import DetailDesc from "./DetailDesc";
import KabarbaruDesc from "./KabarbaruDesc";

function Detail() {
  const [toggleTab, setToggleTab] = useState(1)
  const updateToggle = (id) => { setToggleTab(id) }

  const kemungkinanAPI = {
    amount: 5000000,
    donate: 90000,
    duration: 100,
    cratedAT: "2024-01-15T13:23:55.062Z"
  }

  const persenTarget = Math.round((kemungkinanAPI.donate / kemungkinanAPI.amount) * 100)

  // sisa hari 
  // durasi - (jml hari yang sudah dilalui)
  // jml hari yang sudah dilalui 
  // waktu saat ini - waktu saat mulai 

  const dateNow = new Date()
  const dateStart = new Date(kemungkinanAPI.cratedAT)

  const jmlHariBerjalan = dateNow.getTime() - dateStart.getTime()
  const jmlHariBerjalan_convert = Math.ceil(jmlHariBerjalan / (1000 * 3600 * 24))
  const sisaWaktu = kemungkinanAPI.duration - jmlHariBerjalan_convert

  // format tanggal
  const optionFormatDate = { year: 'numeric', month: 'long', day: 'numeric' }
  const formatDate = dateStart.toLocaleDateString('id-ID', optionFormatDate)


  return (
    <>
      <div className="flex flex-col md:flex-row p-6 md:px-20 lg:px-40 lg:py-10 gap-10">
        <div className="w-[54%] max-md:w-full">
          <img className='rounded w-full h-full object-cover' src="/Hero.png" alt="" srcset="" />
        </div>
        <div className="md:w-1/2 flex flex-col gap-4">
          <p className="text-base font-normal underline underline-offset-4">kerajinan</p>
          <h3 className="text-3xl font-extrabold">Helm Batok Kelapa Ramah Lingkungan + Multifungsi</h3>
          <div className='flex items-center gap-2'>
            <div className='w-10 md:w-10 h-10 md:h-10'>
              <img className='w-full h-full rounded-full object-cover' src="/Hero.png" alt="" srcset="" />
            </div>
            <p className='hidden sm:flex text-base font-semibold'>Tralala Lulu</p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <p className="text-2xl font-semibold">{kemungkinanAPI.donate.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}</p>
              <p className="text-base font-normal">100 Pendukung</p>
            </div>

            {/* persenan */}
            <div className="w-full bg-slate-300 rounded-lg overflow-hidden">
              <div className="bg-green-900 h-3 rounded-lg" style={{ width: `${persenTarget}%` }}></div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-base font-normal">{persenTarget}% dari target {kemungkinanAPI.amount.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })} </p>
              <p className="text-base font-normal">{sisaWaktu} Hari Lagi</p>
            </div>
          </div>
          <div className='flex gap-2'>
            <img src="/PinMap_green.svg" alt="" srcset="" />
            <p className='text-base font-normal'>Palopo, Sulawesi Selatan</p>
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
          <div className={toggleTab === 1 ? 'visible' : 'hidden'}><DetailDesc /></div>
          <div className={`${toggleTab === 2 ? 'visible' : 'hidden'} flex flex-col gap-8`}>
            <KabarbaruDesc />

            <div className="py-10 text-2xl text-center font-semibold bg-green-900 text-white rounded-lg">
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
