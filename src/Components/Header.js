import React, { useEffect, useState } from 'react'
import '../Styles/Header.css'
import disneylogoimg from '../Assets/logo.svg'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      
      if(window.scrollY > 365){
        setIsScrolled(true)
      }
      else{
        setIsScrolled(false)
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className={` ${isScrolled ? 'scrolled':'header'}`}>
        <img className='img' src={disneylogoimg} alt = 'disney-logo'/>
        <button className='button'>
          Login
        </button>
    </div>
  )
}

export default Header