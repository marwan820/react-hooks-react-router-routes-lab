import React from "react";
import { actors } from "../data";
import { v4 as uuidv4 } from "uuid";


function Actors() {
  console.log("Actors", actors);

  const actorsList = actors.map(({ name, movies }) => {
    return (
      <div key={uuidv4()}>
        <p>{name}</p>
        <ul>
          {Object.entries(movies).map((movie) => {
            return(
            <li key={uuidv4()}>{movie[1]}</li>);
  })}
        </ul>
      </div>
    );
  });

  console.log(actorsList)

  return (
    <div>
      <h1>Actors Page</h1>
      {actorsList}
    </div>
  );
}

export default Actors;
