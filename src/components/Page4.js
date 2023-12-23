import React from 'react';
import { useEffect } from 'react'; // Import correctement useEffect
import './page4.css';
import '../background/back.css';
import './animation/animation.css';

function Page4() {
  useEffect(() => {
    // Votre logique useEffect ici
  }, []); // Assurez-vous de déclarer les dépendances correctement

  return (
    <section id="Page4">
      <div className="back">
        <div className="page4-container">
          <div className="en-tete">
            <h1>Profils</h1>
          </div>
          <div className="container-total">
            <div className="container41">
              <div className="logo2">
                <img src="developpeurs.png" width="250" height="200" alt="Developpeurs" />
              </div>
              <p className="paragraphe1">Développeurs <br />
                La base d'un projet de hackathon blockchain est le <br />
                développement du back-end et du front-end. Vous <br />
                avez le profil d'un développeur ? Venez poser vos<br />
                idées sur des lignes de code.</p>
            </div>

            <div className="container42">
              <div className="logo2">
                <img src="manager.png" width="250" height="200" alt="Manager" />
              </div>
              <p className="paragraphe2">Managers <br />
                Un projet bien réussi doit obligatoirement <br />
                comporter un aspect commercial. Une bonne <br />
                organisation et un bon pitch final peuvent vous <br />
                apporter la victoire. Vous avez davantage un profil <br />
                de manager ? Ce hackathon est également fait<br />
                pour vous.</p>
            </div>

            <div className="container43">
              <div className="logo3">
                <img src="designer.png" width="250" height="200" alt="Designer" />
              </div>
              <p className="paragraphe3">Designers <br />
                Le design associé à votre projet est la première <br />
                image qu'il renvoit. Des visuels esthétiques <br />
                peuvent totalement changer la donne pendant la <br />
                présentation du projet. Vous avez le profil d'un graphiste ? <br />
                Le HAKS est l'occasion parfaite pour montrer votre talent.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page4;


