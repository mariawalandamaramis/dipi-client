import React, { useState } from 'react'
import Formstep1 from './Formstep1'
import Formstep2 from './Formstep2'
import Formstep3 from './Formstep3'
import { useDispatch, useSelector } from 'react-redux'
import { getValueFormPengajuan } from '../../redux/slice/inovasi-slice'

const Forminovasi = () => {
  const FormArray = [1, 2, 3]
  const [FormNo, setFormNo] = useState(FormArray[0])

  const dispatch = useDispatch()
  const nextStep = () => {
    if (FormNo === FormArray.length) {
      // Handle form submission logic here

      dispatch(getValueFormPengajuan(stateLocalMOM))
      alert(JSON.stringify(stateLocalMOM, null, 2));
    } else {
      setFormNo(FormNo + 1);
    }
  };

  const prevStep = () => {
    setFormNo(FormNo - 1)
  }

  // const inovasiState = useSelector((state) => state.inovasi)
  // console.log(inovasiState)

  const [stateLocalMOM, setStateLocalMOM] = useState({
    judul_inovasi: '',
    deskripsi_singkat: '',
    lokasi_kota: '',
    lokasi_propinsi: '',
    alamat: '',
    kategori_inovasi: '',
    foto_pendukung: '',
    video_pendukung: '',
    jml_pengajuan_dana: '',
    durasi_kampanye: '',
    detail_inovasi: '',
    dana_suvenir1: '',
    bentuk_suvenir1: '',
    dana_suvenir2: '',
    bentuk_suvenir2: '',
    dana_suvenir3: '',
    bentuk_suvenir3: '',
  })

  const handleInput = (e) => {
    setStateLocalMOM({ ...stateLocalMOM, [e.target.name] : e.target.value})
  }
  // const handleInput3 = (editor, name) => {
  //   const content = editor?.getText?.();
  //   setStateLocalMOM((prev) => ({ ...prev, [name]: content }));
  // };

  //console.log(stateLocalMOM)

  console.log(useSelector((state) => state.inovasi))

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
              {FormNo === 1 && <Formstep1 stateLocalMOM={stateLocalMOM} handleInput={handleInput} />}
              {FormNo === 2 && <Formstep2 stateLocalMOM={stateLocalMOM} handleInput={handleInput} />}
              {FormNo === 3 && <Formstep3 stateLocalMOM={stateLocalMOM} handleInput={handleInput} />}
            </div>
          </div>

          <div className='flex justify-between'>
            <button onClick={prevStep} className={`${FormNo > 1 ? '' : 'invisible'} bg-green-900 h-10 rounded-lg py-4 px-3.5 text-white text-sm font-semibold flex items-center justify-center gap-3`}>
              <img className='rotate-180' src="Arrow-right.svg" alt="" />
              <p>Kembali</p>
            </button>
            <button onClick={nextStep} className='bg-green-900 h-10 rounded-lg py-4 px-3.5 text-white text-sm font-semibold flex items-center justify-center gap-3'>
              <p>{FormNo === FormArray.length ? 'Submit' : 'Selanjutnya'}</p>
              <img src="Arrow-right.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Forminovasi