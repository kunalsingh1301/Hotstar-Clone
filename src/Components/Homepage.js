import React from 'react'
import Header from './Header'
import Sidenavbar from './Sidenavbar'
import '../Styles/Homepage.css'
import Footer from './Footer'
import Homecontent from './Homecontent'
import Carouseln from './Carouseln'
import Cardscompany from './Cardscompany'


const Homepage = () => {
  return (
    <div className='home'>
      <Header />
      <Carouseln/>
      <Cardscompany/>
      <div style={{display:'flex'}}>
        <Sidenavbar/>
        <Homecontent/>
      </div>
      <Footer/>
    </div>
  )
}

export default Homepage