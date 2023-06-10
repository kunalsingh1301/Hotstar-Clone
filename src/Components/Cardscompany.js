import React from 'react'
import img3 from '../Assets/viewers-disney.png'
import '../Styles/Cardscompany.css'

const Cardscompany = () => {
  return (
    <div className='container-cc'>
        <div className='wrap'>
            <img src = {img3} alt = 'as'/>
        </div>
        <div className='wrap'>
            <img src = {img3} alt = 'as'/>
        </div>
        <div className='wrap'>
            <img src = {img3} alt = 'as'/>
        </div>
        <div className='wrap'>
            <img src = {img3} alt = 'as'/>
        </div>
    </div>
  )
}

export default Cardscompany