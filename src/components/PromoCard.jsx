import React from 'react'

const PromoCard = ({nombre, precio, descripcion, imgSrc}) => {
  return (
    <div className="promoCard">
        <img src={imgSrc} alt="" />
        <h2>{nombre}</h2>
        <p>{precio}</p>
        <p>{descripcion}</p>
    </div>
  )
}

export default PromoCard
