import React from "react";
import Card from "react-bootstrap/Card";

import "../App.css"; // رابط ملف CSS
import Player from "./Player";

function Equipe() {
//   const positions = Object.keys(players);
const players = [
    
 
     { name: "Thibaut Courtois", age: 31, nationality: "Belgium", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxQWbq6UXCtUY3z9OMbBoxBgN5VpD4QHPJ8A&s" },
    { name: "Andriy Lunin", age: 23, nationality: "Ukraine", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG8ao6j-TuFP1vzRTcteTSLHE79log23drRg&s" },
    { name: "Fran González", age: 27, nationality: "Spain", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl9brazXwujlPzMABhERui12r76_EFz_vIeA&s" },
    { name: "Javier Navarro", age: 24, nationality: "Spain", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFomMdHMfy792UOAhEhCYodr4qtgky3GvUww&s" },
  

    { name: "Dani Carvajal", age: 31, nationality: "Spain", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGXBzMpXc2hARNLdFeaRNvhvHdTDi4_gZYaw&s" },
    { name: "Trent Alexander-Arnold", age: 27, nationality: "England", image: "https://img.uefa.com/imgml/TP/players/1/2026/cutoff/250211818.webp" },
    { name: "Éder Militão", age: 25, nationality: "Brazil", image: "https://img.uefa.com/imgml/TP/players/1/2026/cutoff/250121965.webp" },
    { name: "David Alaba", age: 31, nationality: "Austria", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRlhQBOpJlUyV4vQK5OANXJKdOf2YyGjpjBg&s" },
    { name: "Raúl Asencio", age: 27, nationality: "Spain", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReJ7IMFbLeFeUfsPPD5xY07Ao27plLkS4FQA&s" },
    { name: "Antonio Rüdiger", age: 30, nationality: "Germany", image: "https://img.uefa.com/imgml/TP/players/1/2026/cutoff/250028211.webp" },
    { name: "Álvaro Carreras", age: 26, nationality: "Spain", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRbiixQ8d_UgiRH-oLJqVpImX_9Lp5nFGESg&s" },
    { name: "Fran García", age: 28, nationality: "Spain", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55UxAd7T2cE9s0zzwIyjoNUxmXVfP-LgMsQ&s" },
    { name: "Ferland Mendy", age: 28, nationality: "France", image: "https://img.uefa.com/imgml/TP/players/1/2026/cutoff/250112803.webp" },
    { name: "Dean Huijsen", age: 19, nationality: "Spain", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMIzjJUS8cze4zSd75obPD59c1_Uqv2jb5mQ&s" },
  
    { name: "Jude Bellingham", age: 20, nationality: "England", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa68IgDBuIrhWeW76NojtcNP9EcHRa2EH_mA&s" },
    { name: "Eduardo Camavinga", age: 20, nationality: "France", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBzOvaPCH4fED8zvneyxocnLdkqbM2N4MeMA&s" },
    { name: "Federico Valverde", age: 25, nationality: "Uruguay", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnkEVWITjoIyR4vk_0AyzAClUPC-OELs6oVQ&s" },
    { name: "Aurélien Tchouaméni", age: 23, nationality: "France", image: "https://img.uefa.com/imgml/TP/players/1/2026/cutoff/250105244.webp" },
    { name: "Arda Güler", age: 19, nationality: "Turkey", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5IQmsmtZRww1peSptMeFJY2JeGR-YTv6hzg&s" },
    { name: "Dani Ceballos", age: 26, nationality: "Spain", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv0fVhZdXuxyfFPQJpTlXyxsDKhepVTiDZEg&s" },
  
 
    { name: "Brahim Díaz", age: 25, nationality: "Morocco", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKIwgwYlN_p67eTpevnkmEREtNMfG56QqzIw&s" },
    { name: "Franco Mastantuono", age: 24, nationality: "Argentina", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8M9fC-Sxayg-lDX2dw5EDYtodWEML7Wpv3Q&s" },
    { name: "Endrick", age: 17, nationality: "Brazil", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMHsat8S9dhYwmGZqYh5Cl8ZM6ZHfM_1kjjQ&s" },
    { name: "Kylian Mbappé", age: 27, nationality: "France", image: "https://img.uefa.com/imgml/TP/players/1/2026/cutoff/250076574.webp" },
    { name: "Gonzalo García", age: 26, nationality: "Spain", image: "https://i.namu.wiki/i/vOHbH7_J-i9K8vh-H3rLaDL-zb6UBObSViR9z0EEquxVq8XPod9pb7IizD-7vLq3P-xqtibOuQzwdGrPRffy9A.webp" },
    { name: "Vinícius Júnior", age: 22, nationality: "Brazil", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWaGeyxhUDqoZ9Cf1GcsQRpie5TLyqU8Zfug&s" },
    { name: "Rodrygo", age: 22, nationality: "Brazil", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0R5mN86mMv-gexjbf24wp2L8h9f-8IxPNGw&s" },
]

  return (
    <div className="equipe-container">
     
       {players.map((el)=><Player el={el}/>)}
     
     
    </div>
  );
}

export default Equipe;
