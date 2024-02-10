import React, { useEffect, useState } from 'react'
import Formstep1 from './Formstep1'
import Formstep2 from './Formstep2'
import Formstep3 from './Formstep3'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import { postAjukanInovasiCompleted, postImageAPI, postVideoAPI } from '../../redux/slice/ajukaninovasi-slice'
import { useNavigate } from 'react-router-dom'


const Forminovasi = () => {
  const FormArray = [1, 2, 3]
  const [FormNo, setFormNo] = useState(FormArray[0])
  const [errInputFile, setErrInputFile] = useState({
    image: '',
    video: ''
  })
  const [canNext, setCanNext] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [dataSubmitForm, setDataSubmitForm] = useState({})

  const navigate = useNavigate()


  const dispatch = useDispatch()
  const ajukanInovasi = useSelector((state) => state.ajukanInovasi)
  const messageRespon = ajukanInovasi.messageRespon

  // console.log(messageRespon)

  useEffect(() => {
    if(messageRespon === "Inovasi BERHASIL di upload") {
      alertSucces()
      setTimeout(() => {
        navigate('/dashboard/inovasiku')
      }, 1500)
    }
  }, [messageRespon])

  const alertSucces = () => {
    withReactContent(Swal).fire({
      position: "center",
      icon: "success",
      title: "Pengajuan inovasi berhasil !",
      showConfirmButton: false,
      timer: 1500
    })
  }

  const alertAsk = () => {
    withReactContent(Swal).fire({
      title: "Apakah data yang diajukan sudah lengkap ?",
      text: "Pastikan data inovasi sudah sesuai harapan",
      icon: "question",
      confirmButtonText: "Ya",
      showCancelButton: false
    }).then((result) => {
      if (result.isConfirmed) {
        withReactContent(Swal).fire({
          position: "center",
          icon: "info",
          title: "Pengajuan data terhambat karena proses upload video dan foto masih dalam proses, setelah pesan ini hilang coba klik submit sekali lagi",
          showConfirmButton: false,
          timer: 60000,
          didOpen: () => {
            Swal.showLoading();
          }
        })
      }
    })
  }


  const nextStep = async () => {
    setFormSubmitted(false);
    let isValid = false
    switch (FormNo) {
      case 1:
        isValid = await trigger(['inovation_name', 'description_short', 'city', 'province', 'category', 'image', 'video', 'amount', 'duration'])
        break;
      case 2:
        isValid = await trigger(['description'])
        break;
      case 3:
        isValid = await trigger(['nominal1', 'suvenir1', 'nominal2', 'suvenir2', 'nominal3', 'suvenir3'])
    }


    if (FormNo === FormArray.length) {

      // cek apakah valid ? jika valid alert // post API
      if (isValid) {

        if (Object.keys(dataSubmitForm).length < 16) {
          alertAsk()
          //alertAskingToSubmitAgain()
        }

        if (Object.keys(dataSubmitForm).length === 16) {
          dispatch(postAjukanInovasiCompleted(dataSubmitForm))
        }

      }

    } else {

      if (errInputFile.image === '' && errInputFile.video === '') {
        setCanNext(true)
      } else {
        setCanNext(false)
      }

      if (isValid && canNext) {
        setFormNo(FormNo + 1);
      }

      handleSubmit(onSubmit)()
    }
  };

  const prevStep = () => {
    setFormNo(FormNo - 1)
  }

  const headerText = (head, desc) => {
    return (
      <>
        <div className='mb-8'>
          <h2 className='text-2xl font-bold'>{head}</h2>
          <p className='text-lg font-normal'>{desc}</p>
        </div>
        {
          FormNo === 3 && (
            <div className='mb-8 flex bg-green-950 p-2 gap-2 rounded-lg items-start'>
              <img src="/Lamp.svg" alt="" srcset="" />
              <p className='text-sm italic text-white'>Pemberian souvenir bertujuan untuk menarik minat pendukung dan memberikan kesan spesial kepada pendukung. Tips : berikan souvenir yang bisa dikenang dan bermanfaat.</p>
            </div>
          )
        }
      </>
    )
  }

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    getValues,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {

    setFormSubmitted(true);

    // console.log(data)
    setDataSubmitForm(data)

    if (!data.hasOwnProperty('image')) {
      setErrInputFile(prevStep => ({ ...prevStep, image: 'Image pendukung harus diisi!' }))
    } else {
      setErrInputFile(prevStep => ({ ...prevStep, image: '' }))
      dispatch(postImageAPI(data.image))
    }

    if (!data.hasOwnProperty('video')) {
      setErrInputFile(prevStep => ({ ...prevStep, video: 'Video pendukung harus diisi!' }))
    } else {
      setErrInputFile(prevStep => ({ ...prevStep, video: '' }))
      dispatch(postVideoAPI(data.video))
    }

  }


  return (
    <>
      <div className='bg-white py-20 px-10 sm:px-10 md:px-20 lg:py-20 lg:px-60'>
        <div>
          <div className='text-center mb-10'>
            <h1 className='text-3xl font-bold'>Ajukan Inovasi Terbaikmu</h1>
            <p className='text-lg font-normal md:px-28'>Silakan isi formulir di bawah ini untuk pengajuan inovasmu. Berikan detail sebanyak yang diperlukan.</p>
          </div>

          <div className='border-2 rounded-2xl p-5 md:p-10 mb-5 '>
            {/* stepper */}
            <div className='flex justify-center items-center px-5 sm:px-10 pb-12'>
              {
                FormArray.map((v, i) =>
                  <>
                    <div className={`w-[30px] h-[30px] sm:w-[35px] sm:h-[35px]  my-3 text-white rounded-full flex justify-center items-center
                    ${FormNo - 1 === i || FormNo - 1 === i + 1 || FormNo === FormArray.length ? 'bg-green-900' : 'bg-slate-200'}`}>
                      {v}
                    </div>
                    {
                      i !== FormArray.length - 1 &&
                      <div className={`w-1/5 sm:w-2/5 h-[4px] ${FormNo === i + 2 || FormNo === FormArray.length ? 'bg-green-900' : 'bg-slate-200'}`}>
                      </div>
                    }
                  </>
                )
              }
            </div>

            <div className='border-t pt-12'>
              {FormNo === 1 && headerText("Apa inovasimu ?", "Buatlah inovasimu mudah dipahami oleh para pendukung")}
              {FormNo === 2 && headerText("Ceritakan Lebih Detail Inovasimu ?", "Buatlah penjelasan secara detail dari pengajuan inovasimu")}
              {FormNo === 3 && headerText("Buat Pendukungmu Agar Tetap Terhubung", "Berikan suvernir sesuai dengan dukungan yang diberikan")}

              <div>
                <form id='formstepper' onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
                  {/* step2nya disini */}
                  {FormNo === 1 && <Formstep1 register={register} watch={watch} errors={errors} setValue={setValue} getValues={getValues} errInputFile={errInputFile} />}
                  {FormNo === 2 && <Formstep2 register={register} watch={watch} setValue={setValue} errors={errors} formSubmitted={formSubmitted} />}
                  {FormNo === 3 && <Formstep3 register={register} errors={errors} formSubmitted={formSubmitted} />}
                </form>
              </div>

            </div>
          </div>

          <div className='flex justify-between'>
            <button onClick={prevStep} className={`${FormNo > 1 ? '' : 'invisible'} bg-green-900 h-10 rounded-lg py-4 px-3.5 text-white text-sm font-semibold flex items-center justify-center gap-3`}>
              <img className='rotate-180' src="/Arrow-right.svg" alt="" />
              <p>Kembali</p>
            </button>
            <button form='formstepper' type='submit' onClick={nextStep} className={`bg-green-900 h-10 rounded-lg py-4 px-3.5 text-white text-sm font-semibold flex items-center justify-center gap-3`}>
              <p>{FormNo === FormArray.length ? 'Submit' : 'Selanjutnya'}</p>
              <img src="/Arrow-right.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Forminovasi