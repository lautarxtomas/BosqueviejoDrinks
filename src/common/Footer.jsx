import React from 'react'
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <footer>
        <div>
            <p className="footerText">¡BUSCANOS EN NUESTRAS REDES!</p>
        </div>
        <div className="iconContainer">
            <a href="https://web.whatsapp.com/"> <Icon className="iconFooter" icon="akar-icons:whatsapp-fill" /> </a>
            <a href="https://www.facebook.com/"> <Icon className="iconFooter" icon="akar-icons:facebook-fill" /> </a>
            <a href="https://www.instagram.com/"> <Icon className="iconFooter" icon="akar-icons:instagram-fill" /> </a>
        </div>
    </footer>
  )
}

export default Footer