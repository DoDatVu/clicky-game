import React, {Component} from 'react';
import GameImages from "../game-images";
import people from "../../people";

class GameContainer extends Component {
  render() {
    return (
      <div>
        {people.map(person => (
          <GameImages
            key={person.id}
            id={person.id}
            image={person.image}
            name={person.name}
          />
        ))}
      </div>
    );
  }
}


export default GameContainer;