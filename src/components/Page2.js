import React from 'react';
import './page2.css';
import '../background/back.css'

function Page2() {
  return (
    <div className="back">
    <div className="page2-container">

    <div className='container12'>
    <div className="logo12">
            <img src= "image1.png" width="475" height="500" />
        </div>

    <div className='container1'>
      <div>
        <p className="textt">
        Le HAKS est un hackathon Web3 & Blockchain 100% étudiant. Cet <br/> évènement est organisé par 9 étudiants de la Grande Ecole<br/>  d'ingénieurs Telecom SudParis, en partenariat avec Tezos, pillier<br/>  français de l'écosystème blockchain, et avec le soutien de l'association<br/>  Kryptosphere, première communauté étudiante dans le secteur de la<br/> tech en France.
        <br/> 
        <br/>Avec le soutien indéfectible de :
        </p>
      </div>

      <div className="logo1">
        <img src= "krypto.png" width="200" height="200" />
      </div>
      </div>
      </div>
      

    </div>
    </div>
  );
}
export default Page2;