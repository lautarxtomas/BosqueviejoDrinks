import React from 'react'
import PromoDetail from './PromoDetail'
import { useState, useEffect } from 'react'

const PromoDetailContainer = () => {

const [drink, setDrink] = useState([])
const [error, setError] = useState(false)
const [loading, setLoading] = useState(true)

useEffect(() => {

  let productos = [
    {
      id: 1,
      nombre: "Six Pack ANDES IPA",
      precio: 750,
      desc: "ALC 7% IBU 20%",
      descDetail: "Solo por esta semana, aprovecha un 25% de descuento en bebidas",
      imgSrc: "https://i.im.ge/2022/07/26/FLG1Y0.png",
      initial: 1,
      stock: 12
    },
  
    {
        id: 2,
        nombre: "Fernet BRANCA",
        precio: 1000,
        desc: "ALC 40%",
        descDetail: "Solo por esta semana, aprovecha un 25% de descuento en bebidas",
        imgSrc: "https://i.im.ge/2022/07/26/FLGOUW.png",
        initial: 1,
        stock: 2
    },
  
    {
        id: 3,
        nombre: "Schneider 1L",
        precio: 300,
        desc: "ALC 5%",
        descDetail: "Solo por esta semana, aprovecha un 25% de descuento en bebidas",
        imgSrc: "https://i.im.ge/2022/07/26/FLGXO1.png",
        initial: 1,
        stock: 5
    },
  
    {
        id: 4,
        nombre: "Campari",
        precio: 750,
        desc: "ALC 35%",
        descDetail: "Solo por esta semana, aprovecha un 25% de descuento en bebidas",
        imgSrc: "https://i.im.ge/2022/07/26/FLGrWm.png",
        initial: 1,
        stock: 4
    }
  ]
  
  const productPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let specificProduct = productos.find(product => product.id == 2)
            console.log(specificProduct)
            resolve(specificProduct)
        }, 2000)
    })
  } 

  productPromise()
  .then((response) => {
    setDrink(response)
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

     <PromoDetail product={drink} loading={loading} />
    </div>
  )
}


export default PromoDetailContainer
