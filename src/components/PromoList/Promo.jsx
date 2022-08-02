import React from 'react'
import { Link } from "react-router-dom"

const Promo = ({nombre, precio, desc, imgSrc, id}) => {
  return (
    <div className="promoCard">
        <img src={imgSrc} alt="" />
        <h4>{nombre}</h4>
        <p>${precio}</p>
        <p>{desc}</p>
        <button className="detailBtn"> <Link className="detailLink" to={'/item/' + id}> Ver detalle </Link> </button>
    </div>
  )
}

export default Promo
