import React from 'react';

function Hero() {
  return (
    <>
      <div className='flex flex-col md:flex-row justify-between md:items-center gap-x-20 gap-y-10 bg-green-900 p-6 md:px-20 lg:px-40 lg:py-20'>
        <div className='md:w-3/4'>
          <h1 className='text-3xl font-extrabold mb-6 text-white'>Dukung Perempuan Indonesia Mewujudkan Inovasinya</h1>
          <p className='text-base font-normal mb-8 text-white'>Indonesia memiliki banyak perempuan hebat dengan inovasi unik, kreativitas tinggi, dan orientasi pada solusi. Namun, untuk mewujudkan inovasi-inovasi tersebut, para perempuan membutuhkan dukungan dari kita semua.</p>
          <button className='bg-orange-600 h-10 rounded-lg py-4 px-3.5 text-white text-sm font-black flex items-center justify-center gap-3'>
            <p>Jelajah Inovasi</p>
            <img src="Arrow-right.svg" alt="" />
          </button>
        </div>
        <div className='flex items-center justify-center self-stretch md:w-3/4'>
          <img className='rounded' src="Hero.png" alt="" srcSet="" />
        </div>
      </div>
    </>
  )
}

export default Hero