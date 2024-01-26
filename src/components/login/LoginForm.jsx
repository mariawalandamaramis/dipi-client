import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { postInputToAPI, responMessage } from "../../redux/slice/login-slice";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

function LoginForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const resultInput = useSelector((state) => state.login)
  const statusMessageAPI = resultInput.messageErro

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    dispatch(postInputToAPI(data))
  }

  const clearMessageAPI = () => {
    dispatch(responMessage({}))
  }

  const alertSucces = () => {
    withReactContent(Swal).fire({
      position: "center",
      icon: "success",
      title: "Login berhasil",
      showConfirmButton: false,
      timer: 1500
    })
  }

  useEffect(() => {
    if (resultInput.responLogin.token) {
      alertSucces()
      setTimeout(() => {
        navigate('/')
      }, 1500)
    }
  }, [resultInput.responLogin.token, navigate])




  return (
    <div className="justify-center items-center bg-white flex flex-col px-20 py-12 max-md:px-5">
      <div className="text-emerald-900 text-center text-4xl font-bold leading-10 whitespace-nowrap max-md:mt-10">
        Login
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="items-stretch border shadow-sm bg-white flex w-[639px] max-w-full flex-col mt-4 mb-36 px-5 py-10 rounded-xl border-solid border-white max-md:mb-10">

        <label className="text-emerald-900 text-lg font-medium leading-5 max-md:max-w-full">Email</label>
        <input type="text" {...register('email', {
          required: ' Email harus diisi ! ',
          pattern: {
            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            message: 'Isi email dengan benar !'
          },
          onChange: clearMessageAPI,
        })}
          className="text-emerald-900 text-xs leading-5 whitespace-nowrap border shadow-sm bg-white justify-center mt-4 pl-3 pr-16 py-3.5 rounded-md border-solid border-slate-600 items-start max-md:max-w-full max-md:pr-5  " />
        <div className={` ${errors.email === undefined ? ('invisible') : ('visible')} text-red-500 text-xs font-semibold leading-5 mt-2 flex flex-row max-md:max-w-full`}>
          '{errors.email && <p>{errors.email.message}</p>}'
        </div>

        <label className="text-emerald-900 text-lg font-medium leading-5 mt-6 max-md:max-w-full">Password</label>
        <input type="password" {...register('password', {
          required: "Password harus diisi !",
          minLength: {
            value: 4,
            message: "Password minimal ada 4 karakter."
          },
          onChange: clearMessageAPI,
        })}
          className="text-emerald-900 text-xs leading-5 whitespace-nowrap border shadow-sm bg-white justify-center mt-4 pl-3 pr-16 py-3.5 rounded-md border-solid border-slate-600 items-start max-md:max-w-full max-md:pr-5  " />
        <div className={` ${errors.password === undefined ? ('invisible') : ('visible')} text-red-500 text-xs font-semibold leading-5 mt-2 flex flex-row max-md:max-w-full`}>
          '{errors.password && <p>{errors.password.message}</p>}'
        </div>
        <div className="text-emerald-900 text-xs leading-5 mt-2 max-md:max-w-full">lupa pasword?</div>


        <div className={`${statusMessageAPI.message ? ('visible') : ('invisible')} text-red-500 text-sm font-semibold leading-5 mt-4 flex flex-row max-md:max-w-full`}>
          <p>Email dan password yang diisi tidak tepat / salah. Ulangi sekali lagi!</p>
        </div>

        <button type="submit" className="text-white text-center text-sm font-semibold leading-5 whitespace-nowrap justify-center items-center shadow-sm bg-emerald-900 mt-10 px-16 py-3.5 rounded-md max-md:max-w-full max-md:mt-10 max-md:px-5">
          Login
        </button>

        <div className="text-emerald-900 text-xs leading-5 mt-3 max-md:max-w-full">
          Tidak punya akun? <span className="font-bold"><Link to="/signup">Register disini</Link></span>
        </div>
      </form>
    </div>
  );
}

export default LoginForm



