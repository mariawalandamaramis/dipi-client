import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.snow.css"
import Fromeditortoolbar, { modules, formats } from '../components/FormPengajuanInovasi/Formeditortoolbar'
import { useForm } from 'react-hook-form'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { PostArtikelAPi, getArtikelByIdInovAPI } from '../redux/slice/artikel-slice'
import { getInovasiByIdAPI, getUsersAPI } from '../redux/slice/inovasi-slice'
import KabarbaruDesc from '../components/detailinovasi/KabarbaruDesc'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'

const DashoardInovasiku_update = () => {
  const [errMsgQuill, setErrMsgQuill] = useState(false)
  const { id } = useParams()
  const dispatch = useDispatch()
  const artikelByIdInovasi = useSelector(state => state.artikel).semuaArtikel
  const inovasiById = useSelector((state) => state.inovasi).inovasiById
  const semuaUser = useSelector((state => state.inovasi)).users
  const responPostArtikel = useSelector((state) => state.artikel).postArtikel


  // console.log(artikelByIdInovasi)

  useEffect(() => {
    dispatch(getArtikelByIdInovAPI(id))
    dispatch(getInovasiByIdAPI(id))
    dispatch(getUsersAPI)
  }, [])

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    // console.log(data)

    if (!data.hasOwnProperty('content')) {
      setErrMsgQuill(true)
    } else if (data.content === "<p><br><p>") {
      setErrMsgQuill(true)
    }
    setDataToPost({ inovation_id: id, title: data.title, description: data.content });
  }

  // post API here
  const [datatoPost, setDataToPost] = useState({})
  useEffect(() => {
    if (Object.keys(datatoPost).length === 3) {
      dispatch(PostArtikelAPi(datatoPost))
    }
  }, [datatoPost])

  // alert if succes
  const alertSucces = () => {
    withReactContent(Swal).fire({
      position: "center",
      icon: "success",
      title: "Berhasil Update Kabar Terbaru",
      showConfirmButton: false,
      timer: 1500
    })
  }

  useEffect(() => {
    if(responPostArtikel.code === 201) {
      alertSucces()
      window.location.reload()
    }
  }, [responPostArtikel])

  

  useEffect(() => {
    register("content", {
      required: "isi detail dulu",
    })
  }, [register])

  const handleEditorChange = (content) => {
    setValue("content", content)
  }


  // menampilkan nama user dari user_id yang didpt dari getInovation
  const namaUser = {}
  semuaUser.data?.forEach(user => {
    namaUser[user.id] = user.name.replace(/\b\w/g, match => match.toUpperCase())
  })

  // menampilkan foto user dari user_id yang didpt dari getInovation
  const fotoUser = {}
  semuaUser.data?.forEach(user => {
    fotoUser[user.id] = user.profile
  })

  // format tanggal
  const optionFormatDate = { year: 'numeric', month: 'long', day: 'numeric' }

  return (
    <>

      <div className='flex flex-col gap-6'>
        <div className='flex justify-between'>
          <h2 className='text-4xl font-semibold'>Inovasiku</h2>
          <Link to={'/ajukaninovasi'}>
            <button className='bg-green-900 h-10 rounded-lg py-4 px-3.5 text-white text-sm font-semibold flex items-center justify-center gap-3'>
              <img src="/add.svg" alt="" />
              <p>Ajukan Inovasi</p>
            </button>
          </Link>
        </div>

        <div>
          <Link to={'/dashboard/inovasiku'}>
            <button className='flex items-center gap-2 text-green-900'>
              <img src="/Back.svg" alt="" />
              Kembali
            </button>
          </Link>
        </div>
      </div>



      <div className='py-6 flex flex-col gap-10'>

        <div className='flex flex-col gap-8'>
          <div className='flex gap-4 border rounded-lg'>
            <div className='w-4 rounded bg-orange-600'></div>
            <h3 className='text-xl font-semibold p-1'>Bagaimana Informasi Terbaru Inovasi : {inovasiById.data?.inovation_name} ?</h3>
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
            <h3 className='text-xl font-semibold p-1'>Informasi Terbaru Inovasi : {inovasiById.data?.inovation_name}</h3>
          </div>

          <div className='flex flex-col gap-8'>
            {artikelByIdInovasi.data && artikelByIdInovasi.data.length > 0 ? (
              artikelByIdInovasi.data.map((data, idx) => (
                <KabarbaruDesc
                  key={data.id}
                  artikelKe={artikelByIdInovasi.data.length - idx}
                  name={namaUser[inovasiById.user_id]}
                  foto={fotoUser[inovasiById.user_id]}
                  title={'Judul kabar informasi terbaru'}
                  description={data.description}
                  created={new Date(data.createdAt).toLocaleDateString('id-ID', optionFormatDate)}
                />
              ))
            ) : (
              <p className='text-base italic'>Belum ada kabar terbaru</p>
            )}
          </div>

        </div>

      </div>
    </>
  )
}

export default DashoardInovasiku_update