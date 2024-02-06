import React from 'react'
import { Link } from 'react-router-dom'

const Cardinovasi = ({ addLocation, addButton, linkButton, handleButton, image,
  catagory_id, user_name, inovation_name, time, id, persenTarget, kota, propinsi }) => {
  return (
    <>
      <div className='border-2 rounded-xl'>
        <img className='object-cover h-40 w-full rounded-t-xl' src={image || '/BlankData.jpg'} alt="" srcset="" />
        <div className='flex flex-col gap-8 px-6 py-5'>
          <div className='flex flex-col gap-2 h-32'>
            <Link to={`/inovasi/${id}`}>
              <p className='text-base font-thin underline'>{catagory_id}</p>
              <h2 className='text-lg font-extrabold line-clamp-2'>{inovation_name}</h2>
              <p className='text-base font-thin'>Oleh: {user_name}</p>
            </Link>
          </div>
          <div className='flex flex-col gap-2 '>
            <div className="w-full bg-slate-300 rounded-lg overflow-hidden">
              <div className="bg-green-900 h-1" style={{ width: `${persenTarget}%` }}></div>
            </div>
            <p className='text-base font-thin'><span className='font-semibold'>{persenTarget}%</span> pendanaan sudah tercapai</p>
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
            <p className='text-base font-normal line-clamp-2 xl:line-clamp-1'>{kota}, {propinsi}</p>
          </div>
        ) : (<div></div>)}
      </div>
    </>
  )
}

export default Cardinovasi