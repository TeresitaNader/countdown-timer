import React from 'react';
import './Gallery.css';

import picture1 from '../assets/picture-1.webp';
import picture2 from '../assets/picture-2.webp';
import picture3 from '../assets/picture-3.webp';
import picture4 from '../assets/picture-4.webp';
import picture5 from '../assets/picture-5.webp';
import picture6 from '../assets/picture-6.webp';

// Array of picture modules
const pictures = [picture1, picture2, picture3, picture4, picture5, picture6];

function Gallery() {
    return (
      <div className="gallery"> 
        {pictures.map((picture, index) => (
          <div className="gallery-item" key={index}>
            <img src={picture} alt={`Gallery item ${index + 1}`} />
            <div className="overlay">
              <div className="overlay-text">Happy New Year!!</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default Gallery;
