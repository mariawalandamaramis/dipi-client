import React, { useState } from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import Cardinovasi from '../components/Cardinovasi'

const DashoardInovasiku = () => {
  const [isModeDetail, setIsModeDetail] = useState(false)
  const HandleModeDetail = () => { setIsModeDetail(!isModeDetail) }

  return (
    <>
      <div className='flex flex-col gap-6'>
        <div className='flex justify-between'>
          <h2 className='text-4xl font-semibold'>Inovasiku</h2>
          <button className='bg-green-900 h-10 rounded-lg py-4 px-3.5 text-white text-sm font-semibold flex items-center justify-center gap-3'>
            <img src="/add.svg" alt="" />
            <p>Ajukan Inovasi</p>
          </button>
        </div>

        <div className={`${isModeDetail ? ('flex') : ('hidden')}`}>
          <Link to={'/dashboard/inovasiku'}>
            <button onClick={HandleModeDetail} className='flex items-center gap-2 text-green-900'>
              <img src="/Back.svg" alt="" />
              Kembali
            </button>
          </Link>
        </div>

        <div className={`${isModeDetail ? ('hidden') : ('grid')} p-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3`}>
          <Cardinovasi addButton={true} linkButton={`/dashboard/inovasiku/${1}`} handleButton={HandleModeDetail} />
        </div>

        <Outlet />

      </div>
    </>
  )
}

export default DashoardInovasiku