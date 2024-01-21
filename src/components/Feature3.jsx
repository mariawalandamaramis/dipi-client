import React from 'react'

const Feature3 = ({ onButtonClick }) => {
    return (
        <>
            <div className='bg-white p-6 md:px-20 lg:px-40 lg:py-20'>
                <div className='text-center mb-10'>
                    <h1 className='text-3xl font-extrabold'>Mulai Berkontribusi Dari Sini</h1>
                </div>
                <div className='flex flex-col md:flex-row gap-5 w-3/4 mx-auto mb-6'>
                    <div className='py-5 px-7 bg-white rounded-lg border'>
                        <h2 className='text-5xl font-semibold mb-6'>01</h2>
                        <h2 className='text-xl font-extrabold mb-4'>Lengkapi Profil</h2>
                        <p className='text-sm font-normal'>Pastikan profile kamu lengkap agar proses pengajuanmu diproses lebih cepat. Kelengkapan profil akan meningkatkan kepercayaan pendukung.</p>
                    </div>
                    <div className='py-5 px-7 bg-white rounded-lg border'>
                        <h2 className='text-5xl font-semibold mb-6'>02</h2>
                        <h2 className='text-xl font-extrabold mb-4'>Ajukan Proposal Terbaik</h2>
                        <p className='text-sm font-normal'>Ceritakan ide inovasimu dengan baik agar pengajuanmu tepat disetujui. Pastikan ceritamu mudah dipahami sehingga banyak pendukung yang memilih inovasimu.</p>
                    </div>
                </div>
                <button onClick={onButtonClick} className='bg-green-900 h-10 rounded-lg py-4 px-3.5 text-white text-sm font-black flex items-center justify-center mx-auto gap-3'>
                    <p>Mulai Berinovasi</p>
                    <img src="Arrow-right.svg" alt="" />
                </button>
            </div>
        </>
    )
}

export default Feature3