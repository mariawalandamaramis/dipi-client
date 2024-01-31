import React from 'react'
import Cardinovasi from './Cardinovasi'
import { Link } from 'react-router-dom'

const Spillcardinovasi = () => {
  return (
    <>
      <div className='bg-white p-6 md:px-20 lg:px-40 lg:py-20 flex flex-col gap-14 items-center'>
        <div className='text-center'>
          <h1 className='text-3xl font-extrabold mb-2'>Daftar Inovasi dari Perempuan Hebat</h1>
          <p className='text-base font-normal'>Mulailah berkontribusi dengan mendukung inovasi pilihanmu</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
          <Cardinovasi addLocation={true} image={'/Hero.png'} title={'coba-coba'} id={1} />
          <Cardinovasi addLocation={true} image={'/Hero.png'} title={'coba-coba'} id={2} />
          <Cardinovasi addLocation={true} image={'/Hero.png'} title={'coba-coba'} id={6} />
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