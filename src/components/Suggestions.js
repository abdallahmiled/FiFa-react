import React from 'react'
import { SiRclone } from 'react-icons/si'

function Suggestions() {
  const image = [
    {
      src: "https://assets.realmadrid.com/is/image/realmadrid/ND-CHAMPIONS-J07-RM-MONACO-ALEGRIA-VINI_AV28145?$Mobile$&fit=wrap&wid=350",
      a: "FIFA Women’s Champions Cup 2026™",
      name: "Le but de Vini Jr. pour conclure son grand match"
    },
    {
      src: "https://assets.realmadrid.com/is/image/realmadrid/ND-CHAMPIONS-J07-RM-MONACO-ALEGRIA-MBAPPE_DB13968?$Mobile$&fit=wrap&wid=350",
      a: "FIFA Women’s Champions Cup 2026™",
      name: "Le doublé de Mbappé pour atteindre les 11 buts en Ligue des Champions"
    },
    {
      src: "https://assets.realmadrid.com/is/image/realmadrid/ND-CHAMPIONS-J07-RM-MONACO-BELLINGHAM-GOL_HE12594?$Mobile$&fit=wrap&wid=350",
      a: "FIFA Women’s Champions Cup 2026™",
      name: "Le premier but de Mastantuono en Ligue des Champions"
    },
    {
      src: "https://assets.realmadrid.com/is/image/realmadrid/ND-CHAMPIONS-J07-RM-MONACO-BELLINGHAM-GOL_HE12594?$Mobile$&fit=wrap&wid=350",
      a: "FIFA Women’s Champions Cup 2026™",
      name: "Bellingham conclut la large victoire avec une superbe finition"
    },
    {src:"https://assets.realmadrid.com/is/image/realmadrid/ND-CHAMPIONS-J07-RM-MONACO-VINI-MVP_AV38078?$Mobile$&fit=wrap&wid=608",
        a:"FIFA Women’s Champions Cup 2026™",
        name: 'Vini Jr., MVP du match : "J\'essaie de tout donner pour ce club qui m\'a tant donné"'
    }
  ];

  return (
     <div className="players-container">
         {image.map((el, index) => (
        <div key={index} className="card">
          <img src={el.src} className="images" alt="football" />

          <div className="text">
            <a href="#">{el.a}</a>
            <h3>{el.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;