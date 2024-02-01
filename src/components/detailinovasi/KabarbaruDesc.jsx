import React from "react";

const KabarbaruDesc = ({ artikelKe, name, description }) => {

  // sampel contoh text langsung dari editor text
  // const resultAPiTEXT = "<p>Indonesia merupakan negara tropis yang memiliki banyak pohon kelapa. Setiap tahun, Indonesia menghasilkan sekitar 31,4 juta ton buah kelapa. Batok kelapa merupakan limbah dari pengolahan buah kelapa yang biasanya dibuang begitu saja atau digunakan sebagai bahan bakar.</p><p><br></p><p>Batok kelapa memiliki sifat yang keras dan kuat. Sifat ini menjadikan batok kelapa sebagai bahan yang cocok untuk digunakan sebagai pelindung kepala. Selain itu, batok kelapa juga merupakan bahan yang ramah lingkungan dan dapat didaur ulang.</p><p><br></p><p>Berdasarkan fakta dan potensi batok kelapa, muncul ide untuk mengembangkan helm berbahan dasar batok kelapa. Helm ini diharapkan dapat menjadi solusi untuk permasalahan limbah batok kelapa sekaligus memberikan perlindungan kepala yang aman dan ramah lingkungan.</p>"
  const resultAPiTEXT = description

  return (
    <div className="flex flex-col gap-5 border border-green-900 rounded-lg py-10 px-8">
      <p className="text-2xl font-normal">{`Update #${artikelKe}`}</p>
      <h4 className="text-3xl font-bold">50 % Dana Dukungan Untuk Mulai Produksi</h4>
      <div className='flex items-center gap-2'>
        <div className='w-10 md:w-10 h-10 md:h-10'>
          <img className='w-full h-full rounded-full object-cover' src="/Hero.png" alt="" srcset="" />
        </div>
        <div>
          <p className='text-base font-semibold'>{name}</p>
          <p className="text-xs font-extralight">20 Januari 2040</p>
        </div>
      </div>
      <span className="w-full border"></span>

      {/* text dari text editor */}
      <div className="text-editor">
        <div dangerouslySetInnerHTML={{ __html: resultAPiTEXT }} />
      </div>
    </div>
  );
}


export default KabarbaruDesc

