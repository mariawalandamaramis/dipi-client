import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const OpsiDukungan = () => {
  return (
    <>
      <Navbar />

      {/* lansung aja tanpa component */}
      <div className='flex flex-col gap-4 bg-green-900 text-white p-6 md:px-20 lg:px-40 lg:py-16'>
        <p className='text-base font-semibold'>Kamu memilih untuk menjadi pendukung inovasi :</p>
        <h3 className='text-4xl font-extrabold'>Helm Batok Kelapa Ramah Lingkungan + Multifungsi</h3>
        <div className='flex items-center gap-2'>
          <div className='w-10 md:w-10 h-10 md:h-10'>
            <img className='w-full h-full rounded-full object-cover' src="/Hero.png" alt="" srcset="" />
          </div>
          <p className='hidden sm:flex text-base font-semibold'>Tralala Lulu</p>
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
              <input className="rounded-e-md border-2 p-2 text-xs w-full" type="number" placeholder="0" />
            </div>
            <p className='flex md:hidden text-sm font-normal'>Masukan nominal dana pendukung yang ingin diberikan, tidak ada batas maksimal dan minimal</p>
            <button className='mt-5 md:mt-0 bg-green-900 rounded py-2 md:py-0 px-3 text-white text-sm font-semibold'>
              Lanjutkan pembayaran
            </button>
          </div>
          <p className='hidden md:flex text-sm font-normal'>Masukan nominal dana pendukung yang ingin diberikan, tidak ada batas maksimal dan minimal</p>
        </div>
      </div>


      <div className='flex flex-col gap-10 p-6 md:px-20 lg:px-40 lg:py-16'>

        <div className='flex flex-col gap-2'>
          <h3 className='text-3xl font-extrabold'>Menjadi Pendukung Sejati</h3>
          <p className='text-base font-normal'>Kami sangat menghargai dukungan para pendukung sejari yang tulus mendukung inovasi kami.</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5'>
          {/* mapping */}
          <div className='border rounded-lg flex flex-col gap-2 p-2'>
            <div className='py-8 px-6 flex flex-col gap-4'>
              <p className='text-lg font-semibold'>Sovenir #1</p>
              <p className='text-3xl font-semibold'>Rp 700.000</p>
              <button className='bg-green-900 rounded py-2 px-3 text-white text-sm font-semibold'>
                Lanjutkan Pembayaran</button>
            </div>

            <div className='pb-5 px-6 flex flex-col gap-8'>
              <div>
                <p className='text-base font-semibold mb-2'>Apa yang didapatkan ?</p>
                <div className='flex gap-1'>
                  <img src="/check_ok.svg" alt="" />
                  <p className='text-base font-normal'>1 Sikat khusus helm batok kelapa</p>
                </div>
                <div className='flex gap-1'>
                  <img src="/check_ok.svg" alt="" />
                  <p className='text-base font-normal'>1 Sikat khusus helm batok kelapa</p>
                </div>
              </div>
              <div>
                <p className='text-base font-semibold mb-2'>Cara pengiriman ?</p>
                <p className='text-sm font-normal'>Produk dikirm dari kota Palopo, Sulawesi Selatan. Estimasi mulai pengiriman 25 Januari 2024 (seminggu setelah kampanye ditutup) </p>
              </div>
            </div>
          </div>
        </div>

      </div>


      <Footer />
    </>
  )
}

export default OpsiDukungan