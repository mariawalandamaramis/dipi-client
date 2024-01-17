import React from 'react'

const Feature2 = () => {
  return (
    <>
      <div className='bg-green-900 p-6 md:px-20 lg:px-40 lg:py-24 text-white'>
        <div className='text-center mb-10'>
          <h1 className='text-3xl font-extrabold mb-2'>Mulai Berkontribusi Dari Sini</h1>
          <p className='text-base font-normal'>Jadilah bagian dari inovasi dengan memberikan dukungan atau mengajukan ide inovasi</p>
        </div>
        <div className='flex flex-col md:flex-row gap-5 text-green-900'>
          <div className='flex items-start gap-7 py-5 px-7 bg-white rounded-lg'>
            <img className='w-10 md:w-fit' src="ChatLove.svg" alt="" srcset="" />
            <div>
              <h2 className='text-lg font-extrabold'>Mendukung Inovasi</h2>
              <p className='text-base font-normal'>Berikan dukungan finansial secara sukarela untuk mendukung inovasi. Dukungan ini merupakan apresiasi dan dorongan moral bagi inovator untuk mewujudkan inovasinya.</p>
            </div>
          </div>
          <div className='flex items-start gap-7 py-5 px-7 bg-white rounded-lg'>
            <img className='w-10 md:w-fit' src="ChatAdd.svg" alt="" srcset="" />
            <div>
              <h2 className='text-lg font-extrabold'>Membuat Inovasi</h2>
              <p className='text-base font-normal'>Ciptakan inovasi solutif yang bermanfaat bagi semua orang. Sampaikan ide inovasi secara jelas, mudah dipahami dan menarik perhatian orang lain untuk mendukungnya.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Feature2