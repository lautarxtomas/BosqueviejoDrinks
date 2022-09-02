import React from 'react'
import ItemCount from '../ItemCount'
import { useState, useEffect } from "react"
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { cartContext } from '../context/CartContext'

const PromoDetail = ({product, loading}) => {

  const [goToCart, setGoToCart] = useState(false);

  const { addProduct } = useContext(cartContext)

  const onAdd = (quantity) => {
    if (quantity <= product.stock) {
      Swal.fire(
        `${quantity} ${product.name} agregado/s al carrito`,
        '',
        'success'
      )
      setGoToCart(true)
      addProduct(product, quantity)
    } else{
      alert(`No hay stock suficiente, pruebe agregando menos items al carrito`)
    }
}

  return (

    <div className="promoDetail">

      
    {/* SPINNER */} 
      {loading && 
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status"></div>
        </div>
      }

      {loading ||
        <div className="promoDetailCard">
            <img src={product.imgSrc} alt="" />
            <h4>{product.name}</h4>
            <p>${product.price}</p>
            <p>{product.desc}</p>
            <p>{product.descDetail}</p>

            {
              goToCart
              ? <Link className="greenBtn" to='/cart'> FINALIZAR COMPRA </Link>
              : <ItemCount initial = {product.initial} stock = {product.stock} onAdd={onAdd} />
            }

        </div> 
      }
    </div>
    
  )
}

export default PromoDetail