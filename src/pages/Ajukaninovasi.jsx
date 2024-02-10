import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Feature3 from '../components/Feature3'
import Cookies from 'js-cookie'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUserByIdAPI } from '../redux/slice/profile-slice'

const Ajukaninovasi = () => {
  const responLoginCookie = Cookies.get('responLogin');
  const userId = responLoginCookie ? JSON.parse(responLoginCookie)?.user?.id : null; 
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [checkUser, setCheckUser] = useState(false)
  const [message, setMessage] = useState('')
  const user = useSelector(state => state.profile).userById.data
  // console.log(user)
  // console.log(user.bio === null && user.location === null && user.profile === null)

  const handleButtonClick = () => {
    // jika blm login === undefined
    // jika sdh login === { token : {}, user: {}}
    // jika sdh login, cek apakah profile lengkap ? blm > dashboard profile

    const getCookies = Cookies.get('responLogin')

    if (getCookies === undefined) {
      setCheckUser(false)
      setMessage("Login dulu !")
      alertMessageError()
      return;
    }

    if (user.bio === null && user.location === null && user.profile === null) {
      setCheckUser(false) // nanti diganti false yaaa
      setMessage("Lengkapi profile dulu !")
    } else {
      setCheckUser(true)
      setMessage("Profile sudah lengkap, mulai berinovasi !")
    }
  }

  const alertMessageError = () => {
    withReactContent(Swal).fire({
      position: "center",
      icon: "warning",
      title: message,
      showConfirmButton: false,
      timer: 1500
    })
  }

  const alertMessageSucces = () => {
    withReactContent(Swal).fire({
      position: "center",
      icon: "success",
      title: message,
      showConfirmButton: false,
      timer: 1500
    })
  }

  useEffect(() => {
    // jika belum login ...
    if (message === "Login dulu !") {
      alertMessageError()
      setTimeout(() => {
        setMessage("")
        navigate('/login')
      }, 1500)
    }

    // jika profile belum lengkap ...
    if (message === "Lengkapi profile dulu !") {
        alertMessageError()
        setTimeout(() => {
          setMessage("")
          navigate('/dashboard/profile')
        }, 1500)
    }

    // jika profile lengkap ...
    if (checkUser) {
      alertMessageSucces()
      setTimeout(() => {
        navigate('/ajukaninovasi/form')
      }, 1500)
    }
  }, [checkUser, message, navigate])

  useEffect(() => {
    dispatch(getUserByIdAPI(userId))
  }, [])




  return (
    <>
      <Navbar />
      <Hero
        title='Buat Inovasimu Jadi Kenyataan'
        desc='Tunjukan potensi dan peluang setiap inovasimu. Ajukan sekarang dan dapatkan banyak dukungan!'
        imgSrc='AjukanInovasi.jpg'
        btnShow={false}
      />
      <Feature3 onButtonClick={handleButtonClick} />
      <Footer />
    </>
  )
}

export default Ajukaninovasi