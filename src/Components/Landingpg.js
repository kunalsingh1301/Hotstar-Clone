import React from 'react'
import hulu from '../Assets/hulu.svg'
import logo from '../Assets/logo.svg'
import espn from '../Assets/espn.svg'
import '../Styles/Landingpage.css'
import Header from './Header'
import { useNavigate } from 'react-router-dom'

const Landingpg = () => {
  const navigate = useNavigate();
  const routeChange = () =>{ 
    let path = `/home`; 
    navigate(path);
  }
  return (
    <>
      <Header />
      <div className='landingPage'>
        <div className="explore">
          <div className="logos">
            <img src={hulu} alt='hulu' />
            <img src={logo} alt='logo' />
            <img src={espn} alt='espn' />
          </div>
          <button onClick= {routeChange}> Explore </button>
          <span>Get Premier Access to Raya and the Last Dragon for an additional fee with a disney+ subscription. As of 03/06321, the                                        price of Disney+ and The Disney Bundle will increase by $1</span>
        </div>
        <div className="down-logos">
          <img src={logo} alt='logo' />
          <img src={logo} alt='logo' />
          <img src={logo} alt='logo' />
          <img src={logo} alt='logo' />
          <img src={logo} alt='logo' />
        </div>
      </div>
    </>
  )
}

export default Landingpg