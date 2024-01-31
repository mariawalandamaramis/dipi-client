import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DetailHeader from '../components/detailinovasi/DetailHeader'
import ArticleDetail, {Tab} from '../components/detailinovasi/ArticleDetail'

const tab = [
  {aKey: "article1", title: "Detail", content: "Reactaksdakdsahdhaksjhdaksd"  },
  {aKey: "article2", title: "Kabar Baru", content: "Reactaksdakdsahdhaksjhdaksd"  },
  {aKey: "article3", title: "Tanya Jawab", content: "Reactaksdakdsahdhaksjhdaksd"  }
]


const DetailPageInovasi = () => {
    return (
      <>
        <Navbar />
        <DetailHeader />
        <ArticleDetail activeKey="article1">
          {tab.map(item => <Tab key={item.aKey} aKey={item.aKey} title={item.title}>{item.content}</Tab>)}
        </ArticleDetail>
        <Footer />
      </>
    )
  }
  
  export default DetailPageInovasi