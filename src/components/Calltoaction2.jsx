import React from 'react'
import { Link } from 'react-router-dom'

const Calltoaction2 = () => {
  return (
    <>
      <div className='bg-white p-6 md:px-20 lg:px-40 lg:py-20'>
        <div className='bg-green-900 py-6 px-4 text-center text-white rounded-lg'>
          <h1 className='text-2xl font-semibold'>Punya Inovasi ?</h1>
          <h1 className='text-2xl font-semibold'>Ayo mulai wujudkan inovasimu sekarang</h1>
          <Link to={'/ajukaninovasi'}><button className='bg-orange-600 rounded-lg py-2 px-3.5 text-white text-sm font-semibold mt-7'>
            <p>Mulai Berinovasi</p>
          </button></Link>
        </div>
      </div>
    </>
  )
}

export default Calltoaction2