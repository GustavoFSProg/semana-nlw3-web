import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import logo from '../../assets/Logo.svg'
import '../../styles/global.css'
import './landing.css'

export default function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logo} alt="Happy" />
        <main>
          <h1>Leve Felicidade para o Mundo!</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Novo Hamburgo</strong>
          <strong>Rio Grande do Sul</strong>
        </div>
        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </Link>
      </div>
    </div>
  )
}
