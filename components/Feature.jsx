import React from 'react'

const Feature = () => {
  return (
    <>
      <div className='bg-white p-6 md:px-20 lg:px-40 lg:py-16'>
        <h1 className='text-3xl font-extrabold text-center mb-16'>Aspek Utama Pemberdayaan Perempuan Inovatif</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
          <div className='flex flex-col items-center text-center'>
            <img src="bi_1-circle.svg" alt="" />
            <h2 className='text-lg font-semibold mt-4'>Inovasi untuk semua</h2>
            <p className='text-base font-normal'>Wadah perempuan inovatif untuk menghadirkan solusi bagi semua kalangan.</p>
          </div>
          <div className='flex flex-col items-center text-center'>
            <img src="bi_2-circle.svg" alt="" />
            <h2 className='text-lg font-semibold mt-4'>Dukungan mudah</h2>
            <p className='text-base font-normal'>Proses yang mudah dan transparan untuk mendukung inovasi.</p>
          </div>
          <div className='flex flex-col items-center text-center'>
            <img src="bi_3-circle.svg" alt="" />
            <h2 className='text-lg font-semibold mt-4'>Kesempatan berkontribusi</h2>
            <p className='text-base font-normal'>Ikut berkontribusi mewujudkan inovasi dengan berbagai cara.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Feature