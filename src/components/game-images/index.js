import React, {Component} from 'react';
// import terrycrews from "../../assets/images/terrycrews.jpg"

function GameImages(props) {
  return (
    <img className="game-image" src={props.image} alt={props.name}/>
  );
}


export default GameImages;