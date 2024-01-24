import React from 'react' 
import Navbar from '../components/Navbar'
import ListInovasi from '../components/ListInovasi'
import Footer from '../components/Footer'
import Spillcardinovasi from '../components/Spillcardinovasi'

const ListPageInovasi = () => {
    return (
      <>
        <Navbar />
        <ListInovasi />
        <Spillcardinovasi />
        <Footer />
      </>
    )
  }
  
  export default ListPageInovasi