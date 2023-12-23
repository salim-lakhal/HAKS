import React from 'react';
import './page9.css';
import '../background/back.css'

function Page9() {
    return (
      <div className="back">
        <div className="page9-container">
        <div className="container99">
          <div className="tete3">
            <h1>CARTE</h1>
          </div>
          {/* Carte Google Maps avec l'adresse spécifique */}
            <div className="gmap_canvas">
                <iframe width="900px" height="500px" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.623891207738!2d2.197532115865561!3d48.7126693189096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671975e9d2e3d%3A0x17f35deee8ffbbf1!2zVMOpbMOpY29tIFBhcmlz!5e0!3m2!1sfr!2sfr!4v1678904851509!5m2!1sfr!2sfr" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                </iframe>
          </div>
        </div>
      </div>
        </div>  
    );
}

export default Page9;
