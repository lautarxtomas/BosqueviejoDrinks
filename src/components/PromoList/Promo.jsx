import React from 'react'
import { Link } from "react-router-dom"

const Promo = ({name, price, desc, imgSrc, id}) => {
  return (
    <div className="promoCard">
        <img src={imgSrc} alt="" />
        <h4>{name}</h4>
        <p>${price}</p>
        <p>{desc}</p>
        <Link className="detailLink" to={'/item/' + id}> <button className="detailBtn">  Ver detalle </button> </Link> 
    </div>
  )
}

export default Promo
