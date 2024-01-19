import * as React from "react";

function DetailHeader() {
  return (
    <div className="justify-center items-center bg-white flex flex-col px-16 py-12 max-md:px-5">
      <div className="w-full max-w-[1120px] my-8 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[54%] max-md:w-full max-md:ml-0">
            <div className="bg-gray-100 flex flex-col justify-center items-center w-full my-auto px-16 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/85e9cb56404f9ac6706c1a92e4b75a59212763556c07ae2e7dac98cbae8658a3?apiKey=1cf36b611af3481fb487e0d4bacc56f5&"
                className="aspect-square object-contain object-center w-[66px] justify-center items-center overflow-hidden max-w-full mt-36 mb-28 max-md:my-10"
              />
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[46%] ml-5 max-md:w-full max-md:ml-0">
            <span className="items-start flex grow flex-col max-md:max-w-full max-md:mt-10">
              <div className="text-emerald-900 text-base leading-6 underline self-stretch max-md:max-w-full">
                Kerajinan
              </div>
              <div className="self-stretch text-emerald-900 text-4xl font-extrabold leading-10 mt-8 max-md:max-w-full">
                Helm Batok Kelapa Ramah Lingkungan +Multifungsi
              </div>
              <span className="items-stretch flex gap-2 mt-8 pr-16 self-start max-md:pr-5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d2a11d231eb83be282325b12a76e0726bd040238494de4ad60f350b3a99a65f7?apiKey=1cf36b611af3481fb487e0d4bacc56f5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2a11d231eb83be282325b12a76e0726bd040238494de4ad60f350b3a99a65f7?apiKey=1cf36b611af3481fb487e0d4bacc56f5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2a11d231eb83be282325b12a76e0726bd040238494de4ad60f350b3a99a65f7?apiKey=1cf36b611af3481fb487e0d4bacc56f5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2a11d231eb83be282325b12a76e0726bd040238494de4ad60f350b3a99a65f7?apiKey=1cf36b611af3481fb487e0d4bacc56f5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2a11d231eb83be282325b12a76e0726bd040238494de4ad60f350b3a99a65f7?apiKey=1cf36b611af3481fb487e0d4bacc56f5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2a11d231eb83be282325b12a76e0726bd040238494de4ad60f350b3a99a65f7?apiKey=1cf36b611af3481fb487e0d4bacc56f5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2a11d231eb83be282325b12a76e0726bd040238494de4ad60f350b3a99a65f7?apiKey=1cf36b611af3481fb487e0d4bacc56f5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2a11d231eb83be282325b12a76e0726bd040238494de4ad60f350b3a99a65f7?apiKey=1cf36b611af3481fb487e0d4bacc56f5&"
                  className="aspect-square object-contain object-center w-10 justify-center items-center overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-emerald-900 text-center text-base font-semibold leading-6 self-center grow whitespace-nowrap my-auto">
                  Tralala Lulu
                </div>
              </span>
              <span className="justify-between self-stretch flex gap-5 mt-8 items-start max-md:max-w-full max-md:flex-wrap">
                <div className="text-emerald-900 text-2xl font-semibold leading-6">
                  Rp. 2.500.000
                </div>
                <div className="justify-center text-emerald-900 text-base leading-6">
                  100 Pendukung
                </div>
              </span>
              <div className="bg-zinc-300 self-stretch flex flex-col justify-center mt-3 pr-16 rounded-[40px] items-start max-md:max-w-full max-md:pr-5">
                <div className="bg-emerald-900 flex w-[233px] shrink-0 h-3.5 flex-col rounded-[40px]" />
              </div>
              <span className="justify-between items-stretch self-stretch flex gap-5 mt-3 max-md:max-w-full max-md:flex-wrap">
                <div className="text-emerald-900 text-base leading-6 w-[241px]">
                  <span className="font-semibold">50%</span>
                </div>
                <div className="text-emerald-900 text-base leading-6">
                  30 Hari Lagi
                </div>
              </span>
              <span className="items-stretch self-stretch flex justify-between gap-1.5 mt-8 max-md:max-w-full max-md:flex-wrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f24dcedecec57773f6985b3f0b59d0a84296cfc903870e3dbd92c946b332ea2?apiKey=1cf36b611af3481fb487e0d4bacc56f5&"
                  className="aspect-square object-contain object-center w-5 justify-center items-center overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-emerald-900 text-center text-base leading-6 self-center grow shrink basis-auto my-auto max-md:max-w-full">
                  Lokasi : Palopo, Sulawesi Selatan
                </div>
              </span>
              <span className="text-white text-center text-sm font-semibold leading-5 whitespace-nowrap justify-center items-center shadow-sm bg-emerald-900 self-stretch mt-8 px-16 py-3.5 rounded-md max-md:max-w-full max-md:px-5">
                Dukung
              </span>
              <span className="items-center self-stretch flex gap-3 mt-8 max-md:max-w-full max-md:flex-wrap">
                <div className="text-emerald-900 text-base leading-6 whitespace-nowrap my-auto">
                  Bagikan{" "}
                </div>
                <div className="items-stretch self-stretch flex gap-2">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fd1f31ae9f2dce8b2ff335ae94cf2294dd6f9d386fa8089353cb770fa6ba7f5?apiKey=1cf36b611af3481fb487e0d4bacc56f5&"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/57ed097439bb2e8a70b56fe1ca73e53a2df4f3b27b1278da00b875c7c1dcc0d2?apiKey=1cf36b611af3481fb487e0d4bacc56f5&"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/65f04619e079508d72ffde70fe6dc535c6a159e3b8d3274b4f7062ecfaf44e47?apiKey=1cf36b611af3481fb487e0d4bacc56f5&"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7061a8c08e9c4e1075102c8f0b76de35904811e5c5e5ea3ffd3fb1ba46ce982?apiKey=1cf36b611af3481fb487e0d4bacc56f5&"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/60ff0b8128277ef83d98fae2d5c1f76f19b6db782451eb084ea6f1f5b826d8be?apiKey=1cf36b611af3481fb487e0d4bacc56f5&"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ffd22f0d13d53ffedb8322ed2c71b0ac4b143359e81339661b0259ac456f1f00?apiKey=1cf36b611af3481fb487e0d4bacc56f5&"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />
                </div>
                <div className="text-emerald-900 text-base leading-6 my-auto">
                  atau{" "}
                </div>
                <span className="text-white text-xs font-semibold leading-6 whitespace-nowrap justify-center items-stretch rounded bg-emerald-900 self-stretch grow px-11 py-2 max-md:px-5">
                  Link tautan
                </span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailHeader
