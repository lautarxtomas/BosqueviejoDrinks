import React from 'react'
import Navbar from '../common/Navbar'
import PromoListContainer from './PromoList/PromoListContainer'
import PromoDetailContainer from './PromoDetail/PromoDetailContainer'
import Footer from '../common/Footer'

const Home = () => {
  return (
    <div className="home">
        <Navbar/>
        <PromoDetailContainer/>
        <Footer/>
    </div>
  )
}

export default Home