import React, { useEffect, useState } from 'react';
import Cardinovasi from './Cardinovasi';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { getKategoriAPI, getLokasiAPI, getSemuaInovasiAPI, getUsersAPI } from '../redux/slice/inovasi-slice';

function ListInovasi() {
  const dispatch = useDispatch()
  const semuaInovasi = useSelector((state) => state.inovasi).inovasi
  const semuaKategori = useSelector((state) => state.inovasi).kategori
  const semuaUser = useSelector((state => state.inovasi)).users
  const semuaLokasi = useSelector((state => state.inovasi)).lokasi
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedLocation, setSelectedLocation] = useState(null)
  const [selectSort, setSelectSort] = useState(null)


  const CategoryOptions = semuaKategori.data?.map((data) => ({
    value: data.id,
    label: data.category_name
  }))

  const kotaYangAdaById = semuaInovasi?.map(city => city.city_id)
  const kotaYangAda = kotaYangAdaById.map(cityId => {
    const city = semuaLokasi.data?.find(c => parseInt(c.city_id) === cityId)
    // console.log(city)
    return {
      city_id: cityId,
      city_name: city ? city.city_name : ''
    }
  })

  const LocationOptions = kotaYangAda.map((data) => ({
    value: data.city_id,
    label: data.city_name
  }))

  const resultFilterSelected = () => {
    let filterData = [...semuaInovasi];

    if (selectSort && selectSort.value === 'terbaru') {
      filterData = filterData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (selectSort && selectSort.value === 'terlama') {
      filterData = filterData.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }

    filterData = selectedCategory ? filterData.filter((data) => {
      return data.category_id === selectedCategory.value;
    }) : filterData;

    filterData = selectedLocation ? filterData.filter((data) => {
      return data.city_id === selectedLocation.value;
    }) : filterData;

    return filterData;
  };

  const optionSort = [
    { value: 'terbaru', label: 'terbaru' },
    { value: 'terlama', label: 'terlama' },
  ]

  // menampilkan nama user dari user_id yang didpt dari getInovation
  const namaUser = {}
  semuaUser.data?.forEach(user => {
    namaUser[user.id] = user.name.replace(/\b\w/g, match => match.toUpperCase())
  })

  // menampilkan kategori dari category_id yang didpt dari getInovation
  const namaKategori = {}
  semuaKategori.data?.forEach(kategori => {
    namaKategori[kategori.id] = kategori.category_name
  })

  // hitung sisa hari
  const sisaHari = (duration, createdAt) => {
    const dateNow = new Date()
    const dateStart = new Date(createdAt)

    const jmlHariBerjalan = dateNow.getTime() - dateStart.getTime()
    const jmlHariBerjalan_convert = Math.ceil(jmlHariBerjalan / (1000 * 3600 * 24))
    const sisaHari = duration - jmlHariBerjalan_convert

    return sisaHari
  }

  // hitung persentase target pendanaan
  const persenTarget = (amount, donate) => {
    if (amount <= 0) { return 0 }
    const persentase = Math.round((donate / amount) * 100)
    return persentase
  }

  // menampilkan nama kota dari city_id yang didpt dari getInovation
  const namaKota = {}
  semuaLokasi.data?.forEach(user => {
    namaKota[user.city_id] = user.city_name
  })

  // menampilkan nama propinsi dari province_id yang didpt dari getInovation
  const namaPropinsi = {}
  semuaLokasi.data?.forEach(user => {
    namaPropinsi[user.province_id] = user.province
  })


  useEffect(() => {
    dispatch(getSemuaInovasiAPI)
    dispatch(getKategoriAPI)
    dispatch(getUsersAPI)
    dispatch(getLokasiAPI)
  }, [])

  return (
    <>
      <div className='bg-green-900 flex flex-col gap-10 p-6 md:px-20 lg:px-40 lg:py-10'>

        <div className='flex justify-between sm:flex-row flex-col'>

          <div className=' flex gap-6 items-center mb-6 sm:mb-0'>
            <p className='text-base text-white font-semibold'>Filter</p>
            <Select className="rounded-md text-xs w-full md:w-[140px] xl:w-[240px]"
              options={CategoryOptions}
              isClearable
              placeholder='Kategori'
              onChange={(selectOption) => setSelectedCategory(selectOption)}
              value={selectedCategory}
            />
            <Select className="rounded-md text-xs w-full md:w-[140px] xl:w-[240px]"
              options={LocationOptions}
              isClearable
              placeholder='Lokasi'
              onChange={(selectOption) => setSelectedLocation(selectOption)}
              value={selectedLocation}
            />
          </div>

          <div className='flex gap-6 items-center'>
            <p className='text-base text-white font-semibold'>Urutan</p>
            <Select className="rounded-md text-xs w-full"
              isClearable
              placeholder='Inovasi terbaru'
              options={optionSort}
              onChange={(e) => setSelectSort(e)}
            />
          </div>

        </div>

        <p className='text-base text-white font-semibold'> Hasil : menampilkan {resultFilterSelected().length} Inovasi</p>

      </div>

      <div className='bg-white p-6 md:px-20 lg:px-40 lg:py-10 flex flex-col gap-10'>

        <h3 className='text-2xl font-semibold'>Daftar Inovasi dari Perempuan Hebat</h3>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {resultFilterSelected().map((data) => (
            <Cardinovasi
              key={data.id}
              addLocation={true}
              image={data.image}
              catagory_id={namaKategori[data.category_id]}
              inovation_name={data.inovation_name.replace(/\b\w/g, match => match.toUpperCase())}
              id={data.id}
              user_name={namaUser[data.user_id]}
              time={sisaHari(data.duration, data.createdAt)}
              persenTarget={persenTarget(data.amount, data.total_support)}
              kota={namaKota[data.city_id]}
              propinsi={namaPropinsi[data.province_id]}
            />
          ))}
        </div>

      </div>
    </>
  );
}


export default ListInovasi