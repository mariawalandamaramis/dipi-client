import React from 'react'

const Formstep3 = ({ register, errors, formSubmitted }) => {

  return (
    <>
      <div className='flex flex-col gap-2'>
        <div>
          <label className='text-lg font-medium' htmlFor="">Nominal Dana Dukungan Souvenir#1</label>
          <div className="flex">
            <span className="inline-flex items-center px-3 bg-gray-200 border border-e-0 rounded-s-md">
              <p className='text-xs font-normal'>Rp</p>
            </span>
            <input {...register('nominal1', {
                required: ' Nominal souvenir 1 harus diisi ! ',
                valueAsNumber: true,
              })}
              className="rounded-e-md border-2 p-2 text-xs w-full" type="number" placeholder="Masukan nominal dana dukungan souvenir#1" />
          </div>
          <div className={`${formSubmitted ? ('invisible'): ('visible')} text-red-500 text-xs font-semibold leading-5 mt-2 flex flex-row max-md:max-w-full`}>
            {errors.nominal1 && <p>{errors.nominal1.message}</p>}
          </div>
        </div>
        <div>
          <label className='text-lg font-medium' htmlFor="">Bentuk Souvenir#1</label>
          <div>
            <textarea {...register('suvenir1', {
              required: ' Bentuk souvenir 1 harus diisi ! ',
            })}
              className='w-full rounded-md border-2 p-2 text-xs font-normal' type="text" placeholder='Tentukan bentuk souvenir untuk pedukung dengan nominal dana dukungan #1' />
            <div className={`${formSubmitted ? ('invisible'): ('visible')} text-red-500 text-xs font-semibold leading-5 mt-2 flex flex-row max-md:max-w-full`}>
              {errors.suvenir1 && <p>{errors.suvenir1.message}</p>}
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <div>
          <label className='text-lg font-medium' htmlFor="">Nominal Dana Dukungan Souvenir#2</label>
          <div className="flex">
            <span className="inline-flex items-center px-3 bg-gray-200 border border-e-0 rounded-s-md">
              <p className='text-xs font-normal'>Rp</p>
            </span>
            <input {...register('nominal2', {
              required: ' Nominal suvenir 2 harus diisi ! ',
              valueAsNumber: true,
            })}
              className="rounded-e-md border-2 p-2 text-xs w-full" type="number" placeholder="Masukan nominal dana dukungan suvenir#2" />
          </div>
          <div className={`${formSubmitted ? ('invisible'): ('visible')} text-red-500 text-xs font-semibold leading-5 mt-2 flex flex-row max-md:max-w-full`}>
            {errors.nominal2 && <p>{errors.nominal2.message}</p>}
          </div>
        </div>
        <div>
          <label className='text-lg font-medium' htmlFor="">Bentuk Suvenir#2</label>
          <div>
            <textarea {...register('suvenir2', {
              required: ' Bentuk souvenir 2 harus diisi ! ',
            })}
              className='w-full rounded-md border-2 p-2 text-xs font-normal' type="text" placeholder='Tentukan bentuk suvenir untuk pedukung dengan nominal dana dukungan #2' />
            <div className={`${formSubmitted ? ('invisible'): ('visible')} text-red-500 text-xs font-semibold leading-5 mt-2 flex flex-row max-md:max-w-full`}>
              {errors.suvenir2 && <p>{errors.suvenir2.message}</p>}
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <div>
          <label className='text-lg font-medium' htmlFor="">Nominal Dana Dukungan Souvenir#3</label>
          <div className="flex">
            <span className="inline-flex items-center px-3 bg-gray-200 border border-e-0 rounded-s-md">
              <p className='text-xs font-normal'>Rp</p>
            </span>
            <input {...register('nominal3', {
              required: ' Nominal suvenir 3 harus diisi ! ',
              valueAsNumber: true,
            })}
              className="rounded-e-md border-2 p-2 text-xs w-full" type="number" placeholder="Masukan nominal dana dukungan suvenir#3" />
          </div>
          <div className={`${formSubmitted ? ('invisible'): ('visible')} text-red-500 text-xs font-semibold leading-5 mt-2 flex flex-row max-md:max-w-full`}>
            {errors.nominal3 && <p>{errors.nominal3.message}</p>}
          </div>
        </div>
        <div>
          <label className='text-lg font-medium' htmlFor="">Bentuk Souvenir#3</label>
          <div>
            <textarea {...register('suvenir3', {
              required: ' Bentuk suvenir 3 harus diisi ! ',
            })}
              className='w-full rounded-md border-2 p-2 text-xs font-normal' type="text" placeholder='Tentukan bentuk souvenir untuk pedukung dengan nominal dana dukungan #3' />
            <div className={`${formSubmitted ? ('invisible'): ('visible')} text-red-500 text-xs font-semibold leading-5 mt-2 flex flex-row max-md:max-w-full`}>
              {errors.suvenir3 && <p>{errors.suvenir3.message}</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Formstep3