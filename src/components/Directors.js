import React from "react";
import { directors } from "../data";
import { v4 as uuidv4 } from "uuid";

function Directors() {
  console.log("Directors:", directors);

  const directorList = directors.map(({ name, movies }) => {
    return (
      <div key={uuidv4()}>
        <p>{name}</p>
        <ul>
          {Object.entries(movies).map((movie) => (
            <li key={uuidv4()}>{movie[1]}</li>
          ))}
        </ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Directors Page</h1>
      {directorList}
    </div>
  );
}

export default Directors;
