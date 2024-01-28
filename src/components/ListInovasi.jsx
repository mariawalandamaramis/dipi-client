import React, { useEffect, useState } from "react";
const ListInovasi = () => {
  const [dummyKategori] = useState([
    {
      id: 1,
      nama: 'Perempuan Kreatif'
    },
    {
      id: 2,
      nama: 'UMKM Cantik'
    },
    {
      id: 3,
      nama: 'Kreasi Budaya'
    },
    {
      id: 4,
      nama: 'Pasar Traditional'
    }
  ]);


  const [dumyWilayah] = useState([
    {
      id: 1,
      idkategori: 1,
      nama: 'Jakarta Pusat'
    },
    {
      id: 2,
      idkategori: 1,
      nama: 'Jakarta Timur'
    },
    {
      id: 3,
      idkategori: 1,
      nama: 'Jakarta Barat'
    },
    {
      id: 4,
      idkategori: 1,
      nama: 'Jakarta Selatan'
    },
    {
      id: 5,
      idkategori: 2,
      nama: 'Depok'
    },
    {
      id: 6,
      idkategori: 2,
      nama: 'Cibinong'
    },
    {
      id: 7,
      idkategori: 2,
      nama: 'SukaBumi'
    },
    {
      id: 8,
      idkategori: 3,
      nama: 'Sleman'
    },
    {
      id: 9,
      idkategori: 3,
      nama: 'Magelang'
    },
    {
      id: 9,
      idkategori: 2,
      nama: 'Cibubur'
    },
    {
      id: 3,
      idkategori: 3,
      nama: 'Boyolali'
    },
  ]);

  const [dummyInovasi] = useState([
    {
      id: 1,
      nama: 'Kerajinan Tas Anyaman',
      kategori: {
        id: 2,
        nama: 'UMKM cantik'
      },
      wilayah: {
        id: 1,
        nama: 'Jakarta Pusat'
      }
    },
    {
      id: 2,
      nama: 'Kerajinan Tas Anyaman',
      kategori: {
        id: 3,
        nama: 'Kreasi Budaya'
      },
      wilayah: {
        id: 3,
        nama: 'Boyolali'
      }

    },
    {
      id: 3,
      nama: 'Kerajinan Tas Anyaman',
      kategori: {
        id: 2,
        nama: 'UMKM cantik'
      },
      wilayah: {
        id: 7,
        nama: 'Cibubur'
      }
    },
    {
      id: 4,
      nama: 'Kerajinan Tas Anyaman',
      kategori: {
        id: 4,
        nama: 'Pasar Traditional'
      },
      wilayah: {
        id: 1,
        nama: 'Jakarta Pusat'
      }
    },
    {
      id: 5,
      nama: 'Kerajinan Tas Anyaman',
      kategori: {
        id: 3,
        nama: 'Kreasi Budaya'
      },
      wilayah: {
        id: 1,
        nama: 'Jakarta Pusat'
      }
    },
    {
      id: 6,
      nama: 'Kerajinan Tas Anyaman',
      kategori: {
        id: 3,
        nama: 'Kreasi Budaya'
      },
      wilayah: {
        id: 1,
        nama: 'Jakarta Pusat'
      }
    },
    {
      id: 7,
      nama: 'Kerajinan Tas Anyaman',
      kategori: {
        id: 1,
        nama: 'Perempuan Kreatif'
      },
      wilayah: {
        id: 1,
        nama: 'Jakarta Pusat'
      }
    },
    {
      id: 8,
      nama: 'Kerajinan Tas Anyaman',
      kategori: {
        id: 3,
        nama: 'Kreasi Budaya'
      },
      wilayah: {
        id: 1,
        nama: 'Jakarta Pusat'
      }
    },
    {
      id: 9,
      nama: 'Sepatu Lukis',
      kategori: {
        id: 1,
        nama: 'Perempuan Kreatif'
      },
      wilayah: {
        id: 1,
        nama: 'Jakarta Pusat'
      }
    },
    {
      id: 10,
      nama: 'Sanggar Tari Putri ',
      kategori: {
        id: 3,
        nama: 'Kreasi Budaya'
      },
      wilayah: {
        id: 9,
        nama: 'sleman'
      }
    },
  ]);

  const [SelectKategori, setSelectKategori] = useState('');
  const [selectWilayah, setSelectWilayah] = useState('');
  const [showWilayah, setShowWilayah] = useState([]);
  const [showproject, setShowproject] = useState([]);


  useEffect(() => {
    console.log(SelectKategori)
    const filterWilayah = dumyWilayah.filter(d => `${d.idkategori}` === `${SelectKategori}`);
    setShowWilayah(filterWilayah);

    if (SelectKategori && selectWilayah) {
      const filterData = dummyInovasi.filter(
        (d) =>
          `${d.kategori.id}` === SelectKategori &&
          `${d.wilayah.id}` === selectWilayah
      );
      setShowproject(filterData);
    } else if (SelectKategori && !selectWilayah) {
      const filterData = dummyInovasi.filter(
        (d) =>
          `${d.kategori.id}` === SelectKategori
      );
      setShowproject(filterData);
    } else {
      setShowproject(dummyInovasi);
    }
  }, [SelectKategori, dumyWilayah, selectWilayah, dummyInovasi]);

  const changekategori = (e) => {
    const value = e.target.value
    setSelectKategori(value);
  };

  const changeWilayah = (e) => {
    const value = e.target.value
    setSelectWilayah(value);
  };


  return (


    <div className="items-center bg-emerald-900 flex flex-col justify-center px-16 py-10 max-md:px-5">
      <span className="flex w-full max-w-[1106px] flex-col items-stretch max-md:max-w-full">
        <div className="justify-between items-stretch flex w-full gap-5 max-md:max-w-full max-md:flex-wrap">
          <span className="items-center flex justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
            <div className="text-white text-base font-semibold leading-6 grow whitespace-nowrap my-auto">
              Filter
            </div>
            <span className="justify-between items-stretch border shadow-sm bg-white self-stretch flex gap-5 px-3 py-3.5 rounded-md border-solid border-orange-400">
            <div className="filter">
              <select onChange={changekategori} value={SelectKategori}>
                <option value="">Pilih Kategori</option>
                {dummyKategori.map((d, i) => {
                  return (<option value={d.id} key={i}>
                    {d.nama}
                  </option>
                  );
                })}
              </select>
            </div>
            </span> 

            <span className="justify-between items-stretch border shadow-sm bg-white self-stretch flex gap-5 px-3 py-3.5 rounded-md border-solid border-orange-400">
             <div className="filter">
                <select onChange={changeWilayah} value={selectWilayah}>
                  <option value="">Pilih Wilayah</option>
                  {showWilayah.map((d, i) => {
                    return (<option value={d.id} key={i}>
                      {d.nama}
                    </option>
                    );
                  })}
                </select>
              </div>
            </span>
          </span>
          <span className="items-center flex justify-between gap-5">
            <div className="text-white text-base font-semibold leading-6 grow whitespace-nowrap my-auto">
              <p>Urutan</p>
            </div>
            <div className="filter">
              <select onChange={changeWilayah} value={selectWilayah} className="justify-between items-stretch border shadow-sm bg-white self-stretch flex gap-5 px-3 py-3.5 rounded-md border-solid border-orange-400">
                <option value="">Pilih Wilayah</option>
                {showWilayah.map((d, i) => {
                  return (<option value={d.id} key={i}>
                    {d.nama}
                  </option>
                  );
                })}
              </select>
            </div>
          </span>
        </div>
        <div className="text-white text-base font-semibold leading-6 mt-10 max-md:max-w-full">
          Hasil : menampilakan 100 Inovasi
        </div>
      </span>
    </div>
  );
}

export default ListInovasi