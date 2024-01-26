import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { getResponInput, postInputToAPI, responMessage } from '../../redux/slice/login-slice'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const resultInput = useSelector((state) => state.login)

  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm()
  
  const onSubmit = (data) => {
    console.log(data)
    // dispatch(getResponInput(data))
    dispatch(postInputToAPI(data))
  }

  const clearMessageAPI = () => {
    dispatch(responMessage({}))
  }

  // console.log(resultInput.responLogin)
  // console.log(resultInput.messageErro)
  const statusMessage = resultInput.messageErro


  useEffect(() => {
    if (resultInput.responLogin.token) {
      console.log('true');
      navigate('/');
    }
  }, [resultInput.responLogin.token, navigate]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">Email</label>
          <div>
            <input {...register('email', {
              required: 'Email harus diisi',
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Email ga bener'
              }
            })} onBlur={clearMessageAPI} type="text" name="email" id="email" className='bg-slate-400' /></div>
            {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="">Password</label>
          <div>
            <input {...register('password', {
              required: "Password is required.",
              minLength: {
                value: 2,
                message: "Password should be at-least 2 characters."
              }
            })} onFocus={clearMessageAPI} type="text" name="password" id="password" className='bg-slate-400' /></div>
            {errors.password && <p>{errors.password.message}</p>}
        </div>
        
        <p className={
          statusMessage.message ? ('visible') : ('invisible')
        }>
          data yg dimasukan salah</p>
        
        <div>
          <button type="submit" className='bg-red-400'>Login</button>
        </div>
      </form>
    </>
  )
}

export default Login