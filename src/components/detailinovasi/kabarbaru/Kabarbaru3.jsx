import * as React from "react";

const Kabarbaru3 = () =>{
  return (
    
    <div className="flex flex-col items-stretch">
      <span className="items-start border flex w-full flex-col px-8 py-10 rounded-lg border-solid border-emerald-900 max-md:max-w-full max-md:px-5">
        <div className="self-stretch text-emerald-900 text-2xl leading-7 max-md:max-w-full">
          Update #1
        </div>
        <div className="self-stretch text-emerald-900 text-3xl font-bold leading-7 mt-5 max-md:max-w-full">
          50 % Dana Dukungan Untuk Mulai Produksi
        </div>
        <div className="items-stretch flex gap-2 mt-5 pr-12 self-start max-md:pr-5">
          <img
            loading="lazy"
            srcSet="..."
            className="aspect-square object-contain object-center w-10 justify-center items-center overflow-hidden shrink-0 max-w-full"
          />
          <span className="justify-center items-stretch self-center flex grow basis-[0%] flex-col my-auto">
            <div className="text-emerald-900 text-base font-semibold leading-6 whitespace-nowrap">
              Tralala Lulu
            </div>
            <div className="text-emerald-900 text-center text-xs font-extralight leading-5 whitespace-nowrap mt-2">
              5 Desember 2023
            </div>
          </span>
        </div>
        <div className="bg-emerald-900 self-stretch shrink-0 h-px mt-5 max-md:max-w-full" />
        <div className="self-stretch text-emerald-900 text-lg leading-7 mt-5 max-md:max-w-full">
          Pencarian dukungan untuk inovasi helm batok kelapa yang diluncurkan
          pada tanggal 29 November 2023 terus berlangsung. Hingga tanggal 5
          Desember 2023, penggalangan dana tersebut telah mencapai 50% dari
          target yang ditetapkan, yaitu sebesar Rp5 juta.
          <br />
          <br />
          Peningkatan jumlah donatur yang signifikan terjadi pada tanggal 2
          Desember 2023, yaitu sebesar 20%. Hal ini tidak terlepas dari dukungan
          dari berbagai pihak, termasuk pemerintah, media massa, dan masyarakat
          umum.
          <br />
          <br />
          Dana yang terkumpul hingga saat ini telah digunakan untuk membiayai
          berbagai kegiatan, seperti pengembangan prototipe helm, uji coba, dan
          perizinan. Dengan tercapainya 50% target, tim pengembang helm batok
          kelapa optimis bahwa inovasi ini dapat segera diproduksi secara
          massal.
        </div>
      </span>
      <span className="text-white text-center text-2xl font-semibold leading-7 max-w-[882px] justify-center items-center bg-emerald-900 w-full mt-16 px-16 py-10 rounded-lg max-md:max-w-full max-md:mt-10 max-md:px-5">
        Pencarian dukungan untuk inovasi <br />
        dimulai pada tanggal 29 November 2023.
      </span>
    </div>
  );
}

export default Kabarbaru3