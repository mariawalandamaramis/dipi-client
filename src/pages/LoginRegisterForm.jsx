import React from 'react' 
import Navbar from '../components/Navbar'
import LoginForm from '../components/login/LoginForm'
import Footer from '../components/Footer'
// import Login from '../components/login/Login'

const LoginRegisterForm = () => {
    return (
      <>
        <Navbar />
        {/* <Login /> */}
        <LoginForm />
        <Footer />
      </>
    )
  }
  
  export default LoginRegisterForm