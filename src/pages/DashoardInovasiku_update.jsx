import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.snow.css"
import Fromeditortoolbar, { modules, formats } from '../components/FormPengajuanInovasi/Formeditortoolbar'
import { useForm } from 'react-hook-form'

const DashoardInovasiku_update = () => {
  const [errMsgQuill, setErrMsgQuill] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)

    if (!data.hasOwnProperty('content')) {
      setErrMsgQuill(true)
    } else if (data.content === "<p><br><p>") {
      setErrMsgQuill(true)
    }

    alert('oke, data ok, erro msg ok')
    // handle POST data here
  }

  useEffect(() => {
		register("content", {
			required: "isi detail dulu",
		})
	}, [register])

  const handleEditorChange = (content) => {
		setValue("content", content)
	}

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
            <form
              onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className='text-base font-normal' htmlFor="">Judul Artikel Update Inovasi</label>
                <div>
                  <input
                    {...register('title', {
                      required: ' Isi judul artikel update dulu ! '
                    })}
                    className='w-full rounded-md border-2 p-2 text-xs font-normal' type="text" placeholder='Masukan judul informasi yang akan disampaikan' />
                </div>
                <div className={`text-red-500 text-xs font-semibold leading-5 mt-2 flex flex-row max-md:max-w-full`}>
                  {errors.title && <p>{errors.title.message}</p>}
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
                  onChange={handleEditorChange}
                />
                <div className={`${errMsgQuill ? ('invisible') : ('visible')} text-red-500 text-xs font-semibold leading-5 mt-2 flex flex-row max-md:max-w-full`}>
                  {errors.content && <p>{errors.content.message}</p>}
                </div>
              </div>
              <button type='submit' className='hover:bg-green-700 bg-green-900 h-10 w-fit rounded-lg py-4 px-3.5 mt-4 text-white text-sm font-semibold flex items-center gap-3'>
                <p>Bagikan</p>
              </button>
            </form>
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