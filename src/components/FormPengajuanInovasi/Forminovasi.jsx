import React, { useEffect, useState } from 'react'
import Formstep1 from './Formstep1'
import Formstep2 from './Formstep2'
import Formstep3 from './Formstep3'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
// import { getDataSubmit, postImageAPI, postInovasiAPI, postPaketDonasiAPI, postVideoAPI } from '../../redux/slice/ajukaninovasi-slice'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import { getDataSubmit, postAjukanInovasiCompleted, postImageAPI, postVideoAPI } from '../../redux/slice/ajukaninovasi-slice'
import { Await } from 'react-router-dom'
import { uploadImageAPI } from './uploaderAPI'


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
  const [dataFormImage, setDataFormImage] = useState({})
  const [dataFormVideo, setDataFormVideo] = useState({})
  const [dataInovation, setDataInovation] = useState({
    inovation_name: '',
    description: '',
    duration: 0,
    city_id: 1,
    province_id: 1,
    amount: 0,
    category_id: 1,
    image: '',
    video: ''
  })
  const [dataSuvenir1, setDataSuvenir1] = useState({
    inovation_id: 0,
    package_name: 1,
    nominal: 0,
    description: ''
  })
  const [dataSuvenir2, setDataSuvenir2] = useState({
    inovation_id: 0,
    package_name: 2,
    nominal: 0,
    description: ''
  })
  const [dataSuvenir3, setDataSuvenir3] = useState({
    inovation_id: 0,
    package_name: 3,
    nominal: 0,
    description: ''
  })

  const [imgHasilPromise, setImgHasilPromise] = useState('')
  const [vidHasilPromise, setVidHasilPromise] = useState('')
  const [isSubmit, setIsSubmit] = useState(false)

  useEffect(() => {
    console.log(imgHasilPromise);
    console.log(vidHasilPromise);
  }, [isSubmit]);
  


  const dispatch = useDispatch()
  const ajukanInovasi = useSelector((state) => state.ajukanInovasi)
  // console.log(ajukanInovasi.dataImage)
  // console.log(ajukanInovasi.dataVideo)

  const alertMessageTimer = () => {
    withReactContent(Swal).fire({
      title: "Pengajuan inovasi sedang di proses",
      html: "Proses ini membutuhkan waktu <b></b> untuk melakukan proses pengajuan",
      imageUrl: "/Hero.png",
      imageWidth: 400,
      imageHeight: 200,
      timer: 1500,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
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

        alert('Ajukan Inovasi ?')

        // setIsSubmit(false)

        // const imgformData = new FormData();
        // imgformData.append("file", dataFormImage, dataFormImage.name)
        // const imgAPIURL = "http://localhost:3000/inovation/uploadImage"
        // let resultIMG = []

        // const vidformData = new FormData();
        // vidformData.append("video", dataFormVideo, dataFormVideo.name)
        // const vidAPIURL = "http://localhost:3000/inovation/uploadvideo"
        // let resultVID = []

        // Promise.all([
        //   fetch(imgAPIURL, {
        //     method: 'POST',
        //     body: imgformData
        //   })
        //     .then(postResponImg => {
        //       console.log(postResponImg)
        //       if (postResponImg.ok) {
        //         return postResponImg.json()
        //       }
        //     })
        //     .then(resultImg => {
        //       console.log(resultImg)
        //       setImgHasilPromise(resultImg)
        //       resultIMG.push(resultImg)
        //     })

        //   ,
        //   fetch(vidAPIURL, {
        //     method: 'POST',
        //     body: vidformData
        //   })
        //     .then(postResponVid => {
        //       console.log(postResponVid)
        //       if (postResponVid.ok) {
        //         return postResponVid.json()
        //       }
        //     })
        //     .then(resultVid => {
        //       console.log(resultVid)
        //       setVidHasilPromise(resultVid.data)
        //       resultVID.push(resultVid)
        //       setIsSubmit(true)
        //     })
        // ]).then((res) => console.log({ res }))

        // // console.log(resultIMG)
        // // console.log(resultVID)

        // console.log(imgHasilPromise)
        // console.log(vidHasilPromise)




        const dataWithoutImageVideo = { ...dataSubmitForm };
        delete dataWithoutImageVideo.image;
        delete dataWithoutImageVideo.video;

        // const APIURL_IMG = 'http://localhost:3000/inovation/uploadImage';
        // const APIURL_VID = 'http://localhost:3000/inovation/uploadvideo'
        // const APIURL_INOVASI = 'http://localhost:3000/inovation'
        // const APIURL_PKTDONASI = 'http://localhost:3000/package'



        // Promise.all([promiseIMG, promiseVid]).then(function(value) {
        //   console.log(value)
        //   console.log(responImg)
        //   console.log(responVid)
        // })


        // // -----

        // const imgPost = new FormData()
        // imgPost.append('file', dataFormImage, dataFormImage.name)
        // const responImg = []

        // const vidPost = new FormData()
        // vidPost.append('video', dataFormVideo, dataFormVideo.name)
        // const responVid = []


        // const promiseIMG = axios.post(APIURL_IMG, imgPost)
        //   .then(resultImg => {
        //     responImg.push(resultImg)
        //   })
        //   .catch(error => {
        //     console.log(error)
        //   });

        // const promiseVid = axios.post(APIURL_VID, vidPost)
        //   .then(resultVid => {
        //     responVid.push(resultVid)
        //   })
        //   .catch(error => {
        //     console.log(error)
        //   });

        // // --------

        // console.log(responImg)
        // console.log(responVid)


        // // memastikan ini jalan dulu, berhasil!!!!! yeeeee
        // Promise.all([
        //   dispatch(postImageAPI(dataFormImage)),
        //   dispatch(postVideoAPI(dataFormVideo))
        // ]).then(() => {

        //   const imgRedux = useSelector((state) => state.ajukanInovasi).dataImage

        //   if (Object.keys(imgRedux).length !== 0) {
        //     dispatch(postAjukanInovasiCompleted(dataWithoutImageVideo))
        //   }
        // })

        //  dispatch(postAjukanInovasiCompleted(dataWithoutImageVideo))


        //  delay 30 detik, 
        // await new Promise(resolve => setTimeout(resolve, 3000));


        dispatch(postAjukanInovasiCompleted(dataWithoutImageVideo))


        console.log(ajukanInovasi)




        // dispatch(postImageAPI(dataFormImage))
        // dispatch(postVideoAPI(dataFormVideo))

        // console.log(ajukanInovasi.dataImage)
        // console.log(ajukanInovasi.dataVideo)

        // pastiin ini jalan dulu, baru buka consol.log


        // ini bikin erro, krn dianggap promis, 
        // console.log(useSelector((state) => state.ajukanInovasi).dataImage)
        // console.log(useSelector((state) => state.ajukanInovasi).dataVideo)

        // console.log(dataWithoutImageVideo)
        // dispatch(getDataSubmit(dataWithoutImageVideo)) // gagal
        // krn di dldm ini ada fileLIst, redux ga nerima  non-serializable items
        // ga bisa panggil hook redux krn ga di dalam function

        // const abc = () => {
        //   fetch().then
        // }

        // abc()

        // // Error: Invalid hook call. Hooks can only be called inside of the body of a function component
        // const postDataSubmit = () => {
        //   dispatch(getDataSubmit(dataWithoutImageVideo))
        // };

        // postDataSubmit();


        // dispacth langsung ke function API
        // dispatch(postAjukanInovasiCompleted(dataWithoutImageVideo))

        // console.log(useSelector((state) => state.ajukanInovasi).dataSubmit)


        // //  alertMessageTimer()

        // // console.log(dataFormImage)

        // dispatch(postImageAPI(dataFormImage))
        // dispatch(postVideoAPI(dataFormVideo))
        // // await Promise.all([
        // //   dispatch(postImageAPI(dataFormImage)), 
        // //   dispatch(postVideoAPI(dataFormVideo))
        // // ]);

        // // console.log(ajukanInovasi.dataImage)
        // // console.log(ajukanInovasi.dataVideo)


        // // ambil url image video di properti data taruh di data Inovasi yg akan di post
        // setDataInovation((prevStep) => ({
        //   ...prevStep,
        //   image: ajukanInovasi.dataImage.data,
        //   video: ajukanInovasi.dataVideo.data
        // }))

        // // post inovasi
        // dispatch(postInovasiAPI(dataInovation))

        // // console.log(ajukanInovasi.dataInovasi.data.id)

        // if (Object.keys(ajukanInovasi.dataInovasi).length !== 0) {
        //   setDataSuvenir1((prevStep) => ({ ...prevStep, inovation_id: ajukanInovasi.dataInovasi.data.id }))
        //   setDataSuvenir2((prevStep) => ({ ...prevStep, inovation_id: ajukanInovasi.dataInovasi.data.id }))
        //   setDataSuvenir3((prevStep) => ({ ...prevStep, inovation_id: ajukanInovasi.dataInovasi.data.id }))

        //   console.log('sampai disini')
        // }

        // // // ambil id inovasi untuk post paket donasi
        // // setDataSuvenir1((prevStep) => ({ ...prevStep, inovation_id: ajukanInovasi.dataInovasi.data.id }))
        // // setDataSuvenir2((prevStep) => ({ ...prevStep, inovation_id: ajukanInovasi.dataInovasi.data.id }))
        // // setDataSuvenir3((prevStep) => ({ ...prevStep, inovation_id: ajukanInovasi.dataInovasi.data.id }))

        // // post paket donasi
        // // dispatch(postPaketDonasiAPI(dataSuvenir1))
        // // dispatch(postPaketDonasiAPI(dataSuvenir2))
        // // dispatch(postPaketDonasiAPI(dataSuvenir3))


        // if (dataSuvenir1.id !== '') {
        //   dispatch(postPaketDonasiAPI(dataSuvenir1))
        //   dispatch(postPaketDonasiAPI(dataSuvenir2))
        //   dispatch(postPaketDonasiAPI(dataSuvenir3))

        //   console.log('ckckckc')
        // }



        // // console.log(ajukanInovasi.dataPaketDonasi)



        // // // await Promise.all([
        // // //   dispatch(postPaketDonasiAPI(dataSuvenir1)),
        // // //   dispatch(postPaketDonasiAPI(dataSuvenir2)),
        // // //   dispatch(postPaketDonasiAPI(dataSuvenir3)),
        // // // ]);

        // console.log(ajukanInovasi)

        alert('inovasi sudah diajukan')

        // dispatch(postImageAPI(dataFormImage))
        //   .then(() => dispatch(postVideoAPI(dataFormVideo)))
        //   .then(() => {
        //     console.log(ajukanInovasi.dataImage);
        //     console.log(ajukanInovasi.dataVideo);

        //     setDataInovation((prevStep) => ({
        //       ...prevStep,
        //       image: ajukanInovasi.dataImage.data,
        //       video: ajukanInovasi.dataVideo.data,
        //     }));

        //     if (ajukanInovasi.dataImage.data !== '') {
        //       return dispatch(postInovasiAPI(dataInovation));
        //     }
        //   })
        //   .then((inovasiData) => {
        //     if (inovasiData) {
        //       console.log(inovasiData);
        //       setDataSuvenir1((prevStep) => ({ ...prevStep, inovation_id: inovasiData.data.id }));
        //       setDataSuvenir2((prevStep) => ({ ...prevStep, inovation_id: inovasiData.data.id }));
        //       setDataSuvenir3((prevStep) => ({ ...prevStep, inovation_id: inovasiData.data.id }));

        //       return Promise.all([
        //         dispatch(postPaketDonasiAPI(dataSuvenir1)),
        //         dispatch(postPaketDonasiAPI(dataSuvenir2)),
        //         dispatch(postPaketDonasiAPI(dataSuvenir3)),
        //       ]);
        //     }
        //   })
        //   .then((donasiData) => {
        //     if (donasiData) {
        //       console.log(donasiData.dataPaketDonasi);
        //     }
        //   })
        //   .catch((error) => {
        //     alert('ulangi lagi/ klik submit lagi');
        //   });

        // try {
        //   // post image video
        //   dispatch(postImageAPI(dataFormImage))
        //   dispatch(postVideoAPI(dataFormVideo))

        //   console.log(ajukanInovasi.dataImage)
        //   console.log(ajukanInovasi.dataVideo)


        //   // ambil url image video di properti data taruh di data Inovasi yg akan di post
        //   setDataInovation((prevStep) => ({
        //     ...prevStep,
        //     image: ajukanInovasi.dataImage.data,
        //     video: ajukanInovasi.dataVideo.data
        //   }))

        //   // post inovasi - jika url foto dan video tersedia
        //   if (ajukanInovasi.dataImage.data !== '') {
        //     dispatch(postInovasiAPI(dataInovation))
        //   }

        //   console.log(ajukanInovasi.dataInovasi)

        //   // ambil id inovasi untuk post paket donasi
        //   setDataSuvenir1((prevStep) => ({ ...prevStep, inovation_id: ajukanInovasi.dataInovasi.data.id }))
        //   setDataSuvenir2((prevStep) => ({ ...prevStep, inovation_id: ajukanInovasi.dataInovasi.data.id }))
        //   setDataSuvenir3((prevStep) => ({ ...prevStep, inovation_id: ajukanInovasi.dataInovasi.data.id }))

        //   // post paket donasi
        //   dispatch(postPaketDonasiAPI(dataSuvenir1))
        //   dispatch(postPaketDonasiAPI(dataSuvenir2))
        //   dispatch(postPaketDonasiAPI(dataSuvenir3))

        //   console.log(ajukanInovasi.dataPaketDonasi)

        // } catch (error) {
        //   alert('ulangi lagi/ klik submit lagi')
        // }

        // alert('inovasi sudah diajukan')

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

      if (FormNo === 3) {
        handleSubmit(onSubmit)
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
              <p className='text-sm italic text-white'>Pemberian suvenir bertujuan untuk menarik minat pendukung dan memberikan kesan spesial kepada pendukung. Tips : berikan souvenir yang bisa dikenang dan bermanfaat.</p>
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
      setDataFormImage(data.image[0])
      dispatch(postImageAPI(dataFormImage))
    }

    if (!data.hasOwnProperty('video')) {
      setErrInputFile(prevStep => ({ ...prevStep, video: 'Video pendukung harus diisi!' }))
    } else {
      setErrInputFile(prevStep => ({ ...prevStep, video: '' }))
      setDataFormVideo(data.video[0])
      dispatch(postVideoAPI(dataFormVideo))
    }

    // dispatch(getDataSubmit(data))

    setDataInovation(prevData => ({
      ...prevData,
      inovation_name: data.inovation_name,
      description: data.description,
      duration: data.duration,
      city_id: 1,
      province_id: 1,
      amount: data.amount,
      category_id: 1,
    }));

    setDataSuvenir1(prevData => ({
      ...prevData,
      nominal: data.nominal1,
      description: data.suvenir1
    }))

    setDataSuvenir2(prevData => ({
      ...prevData,
      nominal: data.nominal2,
      description: data.suvenir2
    }))

    setDataSuvenir3(prevData => ({
      ...prevData,
      nominal: data.nominal3,
      description: data.suvenir3
    }))

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