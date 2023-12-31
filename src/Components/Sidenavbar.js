import React, { useState } from 'react'
import disneylogo from '../Assets/logo.svg'
import '../Styles/Sidebar.css'
import { useNavigate } from 'react-router-dom';

const Sidenavbar = () => {
    const navigate = useNavigate();
  const routeChange = () =>{ 
    let path = `/home/movie`; 
    navigate(path);
  }

    const [isHovered, setIsHovered] = useState(false);

    const handleIconHover = () => {
        setIsHovered(true);
    };

    const handleIconLeave = () => {
        setIsHovered(false);
    };


    return (
        <div className='sidebar'>
            <img src={disneylogo} alt='disneylogo' />

            <div className='disney-logo'>
                <div className='icon' onMouseEnter={handleIconHover}
                    onMouseLeave={handleIconLeave}>

                    <svg alt="" aria-hidden="true" aria-label="search" color="#fff" role="img" version="1.1" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" data-route="SEARCH">
                        <path fill="none" stroke="#FFFFFF" d="M21.866 24.337c-3.933 2.762-9.398 2.386-12.914-1.13-3.936-3.936-3.936-10.318 0-14.255 3.937-3.936 10.32-3.936 14.256 0 3.327 3.327 3.842 8.402 1.545 12.27l4.56 4.558a2 2 0 0 1 0 2.829l-.174.173a2 2 0 0 1-2.828 0l-4.445-4.445zm-5.786-1.36a6.897 6.897 0 1 0 0-13.794 6.897 6.897 0 0 0 0 13.794z" class="sc-kAzzGY dGwULW">
                        </path>
                    </svg>

                    {isHovered && <span className='icon-name'>
                        search</span>}

                </div>

                <div className='icon' onMouseEnter={handleIconHover}
                    onMouseLeave={handleIconLeave}>

                    <svg alt="" aria-hidden="true" aria-label="home" color="#fff" role="img" version="1.1" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" data-route="HOME">
                        <path fill="none" stroke="#FFFFFF" stroke-width="2" d="M26.882 19.414v10.454h-5.974v-5.227h-5.974v5.227H8.961V19.414H5.227L17.921 6.72l12.694 12.694h-3.733z" class="sc-kAzzGY dGwULW">
                        </path>
                    </svg>

                    {isHovered && <span className='icon-name'>
                        home</span>}

                </div>

                <div className='icon' onMouseEnter={handleIconHover}
                    onMouseLeave={handleIconLeave}>

                    <svg alt="" aria-hidden="true" aria-label="series" color="#fff" role="img" version="1.1" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" data-route="SERIES">
                        <path fill="none" stroke="#FFFFFF" stroke-width="2" d="M18.84 11.965h6.722a4 4 0 0 1 4 4V26a4 4 0 0 1-4 4H10.375a4 4 0 0 1-4-4V15.965a4 4 0 0 1 4-4h6.211l-3.981-3.981a1.162 1.162 0 1 1 1.643-1.644l3.465 3.465 3.464-3.465a1.162 1.162 0 0 1 1.644 1.644l-3.982 3.981zm6.428 7.73a1.718 1.718 0 1 0 0-3.436 1.718 1.718 0 0 0 0 3.436zm0 6.011a1.718 1.718 0 1 0 0-3.435 1.718 1.718 0 0 0 0 3.435z" class="sc-kAzzGY dGwULW">
                        </path>
                    </svg>

                    {isHovered && <span className='icon-name'>
                        series</span>}

                </div>

                <div className='icon' onMouseEnter={handleIconHover}
                    onMouseLeave={handleIconLeave} onClick={routeChange}>

                    <svg alt="" aria-hidden="true" aria-label="movies" color="#fff" role="img" version="1.1" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" data-route="MOVIES"><path fill="none" stroke="#FFFFFF" stroke-width="2" d="M24.71 20.07a2.97 2.97 0 1 0-4.2-4.2 2.97 2.97 0 0 0 4.2 4.2m-12.262 0a2.97 2.97 0 1 0-4.2-4.2 2.97 2.97 0 0 0 4.2 4.2m6.173-10.31a2.969 2.969 0 1 0-4.199 4.198 2.969 2.969 0 0 0 4.199-4.198m0 12.262a2.969 2.969 0 1 0-4.199 4.198 2.969 2.969 0 0 0 4.199-4.198m-1.544-4.629a.846.846 0 1 0-1.197 1.196.846.846 0 0 0 1.197-1.196m18.06-.644c-3.33 6.913-8.165 9.928-11.635 11.24-2.57.971-4.762 1.178-5.949 1.208-.348.032-.698.053-1.052.053C10.287 29.25 5.25 24.213 5.25 18S10.287 6.75 16.5 6.75c6.214 0 11.25 5.037 11.25 11.25a11.19 11.19 0 0 1-2.493 7.054c2.832-1.612 5.844-4.382 8.138-9.143a.968.968 0 0 1 1.742.838" class="sc-kAzzGY dGwULW"></path></svg>

                    {isHovered && <span className='icon-name'>
                        movies</span>}

                </div>

                <div className='icon' onMouseEnter={handleIconHover}
                    onMouseLeave={handleIconLeave}>

                    <svg alt="" aria-hidden="true" aria-label="search" color="#fff" role="img" version="1.1" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" data-route="SEARCH">
                        <path fill="none" stroke="#FFFFFF" d="M21.866 24.337c-3.933 2.762-9.398 2.386-12.914-1.13-3.936-3.936-3.936-10.318 0-14.255 3.937-3.936 10.32-3.936 14.256 0 3.327 3.327 3.842 8.402 1.545 12.27l4.56 4.558a2 2 0 0 1 0 2.829l-.174.173a2 2 0 0 1-2.828 0l-4.445-4.445zm-5.786-1.36a6.897 6.897 0 1 0 0-13.794 6.897 6.897 0 0 0 0 13.794z" class="sc-kAzzGY dGwULW">
                        </path>
                    </svg>

                    {isHovered && <span className='icon-name'>
                        sports</span>}

                </div>
            </div>
        </div>
    )
}

export default Sidenavbar