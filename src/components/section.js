import React from 'react';
import tv from '../images/tv.png';
import '../styles/Section.css';

export default function AppSection() {
  return (
    <div style={{display : 'flex'}} className='container'>
      <div className="text_content">
        <h2>Enjoy on your TV.</h2>

        <h4>Watch on Smart TVs, PlayStation, Xbox, <br /> Chromecast, Apple TV, Blu-ray Players and 
        <br /> more</h4>
      </div>
      <div className="image_content">
        <img src={tv} alt="tv" />
      </div>
    </div>
  );
}
