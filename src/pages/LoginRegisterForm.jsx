import React from 'react' 
import Navbar from '../components/Navbar'
import LoginForm from '../components/login/LoginForm'
import Footer from '../components/Footer'

const LoginRegisterForm = () => {
    return (
      <>
        <Navbar />
        <LoginForm/>
        <Footer />
      </>
    )
  }
  
  export default LoginRegisterForm