import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Feature3 from '../components/Feature3'
import Cookies from 'js-cookie'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const Ajukaninovasi = () => {
  const navigate = useNavigate()
  const [checkUser, setCheckUser] = useState(false)
  const [message, setMessage] = useState('')

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

    const { user } = JSON.parse(getCookies)

    if (user.bio === null && user.location === null && user.profile === null) {
      setCheckUser(true) // nanti diganti false yaaa
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
          navigate('/dashboard')
        }, 1500)
    }

    // jika profile lengkap ...
    // if (checkUser) {
    //   alertMessageError()
    //   setTimeout(() => {
    //     navigate('/ajukaninovasi/form')
    //   }, 1500)
    // }
  }, [checkUser, message, navigate])




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