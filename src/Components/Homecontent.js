import React from 'react'
import '../Styles/Homecontent.css'
import movies from '../Components/data'


const Homecontent = () => {
  const moviesByType = movies.reduce((acc, movie) => {
    if (!acc[movie.type]) {
      acc[movie.type] = [];
    }
    acc[movie.type].push(movie);
    return acc;
  }, {});

  return (
    <div>
      {Object.entries(moviesByType).map(([type, movies]) => (
        <div key={type}>
          <h2>{type}</h2>
          <div className="row">
            {movies.map((movie) => (
              <div key={movie.id} className="column">
                <div className="card">
                  <img src={movie.cardImg} alt={movie.title} />
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Homecontent