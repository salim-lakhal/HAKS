import React from 'react';
import './page1.css';
import '../background/back.css';
import Header from './header/Header';


export function Page1() {

  return (
    <div className="back">
      <div className="page1-container slide-from-left">
      < Header /> 
        <div className='container'>
          {/* Texte à gauche */}
            <div style={{ float: 'left', margin: '10px' }}>
            <h1 className="text">HAKS 2024 <br /> <br /> UN HACKATHON <br /> 100% ETUDIANT</h1>
          </div>
          {/* Logo en dessous des boutons */}
          <div style={{ float: 'right', margin: '10px' }}>
            <img src="logo.png" className="logo" alt="Logo" />
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default Page1;
