import React from 'react'
import ItemCount from '../ItemCount'
// import DetailCard from './DetailCard'
import { useState, useEffect } from "react"
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

import { useContext } from 'react'
import { cartContext } from '../context/CartContext'

// ESTA LINEA SIMPLIFICA LAS DOS LINEAS DE ARRIBA GRACIAS A LA FUNCION QUE CREAMOS EN CARTCONTEXT
// import { useCartContext } from '../context/CartContext'

const PromoDetail = ({product, loading}) => {

  const [goToCart, setGoToCart] = useState(false);

  const { addProduct } = useContext(cartContext)

  // const { addProduct } = useCartContext() --> esta linea iría si usaramos el import simplificado de arriba

  const onAdd = (quantity) => {
    if (quantity <= product.stock) {
      Swal.fire(
        `${quantity} ${product.nombre} agregado/s al carrito`,
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

      
    {/* MIENTRAS LOADING SE MANTENGA EN TRUE, VA A APARECER EL SPINNER */} 
      {loading && 
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status"></div>
        </div>
      }

      {loading || // SI NO PONGO ESTO, DURANTE EL LOADING SE PRERENDERIZA LA CARD SIN LOS VALORES CARGADOS, QUEDANDO FEO A LA VISTA (Y TAMPOCO ANDA EL ITEMCOUNT SIN ESTO).
        <div className="promoDetailCard">
            <img src={product.imgSrc} alt="" />
            <h4>{product.nombre}</h4>
            <p>${product.precio}</p>
            <p>{product.desc}</p>
            <p>{product.descDetail}</p>

            {
              goToCart
              ? <Link className="finalizarCompra" to='/cart'> FINALIZAR COMPRA </Link>
              : <ItemCount initial = {product.initial} stock = {product.stock} onAdd={onAdd} />
            }

        </div> 
      }
    </div>
    
  )
}

export default PromoDetail