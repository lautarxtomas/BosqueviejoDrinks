import React from 'react'
import ItemCount from '../ItemCount'

const Promo = ({nombre, precio, desc, imgSrc, initial, stock}) => {
  return (
    <div className="promoCard">
        <img src={imgSrc} alt="" />
        <h4>{nombre}</h4>
        <p>${precio}</p>
        <p>{desc}</p>
        <ItemCount initial = {initial} stock = {stock} nombreProducto = {nombre} />
    </div>
  )
}

export default Promo
