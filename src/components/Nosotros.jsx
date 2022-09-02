import React from 'react'
import logo from '../img/logo.png'
import efectivo from '../img/efectivo.png'
import mercadopago from '../img/mercadopago.png'
import transferencia from '../img/transferencia.png'

const Nosotros = () => {
  return (
    <div className="nosotros">

      <div className="bosqueviejo">
        <img src={logo} alt=""/>
        <p style={{fontSize: 20}}>
          SOMOS BOSQUEVIEJO DRINKS, UN NEGOCIO DE BEBIDAS AL MEJOR PRECIO, CON
          ENVÍOS HASTA LA PUERTA DE TU CASA Y CON VARIADOS MÉTODOS DE PAGO
        </p>
      </div>

      <div className="metodosDePago" >
        <p style={{fontSize: 35}}>¿QUÉ METODOS DE PAGO OFRECEMOS?</p>
        <br />
        <img src={efectivo} style={{width: 150}} alt="" />
        <img src={mercadopago} alt="" />
        <img src={transferencia} alt="" />
      </div>

    </div>
  );
}

export default Nosotros