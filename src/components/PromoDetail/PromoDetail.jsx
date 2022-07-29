import React from 'react'
import ItemCount from '../ItemCount'

const PromoDetail = ({product, loading}) => {

  return (

    <div className="promoDetail">

      {/* MIENTRAS LOADING SE MANTENGA EN TRUE, VA A APARECER EL SPINNER */} 
      {loading && 
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status"></div>
        </div>
      }

      <div className="promoDetailCard">
          <img src={product.imgSrc} alt="" />
          <h4>{product.nombre}</h4>
          <p>${product.precio}</p>
          <p>{product.desc}</p>
          <p>{product.descDetail}</p>
          <ItemCount initial = {product.initial} stock = {product.stock} nombreProducto = {product.nombre} />
      </div>

    </div>
    
  )
}

export default PromoDetail