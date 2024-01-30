import React, { useEffect, useState } from 'react';
import Cardinovasi from './Cardinovasi';
import Select from 'react-select';

// contoh API, nanti diganti
// https://api.escuelajs.co/api/v1/products
// https://api.escuelajs.co/api/v1/categories

function ListInovasi() {
  const [fakeData, setFakeData] = useState([])
  const [fakeCategory, setFakeCategory] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectSort, setSelectSort] = useState(null)

  console.log(fakeData.sort((a, b) => new Date(b.price) - new Date(a.price))) // termahal --- contoh saja, nanti di hapus
  console.log(fakeData.sort((a, b) => new Date(b.price) - new Date(a.price))) // termurah --- contoh saja, nanti di hapus


  const CategoryOptions = fakeCategory.map((data) => ({
    value: data.name,
    label: data.name
  }))

  const resultFilterSelected = () => {
    let filterData = [...fakeData];

    if (selectSort && selectSort.value === 'terbaru') {
      filterData = filterData.sort((a, b) => new Date(b.price) - new Date(a.price));
    } else if (selectSort && selectSort.value === 'terlama') {
      filterData = filterData.sort((a, b) => new Date(a.price) - new Date(b.price));
    }

    filterData = selectedCategory ? filterData.filter((data) => {
      return data.category.name === selectedCategory.value;
    }) : filterData;

    return filterData;
  };

  const optionSort = [
    { value: 'terbaru', label: 'terbaru' },
    { value: 'terlama', label: 'terlama' },
  ]

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((respone) => respone.json())
      .then((data) => setFakeData(data));

    fetch('https://api.escuelajs.co/api/v1/categories')
      .then((respon) => respon.json())
      .then((data) => setFakeCategory(data))
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
            <select className="rounded-md border-2 p-2 text-xs w-full md:w-[140px] xl:w-[240px]">
              <option value="">Lokasi (kota)</option>
              <option value="Palopo" >Palopo</option>
              <option value="Sumedang" >Sumedang</option>
            </select>
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
              image={data.images[0]}
              category={data.category.name}
              title={data.title}
              time={data.price}
            />
          ))}
        </div>

      </div>
    </>
  );
}


export default ListInovasi