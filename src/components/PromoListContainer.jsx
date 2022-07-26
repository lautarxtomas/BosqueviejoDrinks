import React from 'react'
import PromoList from './PromoList'

import data from "../data/drinks.json"
import { useState, useEffect } from 'react'


const PromoListContainer = () => {

const [drinks, setDrink] = useState([])

    useEffect(()=>{
      setTimeout(() => {

        setDrink([
            {
            id: 1,
            nombre: "Six Pack ANDES IPA" ,
            precio: 750,
            desc: "ALC 7% IBU 20%",
            imgSrc: "https://i.im.ge/2022/07/26/FLG1Y0.png",
            initial: 1,
            stock: 12
            },

            {
            id: 2,
            nombre: "Fernet BRANCA" ,
            precio: 1000,
            desc: "ALC 40%",
            imgSrc: "https://i.im.ge/2022/07/26/FLGOUW.png",
            initial: 1,
            stock: 2
            },

            {  
            id: 3,  
            nombre: "Schneider 1L" ,
            precio: 300,
            desc: "ALC 5%",
            imgSrc: "https://i.im.ge/2022/07/26/FLGXO1.png",
            initial: 1,
            stock: 5
          },
          {
            id: 4,
            nombre: "Campari" ,
            precio: 750,
            desc: "ALC 35%",
            imgSrc: "https://i.im.ge/2022/07/26/FLGrWm.png",
            initial: 1,
            stock: 4
          }
        ]
        )
      }, 2000)
    },[])




// useEffect(() => {
//   obtenerDatos()
// }, [])

// const obtenerDatos = () => {
//   fetch("../data/drinks.json")
//     .then(response => response.json())
//     .then(data => {
//         setDrink(data)
//     })
// }

// const obtenerDatos = () => {
//   const data = await fetch("../data/drinks.json")
//   const productos = await data.json()
//   setDrink(productos)
// }

  return (
    <div className="promoListContainer">
     <PromoList products={drinks}/>
    </div>
  )
}

export default PromoListContainer


  
