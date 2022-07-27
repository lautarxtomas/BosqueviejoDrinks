import React from 'react'
import PromoList from './PromoList'
import data from "../products/drinks.json"
import { useState, useEffect } from 'react'


const productPromise = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(data)
      }, 2000)
  })
} 

const PromoListContainer = () => {

const [drinks, setDrinks] = useState([])
// const [error, setError] = useState(false)
// const [loading, setLoading] = useState(true)

useEffect(() => {
  productPromise()
  .then(response => setDrinks(response))
  }, [])

  return (
    <div className="promoListContainer">
     <PromoList products={drinks}/>
    </div>
  )
}

export default PromoListContainer


  







    // useEffect(()=>{
    //   setTimeout(() => {

    //     setDrink([
    //         {
    //         id: 1,
    //         nombre: "Six Pack ANDES IPA" ,
    //         precio: 750,
    //         desc: "ALC 7% IBU 20%",
    //         imgSrc: "https://i.im.ge/2022/07/26/FLG1Y0.png",
    //         initial: 1,
    //         stock: 12
    //         },

    //         {
    //         id: 2,
    //         nombre: "Fernet BRANCA" ,
    //         precio: 1000,
    //         desc: "ALC 40%",
    //         imgSrc: "https://i.im.ge/2022/07/26/FLGOUW.png",
    //         initial: 1,
    //         stock: 2
    //         },

    //         {  
    //         id: 3,  
    //         nombre: "Schneider 1L" ,
    //         precio: 300,
    //         desc: "ALC 5%",
    //         imgSrc: "https://i.im.ge/2022/07/26/FLGXO1.png",
    //         initial: 1,
    //         stock: 5
    //       },
    //       {
    //         id: 4,
    //         nombre: "Campari" ,
    //         precio: 750,
    //         desc: "ALC 35%",
    //         imgSrc: "https://i.im.ge/2022/07/26/FLGrWm.png",
    //         initial: 1,
    //         stock: 4
    //       }
    //     ]
    //     )
    //   }, 2000)
    // },[])



// const obtenerDatos = async() => {
//   setTimeout(() => {
//     fetch(data)
//       .then(response => response.json())
//       .then((productos) => {
//           setDrinks(productos)
//       })
//   }, 2000)
// }


// async function obtenerDatos () {
//   setTimeout(() => {
//     try {
//       const response = await fetch("../products/drinks.json")
//       const productos = await response.json();
//       setDrinks(productos)
//     } catch(error) {
//         console.log("Lo sentimos, no pudimos cargar los productos")
//     }
//   }, 2000)
// } 

// const obtenerDatos = async () => {
//   setTimeout(() => {
//     const response = await fetch("../products/drinks.json");
//     const productos = await response.json();
//     setDrinks(productos);
//   }, 2000);
// }