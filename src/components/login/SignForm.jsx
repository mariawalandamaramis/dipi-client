import * as React from "react";
import { Link } from "react-router-dom";


function SignForm() {
  return (
    <>
    <span className="justify-center items-center bg-white flex flex-col px-20 py-12 max-md:px-5">
      <div className="text-emerald-900 text-center text-4xl font-bold leading-10 whitespace-nowrap mt-44 max-md:mt-10">
        Register
      </div>
      <span className="items-stretch border shadow-sm bg-white flex w-[639px] max-w-full flex-col mt-10 mb-32 px-5 py-10 rounded-xl border-solid border-white max-md:mb-10">
        <div className="text-emerald-900 text-lg font-medium leading-5 max-md:max-w-full">
          Nama{" "}
        </div>
        <div className="items-start border shadow-sm bg-white flex shrink-0 h-[37px] flex-col mt-4 rounded-md border-solid border-slate-600 max-md:max-w-full" />
        <div className="text-emerald-900 text-lg font-medium leading-5 mt-6 max-md:max-w-full">
          Email{" "}
        </div>
        <span className="text-emerald-900 text-xs leading-5 whitespace-nowrap border shadow-sm bg-white justify-center mt-4 pl-3 pr-16 py-3.5 rounded-md border-solid border-slate-600 items-start max-md:max-w-full max-md:pr-5">
          example@exa.com
        </span>
        <div className="text-emerald-900 text-lg font-medium leading-5 mt-6 max-md:max-w-full">
          Password
        </div>
        <div className="items-start border shadow-sm bg-white flex shrink-0 h-[37px] flex-col mt-4 rounded-md border-solid border-slate-600 max-md:max-w-full" />
        <span className="text-white text-center text-sm font-semibold leading-5 whitespace-nowrap justify-center items-center shadow-sm bg-emerald-900 mt-10 px-16 py-3.5 rounded-md max-md:max-w-full max-md:px-5">
          Buat Akun
        </span>
        <div className="text-emerald-900 text-center text-xs leading-5 mt-3 max-md:max-w-full">
          Sudah punya akun? <Link to="/login"><span className="font-bold">Login disini</span></Link>
        </div>
      </span>
    </span>
    </>
  );
}

export default SignForm
