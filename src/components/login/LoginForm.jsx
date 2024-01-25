import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, redirect, useNavigate } from "react-router-dom";
import { postUserLogin } from "../../redux/slice/login-slice";
import Cookies from "js-cookie";

function LoginForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    // dispatch(userLogin({ email, password })) 
    const loginData = {
      email: email,
      password: password,
    }

    dispatch(postUserLogin(loginData))



    // const toGlobal = Cookies.get('responLogin')
    // console.log(toGlobal)

    // const responLogin = useSelector((state) => state.login).login

    // Cookies.set('responLogin', responLogin)

    // const call = useSelector((state) => state.auth.login)

    // if (call) {
    //   Cookies.set('respon', call)
    //   navigate('/')

    //   // return redirect('/')
    // }

    // if (useSelector((state) => state.login).login) {
    //   alert('oke')
    // } else {
    //   alert ('yaahhhhh')
    // }
  }

  // useEffect(() => {
  //   // const call = useSelector((state) => state.auth.login)

  //   if (call) {
  //     Cookies.set('respon', call)
  //     navigate('/')

  //     // return redirect('/')
  //   }
  // })

  // const call = useSelector((state) => state.auth.login)

  // if (call) {
  //   Cookies.set('respon', call)
  //   navigate('/')

  //   // return redirect('/')
  // }

  // if (Cookies.get('responLogin')) {
  //   alert('oke')
  // } else {
  //   alert ('yaahhhhh')
  // }


  // console.log(Cookies.get('responLogin'))
  // console.log(useSelector((state) => state.login).login)
  const responLogin = useSelector((state) => state.login).login

  // console.log(responLogin === null && responLogin === undefined && responLogin === '')
  // const test = responLogin && responLogin.token && responLogin.user
  // console.log(test)

  // console.log(!responLogin.length === 0)

  if (responLogin.length !== 0) {
    console.log('eeehhh bisa kok')
    navigate('/')
  }

  //const msgErro = useSelector((state) => state.login).msgIncorret
  // console.log(msgErro)

  // console.log(msgErro && responLogin.length === 0 ) // kosong ga diisis
  // console.log(msgErro && email === '' || msgErro && password === '')
  // useEffect(() => {

  //   if (!responLogin.length === 0) {
  //     console.log('eeehhh bisa kok')
  //   }
  // })

  // if (responLogin.length === 1) {
  //   const toCook = JSON.stringify(responLogin)
  //   Cookies.set('responLogin', toCook)
  // }



  return (
    <span className="justify-center items-center bg-white flex flex-col px-20 py-12 max-md:px-5">
      <div className="text-emerald-900 text-center text-4xl font-bold leading-10 whitespace-nowrap mt-8 max-md:mt-10">
        Login
      </div>
      <span className="items-stretch border shadow-sm bg-white flex w-[639px] max-w-full flex-col mt-5 mb-36 px-5 py-10 rounded-xl border-solid border-white max-md:mb-10">
        <label className="text-emerald-900 text-lg font-medium leading-5 max-md:max-w-full">
          Email{" "}
        </label>
        <input value={email} onFocus={(e) => setErrorMessage('')} onChange={(e) => setEmail(e.target.value)} className="text-emerald-900 text-xs leading-5 whitespace-nowrap border shadow-sm bg-white justify-center mt-4 pl-3 pr-16 py-3.5 rounded-md border-solid border-slate-600 items-start max-md:max-w-full max-md:pr-5  " />

        <label className="text-emerald-900 text-lg font-medium leading-5 mt-6 max-md:max-w-full">
          Password
        </label>
        <input value={password} onFocus={(e) => setErrorMessage('')} onChange={(e) => setPassword(e.target.value)} className="text-emerald-900 text-xs leading-5 whitespace-nowrap border shadow-sm bg-white justify-center mt-4 pl-3 pr-16 py-3.5 rounded-md border-solid border-slate-600 items-start max-md:max-w-full max-md:pr-5  " />

        <div className="text-emerald-900 text-xs leading-5 mt-2 max-md:max-w-full">
          lupa pasword?
        </div>
        {/* 
        <div className="text-red-900 text-base leading-5 mt-8 max-md:max-w-full">
          <p>Masukan Email dan Password yang sesuai!</p>
        </div> */}

        {/* {msgErro && responLogin.length === 0 && (
          <div className="text-red-900 text-base leading-5 mt-2 max-md:max-w-full">
            isi dengan benar
          </div>
        )}

        {(msgErro && email === '') || (msgErro && password === '') && (
          <div className="text-red-900 text-base leading-5 mt-2 max-md:max-w-full">
            Isi semua kolom
          </div>
        )} */}
{/* 
        <div className="text-red-900 text-base leading-5 mt-8 max-md:max-w-full">
          {errorMessage && <p>{errorMessage}</p>}
        </div> */}

        <button onClick={handleLogin} className="text-white text-center text-sm font-semibold leading-5 whitespace-nowrap justify-center items-center shadow-sm bg-emerald-900 mt-24 px-16 py-3.5 rounded-md max-md:max-w-full max-md:mt-10 max-md:px-5">
          Login
        </button>

        <div className="text-emerald-900 text-center text-xs leading-5 mt-3 max-md:max-w-full">
          Tidak punya akun? <span className="font-bold"><Link to="/signup">Register disini</Link></span>
        </div>
      </span>
    </span>
  );
}

export default LoginForm



