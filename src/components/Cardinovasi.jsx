import React from 'react'
import { Link } from 'react-router-dom'

const Cardinovasi = ({ addLocation, addButton, linkButton, handleButton, image, category, title, time,id }) => {
  return (
    <>
      <div className='border-2 rounded-xl'>
        <img className='object-cover h-40 w-full rounded-t-xl' src={image} alt="" srcset="" />
        <div className='flex flex-col gap-8 px-6 py-5'>
          <div className='flex flex-col gap-2 h-32'>
            <Link to={`/inovasi/${id}`}>
              <p className='text-base font-thin underline'>{category}</p>
              <h2 className='text-lg font-extrabold line-clamp-2'>{title}</h2>
              <p className='text-base font-thin'>Oleh: Tralala Lulu</p>
            </Link>
          </div>
          <div className='flex flex-col gap-2 border-t-2'>
            <p className='text-base font-thin'><span className='font-semibold'>50%</span> pendanaan sudah tercapai</p>
            <p className='text-base font-semibold'>{time} Hari lagi</p>
          </div>
          {addButton ? (
            <div>
              <Link to={`${linkButton}`}>
                <button onClick={handleButton} className='bg-green-900 h-10 w-full rounded-lg py-4 px-3.5 text-white text-sm font-semibold flex items-center justify-center gap-3'>
                  <p>Berikan Inoformasi Terbaru</p>
                  <img src="/Arrow-right.svg" alt="" />
                </button>
              </Link>
            </div>
          ) : (<div></div>)}
        </div>

        {addLocation ? (
          <div className='flex bg-green-900 text-white gap-1 px-6 py-3 rounded-b-xl'>
            <img src="PinMap.svg" alt="" srcset="" />
            <p className='text-base font-normal'>Palopo, Sulawesi Selatan</p>
          </div>
        ) : (<div></div>)}
      </div>
    </>
  )
}

export default Cardinovasi