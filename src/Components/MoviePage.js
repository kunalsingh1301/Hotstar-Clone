import React from 'react'
import '../Styles/MoviePage.css'
import Header from './Header'
import bao from '../Assets/scale.jpg'
import title from '../Assets/baotitle.webp'
import playb from '../Assets/play-icon-black.png'
import playw from '../Assets/play-icon-white.png'

const MoviePage = () => {
    return (
        <>
            <Header />
            <div className='container'>
                <div className='backgrnd'>
                    <img src={bao} alt="bao" />
                </div>
                <div className='title'>
                    <img src={title} alt='title' />
                </div>
                <div className='buttons'>
                    <button className='play'>
                        <img src={playb} alt='playb' />
                        <span>Play</span>
                    </button>
                    <button className='trailer'>
                        <img src={playw} alt='playw' />
                        <span>Trailer</span>
                    </button>
                    <button className='add'>
                        <svg alt="" aria-hidden="true" aria-label="watchlist" color="#fff" role="img" version="1.1" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" data-route="WATCHLIST">
                            <path fill ="none"
                            d="M27.85 15.1H20.9V8.15a2.9 2.9 0 0 0-5.8 0v6.95H8.15a2.9 2.9 0 0 0 0 5.8h6.95v6.95a2.9 2.9 0 0 0 5.8 0V20.9h6.95a2.9 2.9 0 1 0 0-5.8z" class="sc-kAzzGY dGwULW">
                            </path>
                        </svg>
                    </button>
                </div>
                <div className='subtitle'>
                2018 • 7m • Family, Fantasy, Kids, Animation 
                </div>
                <div className='desc'>
                A Chinese mom who’s sad when her grown son leaves home gets another chance at motherhood when one of her dumplings springs to life. But she finds that nothing stays cute and small forever.
                </div>
            </div>
        </>
    )
}

export default MoviePage