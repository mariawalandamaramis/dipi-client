import * as React from "react";
function ArticleDetail(){
    return 
    (
    <div className="items-center bg-white flex flex-col justify-center px-16 py-12 rounded-lg max-md:px-5">
      <div className="flex w-full max-w-[1106px] flex-col items-stretch my-8 max-md:max-w-full">
        <div className="text-emerald-900 text-4xl font-extrabold leading-10 max-md:max-w-full">
          Mengenal Lebih Dalam Inovasi yang Dihadirkan
        </div>
        <div className="text-emerald-900 text-lg leading-7 mt-6 max-md:max-w-full">
          Pelajari inovasi ini secara mendalam untuk mendukungnya
        </div>
        <div className="tab items-stretch shadow-sm flex justify-between gap-5 mt-16 px-8 border-b-2 border-b-emerald-900 border-solid max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-md:px-5">
          <div className="onClick={()=>action(1)}className={`${state===1 ? 'tab active-tab':'tab'}`} text-white text-center text-2xl font-semibold leading-10 whitespace-nowrap justify-center items-stretch bg-emerald-900 px-2 py-6">
            Detail
          </div>
          <div className="text-emerald-900 text-2xl font-semibold leading-10 my-auto">
            Kabar Terbaru
          </div>
          <div className="text-emerald-900 text-2xl font-semibold leading-10 self-center grow whitespace-nowrap my-auto">
            Tanya Jawab
          </div>
        </div>
        <div className="items-start flex flex-col mt-16 px-8 max-md:max-w-full max-md:mt-10 max-md:px-5">
          <div className="self-stretch text-emerald-900 text-2xl font-extrabold leading-7 max-md:max-w-full">
            Kenapa Harus Batok Kelapa ?
          </div>
          <div className="self-stretch text-emerald-900 text-lg leading-7 mt-10 max-md:max-w-full">
            Indonesia merupakan negara tropis yang memiliki banyak pohon kelapa.
            Setiap tahun, Indonesia menghasilkan sekitar 31,4 juta ton buah
            kelapa. Batok kelapa merupakan limbah dari pengolahan buah kelapa
            yang biasanya dibuang begitu saja atau digunakan sebagai bahan
            bakar.
            <br />
            <br />
            Batok kelapa memiliki sifat yang keras dan kuat. Sifat ini
            menjadikan batok kelapa sebagai bahan yang cocok untuk digunakan
            sebagai pelindung kepala. Selain itu, batok kelapa juga merupakan
            bahan yang ramah lingkungan dan dapat didaur ulang.
            <br />
            <br />
            Berdasarkan fakta dan potensi batok kelapa, muncul ide untuk
            mengembangkan helm berbahan dasar batok kelapa. Helm ini diharapkan
            dapat menjadi solusi untuk permasalahan limbah batok kelapa
            sekaligus memberikan perlindungan kepala yang aman dan ramah
            lingkungan.
          </div>
          <div className="self-stretch text-emerald-900 text-2xl font-extrabold leading-7 mt-10 max-md:max-w-full">
            Apa Keunggulan Helm Batok Kelapa ?
          </div>
          <div className="self-stretch text-emerald-900 text-lg leading-7 mt-10 max-md:max-w-full">
            Helm berbahan dasar batok kelapa memiliki beberapa keunggulan
            dibandingkan helm berbahan dasar lainnya, yaitu:
            <br />
            Ramah lingkungan. Batok kelapa merupakan bahan yang dapat didaur
            ulang. Dengan menggunakan helm berbahan dasar batok kelapa, kita
            dapat mengurangi jumlah limbah yang dihasilkan.
            <br />
            Kuat dan tahan lama. Batok kelapa memiliki sifat yang keras dan
            kuat. Sifat ini menjadikan helm berbahan dasar batok kelapa lebih
            tahan lama dan tidak mudah rusak.
            <br />
            Multifungsi. Batok kelapa memiliki sifat yang ringan dan kuat. Sifat
            ini menjadikan helm berbahan dasar batok kelapa dapat digunakan
            untuk berbagai aktivitas, seperti berkendara, berolahraga, dan
            aktivitas lainnya.
          </div>
          <div className="self-stretch text-emerald-900 text-2xl font-extrabold leading-7 mt-10 max-md:max-w-full">
            Ukuran Helm Batok Kelapa
          </div>
          <div className="bg-gray-100 flex w-[536px] max-w-full flex-col justify-center items-center mt-10 px-16 py-12 self-start max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fce8c9f351c6a0be6aa74252bb261d7fdab55140fc3f9232f020563a77c484de?"
              className="aspect-square object-contain object-center w-[66px] justify-center items-center overflow-hidden max-w-full mt-36 mb-28 max-md:my-10"
            />
          </div>
          <div className="self-stretch text-emerald-900 text-lg leading-7 mt-10 max-md:max-w-full">
            Helm ini memiliki tiga ukuran, yaitu S, M, dan L. Helm berukuran S
            memiliki diameter 53 cm, helm berukuran M memiliki diameter 55 cm,
            dan helm berukuran L memiliki diameter 57 cm.
          </div>
          <div className="text-emerald-900 text-2xl font-extrabold leading-7 self-stretch mt-10 max-md:max-w-full">
            Lama produksi helm batok kelapa
          </div>
          <div className="bg-gray-100 flex w-[536px] max-w-full flex-col justify-center items-center mt-10 px-16 py-12 self-start max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9327623bd0c831ee720194c7d22538a88c51a868b2b2977fb2ee17917875e082?"
              className="aspect-square object-contain object-center w-[66px] justify-center items-center overflow-hidden max-w-full mt-36 mb-28 max-md:my-10"
            />
          </div>
          <div className="self-stretch text-emerald-900 text-lg leading-7 mt-10 max-md:max-w-full">
            Proses produksi helm berbahan dasar batok kelapa membutuhkan waktu
            sekitar 1 minggu untuk setiap kali produksi. Dalam 1 kali produksi,
            dapat dihasilkan 50 helm. Proses produksi ini dikerjakan oleh 2
            orang pekerja seni.
            <br />
            <br />
            Proses produksi helm berbahan dasar batok kelapa terdiri dari
            beberapa tahap, yaitu:
            <br />
            Pemilihan batok kelapa
            <br />
            Tahap awal adalah pemilihan batok kelapa yang berkualitas. Batok
            kelapa yang berkualitas memiliki tekstur yang keras dan rata.
            <br />
            Pemotongan batok kelapa
            <br />
            Setelah dipilih, batok kelapa kemudian dipotong sesuai dengan ukuran
            yang diinginkan.
            <br />
            Pembentukan batok kelapa
            <br />
            Batok kelapa yang sudah dipotong kemudian dibentuk sedemikian rupa
            menjadi helm. Proses pembentukan ini membutuhkan ketelitian dan
            keterampilan khusus dari pekerja seni.
            <br />
            Pengecatan
            <br />
            Setelah dibentuk, helm kemudian dicat dengan warna yang diinginkan.
            <br />
            Pemasangan tali pengikat
            <br />
            Terakhir, tali pengikat dipasang pada helm.
            <br />
            <br />
            Proses produksi helm berbahan dasar batok kelapa tidak bisa
            digantikan dengan mesin karena banyak detail helm yang membutuhkan
            ketelitian dari manusia. Misalnya, proses pembentukan helm
            membutuhkan ketelitian untuk menghasilkan bentuk helm yang sempurna.
            Selain itu, proses pengecatan juga membutuhkan ketelitian untuk
            menghasilkan warna helm yang sesuai dengan keinginan konsumen.
            <br />
            <br />
            Dengan proses produksi yang masih manual, produksi helm berbahan
            dasar batok kelapa memiliki kapasitas yang terbatas. Dalam 1 kali
            produksi, hanya bisa dihasilkan 50 helm.
          </div>
          <div className="text-emerald-900 text-2xl font-extrabold leading-7 self-stretch mt-10 max-md:max-w-full">
            Mendukung helm batok kelapa = menghargai para pekerja seni{" "}
          </div>
          <div className="self-stretch text-emerald-900 text-lg leading-7 mt-10 max-md:max-w-full">
            Kami percaya bahwa pekerja seni adalah nafas dari sebuah inovasi.
            Helm batok kelapa menjadi salah satu inovasi pekerja seni memberikan
            sebuah tren baru yang unik dan ramah lingkungan. Dukunganmu
            memberikan semangat untuk para pekerja seni. Terimakasih.
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleDetail


