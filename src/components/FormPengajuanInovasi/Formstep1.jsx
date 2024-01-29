import React, { useEffect, useState } from 'react'

const Formstep1 = ({ register, errors, setValue, getValues, errInputFile }) => {

  const handleImageChange = (e) => {
    const files = e.target.files;
    setValue('image', files);
  };

  const handleVideoChange = (e) => {
    const files = e.target.files;
    setValue('video', files);
  };

  const [imgSrc, setImgSrc] = useState(null);
  const [vidSrc, setVidSrc] = useState(null);

  useEffect(() => {
    const imgValues = getValues('image');

    if (imgValues && imgValues.length > 0) {
      const imgValue = imgValues[0];
      const imgSrc = URL.createObjectURL(imgValue);
      setImgSrc(imgSrc);
    }

    const vidValues = getValues('video');

    if (vidValues && vidValues.length > 0) {
      const vidValue = vidValues[0];
      const vidSrc = URL.createObjectURL(vidValue);
      setVidSrc(vidSrc);
    }
  }, [getValues]);


  return (
    <>
      <div>
        <label className='text-lg font-medium' htmlFor="">Judul Inovasi</label>
        <div>
          <input {...register('inovation_name', {
            required: ' Judul Inovasi harus diisi ! ',
          })}
            className='w-full rounded-md border-2 p-2 text-xs font-normal' type="text" placeholder='Masukan judul inovasimu disini' />
          <div className={`text-red-500 text-xs font-semibold leading-5 mt-2 flex flex-row max-md:max-w-full`}>
            {errors.inovation_name && <p>{errors.inovation_name.message}</p>}
          </div>
        </div>
      </div>
      <div>
        <label className='text-lg font-medium' htmlFor="">Deskripsi Singkat</label>
        <div>
          <textarea {...register('description_short', {
            required: ' Deskripsi singkat harus diisi ! ',
          })}
            className='w-full rounded-md border-2 p-2 text-xs font-normal' type="text" placeholder='Masukan deskripsi singkat tentang inovasimu disini' />
          <div className={`text-red-500 text-xs font-semibold leading-5 mt-2 flex flex-row max-md:max-w-full`}>
            {errors.description_short && <p>{errors.description_short.message}</p>}
          </div>
        </div>
      </div>
      <div>
        <label className='text-lg font-medium' htmlFor="">Lokasi</label>
        <div className='flex flex-col sm:flex-row justify-between gap-2'>
          <div className='w-full'>
            <input {...register('city', {
              required: ' Lokasi harus diisi ! '
            })}
              className='w-full rounded-md border-2 p-2 text-xs font-normal' type="text" placeholder='Kota' />
            <div className={`text-red-500 text-xs font-semibold leading-5 mt-2 flex flex-row max-md:max-w-full`}>
              {errors.city && <p>{errors.city.message}</p>}
            </div>
          </div>
          <div className='w-full'>
            <input {...register('province', {
              required: ' Lokasi harus diisi ! '
            })}
              className='w-full rounded-md border-2 p-2 text-xs font-normal' type="text" placeholder='Propinsi' />
            <div className={`text-red-500 text-xs font-semibold leading-5 mt-2 flex flex-row max-md:max-w-full`}>
              {errors.province && <p>{errors.province.message}</p>}
            </div>
          </div>
        </div>
      </div>
      <div>
        <label className='text-lg font-medium' htmlFor="">Alamat Lengkap</label>
        <div>
          <input {...register('address', {
            required: ' alamat harus diisi '
          })}
            className='w-full rounded-md border-2 p-2 text-xs font-normal' type="text" placeholder='Masukan alamat lengkap' />
          <div className={`text-red-500 text-xs font-semibold leading-5 mt-2 flex flex-row max-md:max-w-full`}>
            {errors.address && <p>{errors.address.message}</p>}
          </div>
        </div>
      </div>
      <div>
        <label className='text-lg font-medium' htmlFor="">Kategori Inovasi</label>
        <div>
          <select {...register('category', {
            required: ' Pilih salah satu kategori ! '
          })}
            className="rounded-md border-2 p-2 text-xs w-full">
            <option value="">Pilih katergori Inovasi</option>
            <option value="kerajinan" >Kerajinan</option>
            <option value="makanan & minuman" >Makanan & Minuman</option>
            <option value="acara" >Acara</option>
            <option value="digital" >Digital</option>
          </select>
          <div className={`text-red-500 text-xs font-semibold leading-5 mt-2 flex flex-row max-md:max-w-full`}>
            {errors.category && <p>{errors.category.message}</p>}
          </div>
        </div>
      </div>
      <div>
        <label className='text-lg font-medium' htmlFor="">Foto Pendukung</label>
        <div>
          <input 
          required={true}
          // {...register('image', {
          //   required: 'Gambar pendukung harus diisi!',
          // })}
            onChange={handleImageChange}
            className='w-full rounded-md border-2 text-xs font-normal file:border-none file:p-2 file:bg-gray-200' type="file" multiple />
          <div className={`text-red-500 text-xs font-semibold leading-5 mt-2 flex flex-row max-md:max-w-full`}>
            {/* {errors.image && <p>{errors.image.message}</p>} */}
            {errInputFile.image && <p>{errInputFile.image}</p>}
          </div>
        </div>
        <img src={imgSrc} alt="" srcset="" />
      </div>
      <div>
        <label className='text-lg font-medium' htmlFor="">Video Pendukung (Opsional) </label>
        <div>
          <input 
          required={true}
          // {...register('video', {
          //   required: 'Video pendukung harus diisi!',
          // })}
            onChange={handleVideoChange}
            className='w-full rounded-md border-2 text-xs font-normal file:border-none file:p-2 file:bg-gray-200' type="file" multiple />
          <div className={`text-red-500 text-xs font-semibold leading-5 mt-2 flex flex-row max-md:max-w-full`}>
            {/* {errors.video && <p>{errors.video.message}</p>} */}
            {errInputFile.video && <p>{errInputFile.video}</p>}
          </div>
        </div>
        {vidSrc && <video src={vidSrc} autoPlay></video>}
      </div>
      <div>
        <label className='text-lg font-medium' htmlFor="">Jumlah Pengajuan Dana Inovasi </label>
        <div className="flex">
          <span className="inline-flex items-center px-3 bg-gray-200 border border-e-0 rounded-s-md">
            <p className='text-xs font-normal'>Rp</p>
          </span>
          <input {...register('amount', {
            required: ' Jumlah pengajuan dana harus diisi ! ',
            valueAsNumber: true,
          })}
            className="rounded-e-md border-2 p-2 text-xs w-full" type="number" placeholder="Masukan nominal dana untuk mewujudkan inovasimu" />
        </div>
        <div className={`text-red-500 text-xs font-semibold leading-5 mt-2 flex flex-row max-md:max-w-full`}>
          {errors.amount && <p>{errors.amount.message}</p>}
        </div>
      </div>
      <div>
        <label className='text-lg font-medium' htmlFor="">Durasi Kampanye Inovasi</label>
        <div>
          <select {...register('duration', {
            required: ' Pilih salah satu durasi kamapanye ! ',
            valueAsNumber: true,
          })}
            className="rounded-md border-2 p-2 text-xs w-full">
            <option value="">Pilih jumlah hari yang dibutuhkan untuk mengumpulkan dana</option>
            <option value={60} >60</option>
            <option value={100} >100</option>
          </select>
          <div className={`text-red-500 text-xs font-semibold leading-5 mt-2 flex flex-row max-md:max-w-full`}>
            {errors.duration && <p>{errors.duration.message}</p>}
          </div>
        </div>
      </div>
    </>
  )
}

export default Formstep1