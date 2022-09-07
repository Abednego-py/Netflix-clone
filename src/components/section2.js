import React from 'react';
import mobile from '../images/mobile-0819.jpg'
import '../styles/Section.css';

export default function Appsection2() {
  return (
    <div style={{display : 'flex'}} className='container'>
      <div className="image_content">
        <img src={mobile} alt="tv" />
      </div>

      <div className="text_content">
        <h2>Download your shows <br /> to watch offline.</h2>

        <h4>Save your favourites easily and always have <br /> something to watch. </h4>
      </div>
    </div>
  );
}
