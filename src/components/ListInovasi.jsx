import React, {Component} from 'react';

function ListInovasi() {
  return (

    
    <div className="items-center bg-emerald-900 flex flex-col justify-center px-16 py-10 max-md:px-5">
      <span className="flex w-full max-w-[1106px] flex-col items-stretch max-md:max-w-full">
        <div className="justify-between items-stretch flex w-full gap-5 max-md:max-w-full max-md:flex-wrap">
          <span className="items-center flex justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
            <div className="text-white text-base font-semibold leading-6 grow whitespace-nowrap my-auto">
              Filter
            </div>
            <span className="justify-between items-stretch border shadow-sm bg-white self-stretch flex gap-5 px-3 py-3.5 rounded-md border-solid border-orange-400">
              <input className="text-orange-400 text-xs leading-5" placeholder='Kategori' />
            </span>
            <span className="justify-between items-stretch border shadow-sm bg-white self-stretch flex gap-5 px-3 py-3.5 rounded-md border-solid border-orange-400">
              <input className="text-orange-400 text-xs leading-5" placeholder='Lokasi' />
            </span>
          </span>
          <span className="items-center flex justify-between gap-5">
            <div className="text-white text-base font-semibold leading-6 grow whitespace-nowrap my-auto">
              <p>Urutan</p>
            </div>
            <select className="bg-gray-50 border border-gray-300 text-orange-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Inovasi Terbaru</option>
                <option>Kerajinan Rumahan</option>
                <option>Kerajinan Sanggar</option>
                <option>Anak Jalanan</option>
                <option>Batik Khas Solo</option>
            </select>

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