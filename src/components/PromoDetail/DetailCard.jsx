import React from 'react'
import ItemCount from '../ItemCount'

const DetailCard = ({nombre, precio, desc, imgSrc, initial, stock, descDetail}) => {
  return (
    <div className="promoDetailCard">
          <img src={imgSrc} alt="" />
          <h4>{nombre}</h4>
          <p>${precio}</p>
          <p>{desc}</p>
          <p>{descDetail}</p>
          <ItemCount initial = {initial} stock = {stock} nombreProducto = {nombre} />
      </div>
  )
}

export default DetailCard
