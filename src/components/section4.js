import React from 'react';
import children from '../images/kids.png'
import '../styles/Section.css';

export default function Appsection4() {
  return (
    <div style={{display : 'flex'}} className='container'>
      <div className="image_content">
        <img src={children} alt="tv" />
      </div>

      <div className="text_content">
        <h2>Create profiles for kids.</h2>

        <h4>Send kids on adventures with their favorite
            <br /> characters in a space made just for them— 
            <br />free with your membership.</h4>
      </div>
    </div>
  );
}
