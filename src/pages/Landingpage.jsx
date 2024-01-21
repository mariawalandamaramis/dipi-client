import React from 'react'
import Navbar from '../components/Navbar'
import Feature from '../components/Feature'
import Hero from '../components/Hero'
import Calltoaction from '../components/Calltoaction'
import Imagecarausel from '../components/Imagecarausel'
import Feature2 from '../components/Feature2'
import Calltoaction2 from '../components/Calltoaction2'
import Footer from '../components/Footer'
import Spillcardinovasi from '../components/Spillcardinovasi'

const Landingpage = () => {
  return (
    <>
      <Navbar />
      <Hero
        title='Dukung Perempuan Indonesia Mewujudkan Inovasinya'
        desc='Indonesia memiliki banyak perempuan hebat dengan inovasi unik, kreativitas tinggi, dan orientasi pada solusi. Namun, untuk mewujudkan inovasi-inovasi tersebut, para perempuan membutuhkan dukungan dari kita semua.'
        imgSrc='Hero.png'
        btnText='Jelajah Inovasi'
        btnShow={true}
      />
      <Feature />
      <Spillcardinovasi />
      <Calltoaction />
      <Feature2 />
      <Imagecarausel />
      <Calltoaction2 />
      <Footer />
    </>
  )
}

export default Landingpage