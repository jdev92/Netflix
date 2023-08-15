import React from 'react';
import './App.css';
import netflixLogo from './netflix-logo.png';
import data from './movies_rnexgr.json';

function App() {
  return (
    <>
      <header>
        <div>
          <img src={netflixLogo} className="logoNetflix" alt="logo netflix" />
        </div>
      </header>
      <main>
        <div className='movies'>
          {data.map((category, index) => (
            <div key={index} className='category'>
              <h2>{category.category}</h2>
              <div className="carousel">
                {category.images.map((image, imageIndex) => (
                  <img
                    key={imageIndex}
                    src={image}
                    alt={`Img ${imageIndex}`}
                    className='carousel-image'
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
