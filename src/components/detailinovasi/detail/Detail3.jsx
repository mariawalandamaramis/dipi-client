import * as React from "react";

const Detail3 = () =>{
  return (
    <span className="flex flex-col px-5 items-start">
      <div className="self-stretch text-emerald-900 text-2xl font-extrabold leading-7 w-full max-md:max-w-full">
        Ukuran Helm Batok Kelapa
      </div>
      <div className="bg-gray-100 flex w-[536px] shrink-0 max-w-full h-[452px] flex-col mt-9" />
      <div className="self-stretch text-emerald-900 text-lg leading-7 w-full mt-10 max-md:max-w-full">
        Helm ini memiliki tiga ukuran, yaitu S, M, dan L. Helm berukuran S
        memiliki diameter 53 cm, helm berukuran M memiliki diameter 55 cm, dan
        helm berukuran L memiliki diameter 57 cm.
      </div>
    </span>
  );
}

export default Detail3
