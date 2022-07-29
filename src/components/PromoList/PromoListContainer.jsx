import React from 'react'
import PromoList from './PromoList'
// import data from "../products/drinks.json"
import { useState, useEffect } from 'react'

const PromoListContainer = () => {

const [drinks, setDrinks] = useState([])
const [error, setError] = useState(false)
const [loading, setLoading] = useState(true)

useEffect(() => {

  let productos = [
    {
      id: 1,
      nombre: "Six Pack ANDES IPA",
      precio: 750,
      desc: "ALC 7% IBU 20%",
      imgSrc: "https://i.im.ge/2022/07/26/FLG1Y0.png",
      initial: 1,
      stock: 12
    },
  
    {
        id: 2,
        nombre: "Fernet BRANCA",
        precio: 1000,
        desc: "ALC 40%",
        imgSrc: "https://i.im.ge/2022/07/26/FLGOUW.png",
        initial: 1,
        stock: 2
    },
  
    {
        id: 3,
        nombre: "Schneider 1L",
        precio: 300,
        desc: "ALC 5%",
        imgSrc: "https://i.im.ge/2022/07/26/FLGXO1.png",
        initial: 1,
        stock: 5
    },
  
    {
        id: 4,
        nombre: "Campari",
        precio: 750,
        desc: "ALC 35%",
        imgSrc: "https://i.im.ge/2022/07/26/FLGrWm.png",
        initial: 1,
        stock: 4
    }
  ]
  
  const productPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos) // resolve(data) si quisiera devolver el json
        }, 2000)
    })
  } 

  productPromise()
  .then((response) => {
    setDrinks(response)
  })
  .catch((e) => {
    setError(true)
  })
  .finally(() => {
    setLoading(false)
  })
}, [])


  return (
    <div className="promoListContainer">

      {/* SI ERROR ESTA EN TRUE (SETEADO EN EL CATCH) TIRA MSJ DE ERROR EN CLG */}
      {error && console.log("Algo salió mal")}

     <PromoList products={drinks} loading={loading} />
    </div>
  )
}

export default PromoListContainer
