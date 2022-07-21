import React from 'react'
import { useState, useEffect } from "react"

const ItemCount = ({stock, initial}) => {

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
    alert(`Se agregaron ${numero} items al carrito`)
  } else{
    alert(`No hay stock suficiente, pruebe agregando menos items al carrito`)
  }
}

  return (
    <div className="buttonContainer">
        <button disabled={numero === 0} onClick={restarUno}> -1 </button>
        <div> {numero} </div>
        <button disabled={numero === stock} onClick={sumarUno}> +1 </button>
        <button onClick={onAdd}> AGREGAR AL CARRITO </button>
    </div>
  )
}

export default ItemCount