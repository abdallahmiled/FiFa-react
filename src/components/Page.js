import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../App.css"; // تأكد من المسار صحيح

function FifaHero() {
  return (
    <div className="carrousel">

      <div className='carrousel'>
         <Carousel fade controls={false} indicators={false} interval={4000}> {/* SLIDE 1 */} 
          <Carousel.Item> <div className="hero-slide">
             <div className="hero-text"> 
              <span>Inside FIFA</span> 
              <h1> Le Maroc et le Sénégal gagnent du terrain au Classement mondial masculin FIFA/Coca-Cola </h1>
           
               </div>
                <img src="https://digitalhub.fifa.com/transform/cfc87ce2-fd12-4432-885e-f45c4c9ef54d/Diego-Maradona-celebrates-following-Argentina-s-2-1-win-over-England-at-the-Estadio-Azteca-in-Mexico-City-in-the-1986-FIFA-World-Cup-quarter-finals?focuspoint=0.42,0.31&io=transform:fill,aspectratio:1x1,width:1536&quality=75" alt="slide" /> 
                </div> 
                </Carousel.Item> {/* SLIDE 2 */} <Carousel.Item>
                   <div className="hero-slide"> 
                    <div className="hero-text">
                       <span id='titre-carrousel'>FIFA World Cup 2026</span>
                        <h1> Classement mondial : les nations africaines montent en puissance </h1> 
                        <button>Lire plus</button> 
                        </div> 
                        <img src="https://digitalhub.fifa.com/transform/46777f71-47fe-4460-9321-7dd165f6adab/Ismaila-Sarr-of-Senegal-and-Abdessmad-Ezzalzouli-of-Morocco-battle-for-the-ball-during-the-AFCON-final?&io=transform:fill,aspectratio:1x1,width:1536&quality=75" alt="slide" />
                         </div>
              </Carousel.Item> 
          </Carousel> 
      
      
        </div>
    </div>
  );
}

export default FifaHero;

