import React from 'react'

const Formstep3 = () => {
  return (
    <>
      <div className='mb-8'>
        <h2 className='text-2xl font-bold'>Buat Pendukungmu Agar Tetap Terhubung</h2>
        <p className='text-lg font-normal'>Berikan suvernir sesuai dengan dukungan yang diberikan</p>
      </div>
      <div className='mb-8 flex bg-green-950 p-2 gap-2 rounded-lg items-start'>
        <img src="Lamp.svg" alt="" srcset="" />
        <p className='text-sm italic text-white'>Pemberian suvenir bertujuan untuk menarik minat pendukung dan memberikan kesan spesial kepada pendukung. Tips : berikan souvenir yang bisa dikenang dan bermanfaat.</p>
      </div>
      <div>
        <form className='flex flex-col gap-6' action="">
          <div className='flex flex-col gap-2'>
            <div>
              <label className='text-lg font-medium' htmlFor="">Nominal Dana Dukungan Suvenir#1</label>
              <div class="flex">
                <span class="inline-flex items-center px-3 bg-gray-200 border border-e-0 rounded-s-md">
                  <p className='text-xs font-normal'>Rp</p>
                </span>
                <input class="rounded-e-md border-2 p-2 text-xs w-full" type="text" placeholder="Masukan nominal dana dukungan suvenir#1" />
              </div>
            </div>
            <div>
              <label className='text-lg font-medium' htmlFor="">Bentuk Suvenir#1</label>
              <div>
                <textarea className='w-full rounded-md border-2 p-2 text-xs font-normal' type="text" placeholder='Tentukan bentuk suvenir untuk pedukung dengan nominal dana dukungan #1' />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <div>
              <label className='text-lg font-medium' htmlFor="">Nominal Dana Dukungan Suvenir#2</label>
              <div class="flex">
                <span class="inline-flex items-center px-3 bg-gray-200 border border-e-0 rounded-s-md">
                  <p className='text-xs font-normal'>Rp</p>
                </span>
                <input class="rounded-e-md border-2 p-2 text-xs w-full" type="text" placeholder="Masukan nominal dana dukungan suvenir#2" />
              </div>
            </div>
            <div>
              <label className='text-lg font-medium' htmlFor="">Bentuk Suvenir#2</label>
              <div>
                <textarea className='w-full rounded-md border-2 p-2 text-xs font-normal' type="text" placeholder='Tentukan bentuk suvenir untuk pedukung dengan nominal dana dukungan #2' />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <div>
              <label className='text-lg font-medium' htmlFor="">Nominal Dana Dukungan Suvenir#3</label>
              <div class="flex">
                <span class="inline-flex items-center px-3 bg-gray-200 border border-e-0 rounded-s-md">
                  <p className='text-xs font-normal'>Rp</p>
                </span>
                <input class="rounded-e-md border-2 p-2 text-xs w-full" type="text" placeholder="Masukan nominal dana dukungan suvenir#3" />
              </div>
            </div>
            <div>
              <label className='text-lg font-medium' htmlFor="">Bentuk Suvenir#3</label>
              <div>
                <textarea className='w-full rounded-md border-2 p-2 text-xs font-normal' type="text" placeholder='Tentukan bentuk suvenir untuk pedukung dengan nominal dana dukungan #3' />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Formstep3