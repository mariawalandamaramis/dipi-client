import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DetailHeader from '../components/detailinovasi/DetailHeader'
import Detail1 from '../components/detailinovasi/detail/Detail1'
import Detail2 from '../components/detailinovasi/detail/Detail2'
import Detail3 from '../components/detailinovasi/detail/Detail3'
import Detail4 from '../components/detailinovasi/detail/Detail4'

import { Tabs, Tab } from '../components/detailinovasi/Tabs';
import Kabarbaru1 from '../components/detailinovasi/kabarbaru/Kabarbaru1'
import Kabarbaru2 from '../components/detailinovasi/kabarbaru/Kabarbaru2'
import Kabarbaru3 from '../components/detailinovasi/kabarbaru/Kabarbaru3'
import Update1 from '../components/detailinovasi/update/Update1'

const DetailPageInovasi = () => {
    return (
      <>
        <Navbar />
        <DetailHeader />
        <Tabs>
        <Tab label="Detail">
          <Detail1 />
          <Detail2 />
          <Detail3 />
          <Detail4 />
        </Tab>
        <Tab label="Kabar Terbaru">
          <Kabarbaru1 />
          <Kabarbaru2 />
          <Kabarbaru3 />
        </Tab>
        <Tab label="Tanya Jawab">
          <Update1 />
        </Tab>
      </Tabs>
        <Footer />
      </>
    )
  }
  
  export default DetailPageInovasi