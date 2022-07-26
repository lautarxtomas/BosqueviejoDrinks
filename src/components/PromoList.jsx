import React from 'react'
import Promo from './Promo'

import ipa from '../img/andesipa.png'
import fernet from '../img/fernet.png'
import campari from '../img/campari.png'
import schneider from '../img/schneider.png'


const PromoList = ({products}) => {

  return (

    <div className="promoList">

    {
      products.map((item) =>

      <Promo key={item.id} nombre={item.nombre} precio={item.precio} desc={item.desc} imgSrc={item.imgSrc} initial={item.initial} stock={item.stock} />

      )
    }

    </div>
    
  )
}

export default PromoList