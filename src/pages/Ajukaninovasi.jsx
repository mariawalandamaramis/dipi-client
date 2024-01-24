import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Feature3 from '../components/Feature3'
import Forminovasi from '../components/FormPengajuanInovasi/Forminovasi'

const Ajukaninovasi = () => {
  const [showFeatur3, setShowFeature3] = useState(true);
  const handleButtonClick = () => { setShowFeature3(false) }

  return (
    <>
      <Navbar />
      {showFeatur3 ? (
        <>
          <Hero
            title='Buat Inovasimu Jadi Kenyataan'
            desc='Tunjukan potensi dan peluang setiap inovasimu. Ajukan sekarang dan dapatkan banyak dukungan!'
            imgSrc='Hero.png'
            btnShow={false}
          />
          <Feature3 onButtonClick={handleButtonClick} />
        </>
      ) : (
        <Forminovasi />
      )}
      <Footer />
    </>
  )
}

export default Ajukaninovasi