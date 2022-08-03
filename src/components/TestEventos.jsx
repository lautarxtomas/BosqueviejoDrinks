import React from 'react'
import { useState } from 'react'

const TestEventos = () => {


function handleOnClick () {
   alert('ocurrio un click')
}

function handleOnKeyDown (e) {
    if (['a', 'e', 'i', 'o', 'u'].includes(e.key)) {
        e.preventDefault()
    }
}


  return (
    <>
        <h1>FORMULARIO</h1>
        <div onClick={handleOnClick}>TestEventos</div>
        <input onKeyDown={handleOnKeyDown}/>
    </>
    )
}

export default TestEventos