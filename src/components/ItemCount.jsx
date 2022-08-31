import React from 'react'
import { useState, useEffect } from "react"
import { Icon } from '@iconify/react';

const ItemCount = ({stock, initial, onAdd}) => {

const [count, setCount] = useState(initial);

useEffect(() => {
    setCount(initial)
}, [initial])

const decrease = () => {
  setCount(count-1)
}

const increase = () => {
    setCount(count+1)
}

const handleAdd = () => {
  onAdd(count)
}

  return (
    <div className="buttonContainer">
        <button className="controls" disabled={count === 0} onClick={decrease}> -1 </button>
        <div> {count} </div>
        <button className="controls" disabled={count === stock} onClick={increase}> +1 </button>
        <button className="agregarAlCarrito" disabled = {count === 0 } onClick={handleAdd}> <Icon icon="iconoir:add-to-cart" className="iconifyAdd" />  </button>
    </div>
  )
}

export default ItemCount