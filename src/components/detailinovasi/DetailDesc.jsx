import React from "react";

const DetailDesc = ({ description }) => {

  // sampel contoh text langsung dari editor text
  // const resultAPiTEXT = "<h2><strong>Kenapa Harus Batok Kelapa ?</strong></h2><p>Indonesia merupakan negara tropis yang memiliki banyak pohon kelapa. Setiap tahun, Indonesia menghasilkan sekitar 31,4 juta ton buah kelapa. Batok kelapa merupakan limbah dari pengolahan buah kelapa yang biasanya dibuang begitu saja atau digunakan sebagai bahan bakar.</p><p><br></p><p>Batok kelapa memiliki sifat yang keras dan kuat. Sifat ini menjadikan batok kelapa sebagai bahan yang cocok untuk digunakan sebagai pelindung kepala. Selain itu, batok kelapa juga merupakan bahan yang ramah lingkungan dan dapat didaur ulang.</p><p><br></p><p>Berdasarkan fakta dan potensi batok kelapa, muncul ide untuk mengembangkan helm berbahan dasar batok kelapa. Helm ini diharapkan dapat menjadi solusi untuk permasalahan limbah batok kelapa sekaligus memberikan perlindungan kepala yang aman dan ramah lingkungan.</p>"
  const resultAPiTEXT = description

  return (
    <div className="px-8 text-editor">
      <div dangerouslySetInnerHTML={{ __html: resultAPiTEXT }} />
    </div>
  );
}

export default DetailDesc


