import React from "react";
import Card from "react-bootstrap/Card";

import "../App.css"; // رابط ملف CSS
import Player from "./Player";

function Equipe() {
//   const positions = Object.keys(players);
const players = [
    
 
    { name: "Thibaut Courtois", age: 31, nationality: "Belgium", image: "" },
    { name: "Andriy Lunin", age: 23, nationality: "Ukraine", image: "" },
    { name: "Fran González", age: 27, nationality: "Spain", image: "" },
    { name: "Javier Navarro", age: 24, nationality: "Spain", image: "" },

]

  return (
    <div className="equipe-container">
      {/* {positions.map((position) => (
        <div key={position} className="position-section">
          <h2>{position}</h2>
          <div className="players-container">
            {players[position].map((player, index) => (
              <Card key={index} className="player-card">
                <Card.Img
                  variant="top"
                  src={player.image || "https://via.placeholder.com/100"}
                  alt={player.name}
                  className="player-img"
                />
                <Card.Body>
                  <Card.Title>{player.name}</Card.Title>
                  <Card.Text>
                    Age: {player.age} <br />
                    Nationality: {player.nationality}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      ))} */}
      <Player players={players}/>
    </div>
  );
}

export default Equipe;
