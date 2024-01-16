import React from 'react'

const Calltoaction = () => {
  return (
    <>
      <div className='bg-white p-6 md:px-20 lg:px-40 lg:py-16'>

        <div className='bg-green-900 w-full rounded-xl px-10 py-10 md:py-0 grid grid-cols-1 md:grid-cols-2 md:gap-20'>

          <div className='flex flex-col justify-center text-white'>
            <h1 className='text-3xl font-extrabold mb-6'>Kemudahan Berinovasi</h1>
            <p className='text-base font-normal'>Proses yang mudah dan transparan untuk mendukung perempuan berinovasi, termasuk kemudahan perempuan mendapatkan dukungan untuk mewujudkan inovasinya.</p>
          </div>

          <div className='relative w-full h-40 sm:h-80 lg:h-96 overflow-hidden'>
            <div className='absolute flex md:flex-wrap md:space-y-2 gap-3 md:gap-0 w-3/4 sm:w-1/2 md:w-1/2 md:px-2 top-10 animate-slideleft md:animate-slidedown'>
              <img className='rounded-lg' src="Hero.png" alt="" srcset="" />
              <img className='rounded-lg' src="Hero.png" alt="" srcset="" />
              <img className='rounded-lg' src="Hero.png" alt="" srcset="" />
              <img className='rounded-lg' src="Hero.png" alt="" srcset="" />
              <img className='rounded-lg' src="Hero.png" alt="" srcset="" />
              <img className='rounded-lg' src="Hero.png" alt="" srcset="" />
            </div>
            <div className='absolute hidden md:flex flex-wrap space-y-2 w-1/2 px-2 right-0 animate-slideup'>
              <img className='rounded-lg' src="Hero.png" alt="" srcset="" />
              <img className='rounded-lg' src="Hero.png" alt="" srcset="" />
              <img className='rounded-lg' src="Hero.png" alt="" srcset="" />
              <img className='rounded-lg' src="Hero.png" alt="" srcset="" />
              <img className='rounded-lg' src="Hero.png" alt="" srcset="" />
              <img className='rounded-lg' src="Hero.png" alt="" srcset="" />
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Calltoaction