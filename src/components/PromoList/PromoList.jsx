import React from 'react'
import Promo from './Promo'

const PromoList = ({products, loading}) => {

  return (

    <div className="promoList">

      {loading && 
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status"></div>
        </div>
      }

    {
      products.map((item) =>

      <Promo key={item.id} id={item.id} name={item.name} price={item.price} desc={item.desc} imgSrc={item.imgSrc} initial={item.initial} stock={item.stock} />

      )
    }

    </div>
    
  )
}

export default PromoList