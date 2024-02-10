import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLokasiAPI, getUserByIdAPI, postImageAPI, putUpdateProfile } from "../../redux/slice/profile-slice";
import Cookies from "js-cookie";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const DashboardProfileItem = () => {
  const dispatch = useDispatch()
  const [pilihImg, setPilihImg] = useState('')
  const userById = useSelector(state => state.profile).userById.data
  const semuaLokasi = useSelector(state => state.profile).lokasi.data
  const message = useSelector(state => state.profile).message
  const [postToApi, setPostToAPi] = useState({})
  const userId = JSON.parse(Cookies.get('responLogin')).user.id

  useEffect(() => {
    dispatch(getUserByIdAPI(userId))
    dispatch(getLokasiAPI)
  }, [])

  const handleUploadImg = (e) => {
    const fileImg = e.target.files[0]
    setPostToAPi(prev => ({ ...prev, file: fileImg }));
    const reader = new FileReader()

    reader.onload = () => {
      setPilihImg(reader.result)
    }

    if (fileImg) {
      reader.readAsDataURL(fileImg)
    }
  }

  const propinsiMap = new Map();

  if (semuaLokasi) {
    Object.values(semuaLokasi).forEach(data => {
      if (!propinsiMap.has(data.province)) {
        propinsiMap.set(data.province, {
          province: data.province
        });
      }
    });
  }
  const propinsi = Array.from(propinsiMap.values());

  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedKota, setSelectedKota] = useState([]);

  const handleProvinceChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedProvince(selectedValue);
    const filteredKota = semuaLokasi?.filter(kota => kota.province === selectedValue);
    setSelectedKota(filteredKota);
  };

  const handleCityChange = (e) => {
    setPostToAPi(prev => ({ ...prev, location: e.target.value }));
  }

  const handleBioChange = (e) => {
    setPostToAPi(prev => ({ ...prev, bio: e.target.value }));
  }

  const handleAdressChange = (e) => {
    setPostToAPi(prev => ({ ...prev, address: e.target.value}))
  }

  const handlePhoneChange = (e) => {
    setPostToAPi(prev => ({ ...prev, phone: e.target.value}))
  }

  const alertSucces = () => {
    withReactContent(Swal).fire({
      position: "center",
      icon: "success",
      title: "Profil berhasil diperbarui",
      showConfirmButton: false,
      timer: 1500
    })
  }

  const alertFail = () => {
    withReactContent(Swal).fire({
      position: "center",
      icon: "warning",
      title: "Tidak ada data profil yang diperbarui, Ulangi Lagi",
      showConfirmButton: false,
      timer: 1500
    })
  }

  const handleSubmitProfile = () => {
    console.log(postToApi)
    if (Object.keys(postToApi).length === 5) {
      dispatch(putUpdateProfile(postToApi, userId))
    } else {
      alertFail()
    }
  }

  useEffect(() => {
    if (message === "Update user successfully") {
      alertSucces()
      window.location.reload();
    }
  }, [message])

  // cari nama propinsi berdasarkan id kota
  let namaPropinsi = {}
  let namaKota = {}
  semuaLokasi?.forEach(loc => {
    namaPropinsi[loc.id] = loc.province,
      namaKota[loc.id] = loc.name
  })

  return (
    <>
      <div>
        {!userById ? (<><h1>loading..</h1></>) : (

          <div className="flex flex-col gap-6">
            <h2 className='text-4xl font-semibold'>Profil</h2>

            <form>
              <div className="flex flex-col md:flex-row p-6 gap-10">
                {/* foto */}
                <div className="flex flex-col gap-5">
                  <div className="h-48 w-56 rounded-lg bg-slate-500">
                    <img className="rounded-lg w-full h-full object-cover" src={userById.profile || pilihImg || '/profile.svg'} alt="" />
                  </div>
                  <div className="flex gap-4">
                    <div>
                      <input type="file" id="upload-img" className="hidden" onChange={handleUploadImg} />
                      <label htmlFor="upload-img" className="bg-green-900 text-white font-semibold text-sm py-3 px-2 md:px-5 cursor-pointer rounded-lg flex gap-1" >
                        <img src="/add.svg" />
                        <p>Unggah foto baru</p>
                      </label>
                    </div>
                    <button type="button" onClick={() => setPilihImg('')} className="bg-green-900 flex items-center justify-center rounded-lg px-2 md:grow">
                      <img src="/trash.svg" alt="" />
                    </button>
                  </div>
                </div>

                {/* info profil */}
                <div className="flex flex-col gap-8 w-full">
                  <div className='flex gap-4 border rounded-lg'>
                    <div className='w-4 rounded bg-pink-400'></div>
                    <h3 className='text-xl font-semibold p-1'>Informasi Profil</h3>
                  </div>
                  <div className="border border-green-900 rounded-lg py-10 px-8 flex flex-col gap-7">
                    <div>
                      <label>Nama</label>
                      <input type="text" className="w-full rounded-md border-2 p-2 text-xs font-normal" placeholder={userById?.name} disabled />
                    </div>
                    <div>
                      <label>Email</label>
                      <input type="text" className="w-full rounded-md border-2 p-2 text-xs font-normal" placeholder={userById?.email} disabled />
                    </div>
                    <div>
                      <label>Password</label>
                      <input type="password" className="w-full rounded-md border-2 p-2 text-xs font-normal" value={userById?.password} disabled />
                    </div>
                    <div>
                      <label>Bio</label>
                      <textarea defaultValue={userById?.bio} onChange={handleBioChange} type="text" className="w-full rounded-md border-2 p-2 text-xs font-normal" />
                    </div>
                    <div>
                      <label>Lokasi</label>
                      <div className="flex gap-4">
                        <select
                          defaultValue={namaPropinsi[userById.location]}
                          value={selectedProvince}
                          placeholder='pilih'
                          onChange={handleProvinceChange}
                          type="text" className="w-full rounded-md border-2 p-2 text-xs font-normal">
                          <option value="" disabled selected hidden>
                            {userById.location ? (namaPropinsi[userById.location]) : ('Pilih propinsi')}
                          </option>
                          {propinsi?.length > 0 ? (
                            propinsi.map(propinsi => (
                              <option key={propinsi.id} value={propinsi.province}>{propinsi.province}</option>
                            ))
                          ) : ( // jika kena limit API
                            <option value="jawa timur">Jawa Timur</option>
                          )}
                        </select>

                        <select onChange={handleCityChange} type="text" className="w-full rounded-md border-2 p-2 text-xs font-normal">
                          <option value="" disabled selected hidden>
                            {userById.location ? (namaKota[userById.location]) : ('Pilih kota')}
                          </option>
                          {selectedKota?.length > 0 ? (
                            selectedKota.map(kota => (
                              <option key={kota.id} value={kota.id}>{kota.name}</option>
                            ))
                          ) : ( // jika kena limit API
                            <>
                              <option value="30">Surabaya</option>
                              <option value="31">Malang</option>
                            </>
                          )}
                        </select>

                      </div>
                    </div>
                    <div>
                      <div className="flex">
                        <label>Alamat lengkap</label>
                        <div className="relative flex flex-col group grow">
                          <svg className="w-5 h-5 ms-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" fill="#052e16" />
                          </svg>
                          <div className="absolute bottom-0 flex-col items-center mb-6 group-hover:flex hidden">
                            <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-green-900 rounded-lg w-full">Pengisian pada data ini bersifat wajib.</span>
                            <div className="w-3 h-3 -mt-2 mr-40 rotate-45 bg-green-900"></div>
                          </div>
                        </div>
                      </div>
                      <input type="text" onChange={handleAdressChange} defaultValue={userById?.address} className="w-full rounded-md border-2 p-2 text-xs font-normal" />
                      <p className="text-[11px] italic font-light">alamat tidak akan di tampilkan di halaman utama, hanya akan digunakan untuk melengkapi data jika memilih paket pendukung hebat</p>
                    </div>
                    <div>
                      <div className="flex">
                        <label>Nomor Telepon</label>
                        <div className="relative flex flex-col group grow">
                          <svg className="w-5 h-5 ms-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" fill="#052e16" />
                          </svg>
                          <div className="absolute bottom-0 flex-col items-center mb-6 group-hover:flex hidden">
                            <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-green-900 rounded-lg w-full">Pengisian pada data ini bersifat wajib.</span>
                            <div className="w-3 h-3 -mt-2 mr-40 rotate-45 bg-green-900"></div>
                          </div>
                        </div>
                      </div>
                      <input type="number" onChange={handlePhoneChange} defaultValue={userById?.phone} className="w-full rounded-md border-2 p-2 text-xs font-normal" />
                      <p className="text-[11px] italic font-light">nomor telepon tidak akan di tampilkan di halaman utama, hanya akan digunakan untuk melengkapi data jika memilih paket pendukung hebat</p>
                    </div>
                    <button
                      type="button"
                      // disabled={Object.keys(postToApi).length === 3 ? 'false' : 'true'}
                      onClick={handleSubmitProfile}
                      // className={`${Object.keys(postToApi).length === 3 ? 'bg-green-900' : 'bg-slate-500'} text-white font-semibold text-sm py-3 px-5 w-max rounded-lg`}
                      className="bg-green-900 text-white font-semibold text-sm py-3 px-5 w-max rounded-lg"
                    >Edit</button>
                  </div>
                </div>

              </div>
            </form>

          </div >

        )}
      </div>
    </>


  )
}

export default DashboardProfileItem