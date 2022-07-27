import React from 'react'
import { useState, useEffect } from "react"
import { Icon } from '@iconify/react';
import Swal from 'sweetalert2'

const ItemCount = ({stock, initial, nombreProducto}) => {

const [numero, setNumero] = useState(initial);

useEffect(() => {
    console.log("Cambió número, ahora el número es: ", numero)
}, [numero])

const restarUno = () => {
  setNumero(numero-1)
}

const sumarUno = () => {
    setNumero(numero+1)
}

const onAdd = () => {
  if (numero <= stock) {
    Swal.fire(
      `${numero} ${nombreProducto} agregado/s al carrito`,
      '',
      'success'
    )
  } else{
    alert(`No hay stock suficiente, pruebe agregando menos items al carrito`)
  }
}

  return (
    <div className="buttonContainer">
        <button className="controls" disabled={numero === 0} onClick={restarUno}> -1 </button>
        <div> {numero} </div>
        <button className="controls" disabled={numero === stock} onClick={sumarUno}> +1 </button>
        <button className="agregarAlCarrito" disabled = {numero ===0 }  onClick={onAdd}> <Icon icon="iconoir:add-to-cart" className="iconifyAdd" />  </button>
    </div>
  )
}

export default ItemCount