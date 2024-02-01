import React, { useEffect } from 'react'
import Cardinovasi from './Cardinovasi'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSemuaInovasiAPI } from '../redux/slice/inovasi-slice'

const Spillcardinovasi = () => {
  const dispatch = useDispatch()
  const semuaInovasi = useSelector((state) => state.inovasi).inovasi

  // ambil acak inovasi sebanyak 6 object
  const ambilAcak = (array, n) => {
    // set array yg akan diacak, jgn gunakan array utama
    const acakArray = array.slice()
    // acak array dgn metode fisher yates
    for (let i = acakArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [acakArray[i], acakArray[j]] = [acakArray[j], acakArray[i]]
    }
    return acakArray.slice(0, n)
  }
  
  const beberapaInovasi = ambilAcak(semuaInovasi, 6)

  useEffect(() => {
    dispatch(getSemuaInovasiAPI)
  }, [])

  return (
    <>
      <div className='bg-white p-6 md:px-20 lg:px-40 lg:py-20 flex flex-col gap-14 items-center'>
        <div className='text-center'>
          <h1 className='text-3xl font-extrabold mb-2'>Daftar Inovasi dari Perempuan Hebat</h1>
          <p className='text-base font-normal'>Mulailah berkontribusi dengan mendukung inovasi pilihanmu</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
          {beberapaInovasi.map((data) => (
            <Cardinovasi
              key={data.id}
              addLocation={true}
              image={data.images[0]}
              category={data.category.name}
              title={data.title}
              time={data.price}
              id={data.id}
            />
          ))}
        </div>
        <Link to={'/inovasi'}>
          <button className='bg-orange-600 h-10 w-fit rounded-lg py-4 px-3.5 text-white text-sm font-black flex items-center justify-center gap-3'>
            <p>Cari Inovasi Lainnya</p>
            <img src="Arrow-right.svg" alt="" />
          </button>
        </Link>
      </div>
    </>
  )
}

export default Spillcardinovasi