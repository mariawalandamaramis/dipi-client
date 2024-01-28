import React from 'react'
import { Link } from 'react-router-dom'

const Cardinovasi = () => {
  return (
    <>
      <div className='border-2 rounded-xl'>
        <img className='object-cover h-40 w-full rounded-t-xl' src="Hero.png" alt="" srcSet="" />
        <div className='flex flex-col gap-8 px-6 py-5'>
          <div className='flex flex-col gap-2'>
          <Link to="/detailpage"><p className='text-base font-thin underline'>Kerajinan</p></Link>
            <h2 className='text-lg font-extrabold'>Helm Batok Kelapa Ramah Lingkungan + Multifungsi</h2>
            <p className='text-base font-thin'>Oleh: Tralala Lulu</p>
          </div>
          <div className='flex flex-col gap-2 border-t-2'>
            <p className='text-base font-thin'><span className='font-semibold'>50%</span> pendanaan sudah tercapai</p>
            <p className='text-base font-semibold'>30 Hari lagi</p>
          </div>
        </div>
        <div className='flex bg-green-900 text-white gap-1 px-6 py-3 rounded-b-xl'>
          <img src="PinMap.svg" alt="" srcSet="" />
          <p className='text-base font-normal'>Palopo, Sulawesi Selatan</p>
        </div>
      </div>
    </>
  )
}

export default Cardinovasi