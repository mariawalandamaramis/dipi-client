import React from 'react'
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.snow.css"
import Fromeditortoolbar, { modules, formats } from '../components/FormPengajuanInovasi/Formeditortoolbar'

const DashoardInovasiku_update = () => {
  return (
    <>
      <div className='py-6 flex flex-col gap-10'>

        <div className='flex flex-col gap-8'>
          <div className='flex gap-4 border rounded-lg'>
            <div className='w-4 rounded bg-orange-600'></div>
            <h3 className='text-xl font-semibold p-1'>Bagaimana Informasi Terbaru Inovasi : Helm Batok Kelapa Ramah Lingkungan + Multifungsi ?</h3>
          </div>

          {/* text editor */}
          <div className='py-10 px-8 border rounded-lg border-green-900 flex flex-col gap-5'>
            <div>
              <label className='text-base font-normal' htmlFor="">Judul Inovasi</label>
              <div>
                <input className='w-full rounded-md border-2 p-2 text-xs font-normal' type="text" placeholder='Masukan judul informasi yang akan disampaikan' />
              </div>
            </div>
            <div>
              <label className='text-base font-normal mb-2' htmlFor="">Isi Informasi</label>
              <Fromeditortoolbar toolbarId={'t2'} />
              <ReactQuill
                theme="snow"
                placeholder={"Masukan isi informasi yang akan disampaikan."}
                modules={modules('t2')}
                formats={formats}
                className='h-96'
              />
            </div>
            <button className='bg-green-900 h-10 w-fit rounded-lg py-4 px-3.5 text-white text-sm font-semibold flex items-center gap-3'>
              <p>Bagikan</p>
            </button>
          </div>
        </div>

        <div className='flex flex-col gap-8'>
          <div className='flex gap-4 border rounded-lg'>
            <div className='w-4 rounded bg-orange-600'></div>
            <h3 className='text-xl font-semibold p-1'>Informasi Terbaru Inovasi : Helm Batok Kelapa Ramah LIngkungan + Multifungsi</h3>
          </div>

          <div className='flex flex-col gap-8'>
            {/* diisi update kabar baru */}
            <p className='text-base italic'>Belum ada kabar terbaru</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default DashoardInovasiku_update