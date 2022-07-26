import React from 'react'
import Navbar from '../common/Navbar'
import PromoListContainer from './PromoListContainer'
import Footer from '../common/Footer'

const Home = () => {
  return (
    <div className="home">
        <Navbar/>
        <PromoListContainer/>
        <Footer/>
    </div>
  )
}

export default Home