import React from 'react'
import BicImage from './images/photo de bicyclette.PNG'
import { Link } from 'react-router-dom';
import './3emepage.css'
const Page3 = () => {
  return (
 
    <div id="header">
    <img src={BicImage}  style={{width:300}}alt="Bicyclette"/>
    <h1 className='bienvenue'>Bienvenue dans INPT Mobile Track</h1>
    <Link to="/page4">
  <div id="bottom-box">
    <a href="#">Afficher les bicyclettes disponibles</a>
  </div>
  </Link>
  </div>
  )
}

export default Page3