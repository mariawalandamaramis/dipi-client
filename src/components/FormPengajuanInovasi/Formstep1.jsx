import React from 'react'

const Formstep1 = () => {
  return (
    <>
      <div className='mb-8'>
        <h2 className='text-2xl font-bold'>Apa inovasimu ?</h2>
        <p className='text-lg font-normal'>Buatlah inovasimu mudah dipahami oleh para pendukung</p>
      </div>
      <div>
        <form className='flex flex-col gap-4' action="">
          <div>
            <label className='text-lg font-medium' htmlFor="">Judul Inovasi</label>
            <div>
              <input className='w-full rounded-md border-2 p-2 text-xs font-normal' type="text" placeholder='Masukan judul inovasimu disini' />
            </div>
          </div>
          <div>
            <label className='text-lg font-medium' htmlFor="">Deskripsi Singkat</label>
            <div>
              <textarea className='w-full rounded-md border-2 p-2 text-xs font-normal' type="text" placeholder='Masukan deskripsi singkat tentang inovasimu disini' />
            </div>
          </div>
          <div>
            <label className='text-lg font-medium' htmlFor="">Lokasi</label>
            <div className='flex flex-col sm:flex-row justify-between gap-2'>
              <input className='w-full rounded-md border-2 p-2 text-xs font-normal' type="text" placeholder='Kota' />
              <input className='w-full rounded-md border-2 p-2 text-xs font-normal' type="text" placeholder='Propinsi' />
            </div>
          </div>
          <div>
            <label className='text-lg font-medium' htmlFor="">Alamat Lengkap</label>
            <div>
              <input className='w-full rounded-md border-2 p-2 text-xs font-normal' type="text" placeholder='Masukan alamat lengkap' />
            </div>
          </div>
          <div>
            <label className='text-lg font-medium' htmlFor="">Kategori Inovasi</label>
            <div>
              <input className='w-full rounded-md border-2 p-2 text-xs font-normal' type="text" placeholder='Kategori Inovasi' />
            </div>
          </div>
          <div>
            <label className='text-lg font-medium' htmlFor="">Foto Pendukung</label>
            <div>
              <input className='w-full rounded-md border-2 text-xs font-normal file:border-none file:p-2 file:bg-gray-200' type="file" multiple />
            </div>
          </div>
          <div>
            <label className='text-lg font-medium' htmlFor="">Video Pendukung (Opsional) </label>
            <div>
              <input className='w-full rounded-md border-2 text-xs font-normal file:border-none file:p-2 file:bg-gray-200' type="file" multiple />
            </div>
          </div>
          <div>
            <label className='text-lg font-medium' htmlFor="">Jumlah Pengajuan Dana Inovasi </label>
            <div class="flex">
              <span class="inline-flex items-center px-3 bg-gray-200 border border-e-0 rounded-s-md">
                <p className='text-xs font-normal'>Rp</p>
              </span>
              <input class="rounded-e-md border-2 p-2 text-xs w-full" type="text" placeholder="Masukan nominal dana untuk mewujudkan inovasimu" />
            </div>
          </div>
          <div>
            <label className='text-lg font-medium' htmlFor="">Durasi Kampanye Inovasi</label>
            <div>
              <input className='w-full rounded-md border-2 p-2 text-xs font-normal' type="text" placeholder='Masukan jumlah hari yang dibutuhkan untuk mengumpulkan dana' />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Formstep1