import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        align: 'center',
      },
      title: {
        display: false,
        text: 'Chart.js Bar Chart',
      },
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Pemasukan',
        data: [10, 20, 90, 50, 10, 20, 90,],
        backgroundColor: '#60a5fa',
      },
      {
        label: 'Pengeluaran',
        data: [20, 40, 10, 40, 20, 90, 100],
        backgroundColor: '#4ade80',
      },
    ],
  };

  return (
    <>
      <div className='flex flex-col gap-6'>

        <h2 className='text-4xl font-semibold'>Dashboard</h2>

        {/* isi kontentennya : char bar -laporan - inof terbaru */}
        <div className='grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 h-[500px] mb-28'>

          {/* laporan keuangan */}
          <div className='p-6 flex flex-col gap-8 md:col-span-2'>
            <div className='flex gap-4 border rounded-lg'>
              <div className='w-4 rounded bg-orange-600'></div>
              <h3 className='text-xl font-semibold p-1'>Laporan Keungan</h3>
            </div>

            <div className='rounded-2xl bg-green-900 p-2 flex flex-col sm:flex-row gap-3'>
              <div className='rounded-2xl bg-white p-3 flex items-start gap-4 w-full'>
                <div className='w-6 h-6 rounded-full bg-blue-400'></div>
                <div>
                  <p className='text-sm font-semibold'>Pemasukan Dana Inovasi</p>
                  <p className='text-3xl font-semibold'>102K</p>
                </div>
              </div>

              <div className='rounded-2xl bg-white p-3 flex items-start gap-4 w-full'>
                <div className='w-6 h-6 rounded-full bg-green-400'></div>
                <div>
                  <p className='text-sm font-semibold'>Pengeluaran Dana Dukungan</p>
                  <p className='text-3xl font-semibold'>102K</p>
                </div>
              </div>
            </div>

          </div>

          {/* Informasi terbaru */}
          <div className='p-6 md:py-6 md:px-3 flex flex-col gap-8 row-span-2'>
            <div className='flex gap-4 border rounded-lg'>
              <div className='w-4 rounded bg-blue-600'></div>
              <h3 className='text-xl font-semibold p-1'>Informasi Terbaru</h3>
            </div>

            <div className='flex flex-col gap-3'>
              <div className='rounded-xl p-3 flex flex-col gap-3 bg-slate-100'>
                <div className='px-2 py-1 bg-green-200 w-fit rounded'>
                  <p className='text-xs font-bold text-green-800'>Inovasi yang didukung</p>
                </div>
                <div className='flex flex-col gap-1'>
                  <p className='text-base font-semibold'>Kursi Putar Untuk Masak Portable</p>
                  <p className='text-base font-normal'>Telah tercapai pendanaan dukungannya</p>
                </div>
              </div>

              <div className='rounded-xl p-3 flex flex-col gap-3 bg-slate-100'>
                <div className='px-2 py-1 bg-blue-200 w-fit rounded'>
                  <p className='text-xs font-bold text-blue-800'>Inovasi yang dibuat</p>
                </div>
                <div className='flex flex-col gap-1'>
                  <p className='text-base font-semibold'>Helm Batok Kelapa Ramah Lingkungan + Multifungsi</p>
                  <p className='text-base font-normal'>Telah tercapai pendanaan dukungannya</p>
                </div>
              </div>

              <div className='rounded-xl p-3 flex flex-col gap-3 bg-slate-100'>
                <div className='px-2 py-1 bg-green-200 w-fit rounded'>
                  <p className='text-xs font-bold text-green-800'>Inovasi yang didukung</p>
                </div>
                <div className='flex flex-col gap-1'>
                  <p className='text-base font-semibold'>Kursi Putar Untuk Masak Portable</p>
                  <p className='text-base font-normal'>Telah tercapai pendanaan dukungannya</p>
                </div>
              </div>

            </div>
          </div>


          {/* ChartBar : hua hua huaa */}
          <div className='p-6 flex flex-col gap-8 md:col-span-2 md:row-start-2'>
            <div className='flex gap-4 border rounded-lg'>
              <div className='w-4 rounded bg-orange-600'></div>
              <h3 className='text-xl font-semibold p-1'>Statistik Inovasi dan Dukungan</h3>
            </div>

            <div>
              <Bar options={options} data={data} />
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Dashboard