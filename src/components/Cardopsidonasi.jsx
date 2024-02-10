import React from 'react'

const Cardopsidonasi = ({ sovenir, nominal, onClick, description, inovation_name, kota, propinsi, estimasipengiriman }) => {

    // asumsikan jika user memberikan descripsi dukungan dengan tanda titik
    const splitDesc = description.split(/(?<=\.)\s*(?=[A-Za-z])/);

    return (
        <>
            <div className='border rounded-lg flex flex-col gap-2 p-2'>
                <div className='py-8 px-6 flex flex-col gap-4'>
                    <p className='text-lg font-semibold'>Sovenir #{sovenir}</p>
                    <p className='text-3xl font-semibold'>{nominal}</p>
                    <button onClick={onClick} className='bg-green-900 rounded py-2 px-3 text-white text-sm font-semibold'>
                        Lanjutkan Pembayaran</button>
                </div>

                <div className='pb-5 px-6 flex flex-col gap-8'>
                    <div>
                        <p className='text-base font-semibold mb-2'>Apa yang didapatkan ?</p>
                        {splitDesc.map((des, idx) => (
                            <div key={idx} className='flex gap-1'>
                                <img src="/check_ok.svg" alt="" />
                                <p className='text-base font-normal'>{des}</p>
                            </div>
                        ))}
                    </div>
                    <div>
                        <p className='text-base font-semibold mb-2'>Cara pengiriman ?</p>
                        <p className='text-sm font-normal'>Produk dari inovasi {inovation_name} dikirm dari Kota {kota}, {propinsi}. Estimasi mulai pengiriman {estimasipengiriman} (seminggu setelah kampanye ditutup) </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cardopsidonasi