import React from "react";
import { movies } from "../data";
import { getByTitle } from "@testing-library/react";
import { v4 as uuidv4 } from "uuid";

function Movies() {
  const moviesList = movies.map(({ title, time, genres }) => {
    return (
      <div key={uuidv4()}>
        <p>{title}</p>
        <p>{time}</p>
        <ul>
          {Object.entries(genres).map((genre) => (
            <li key={uuidv4()}>{genre[1]}</li>
          ))}
        </ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Movies Page</h1>
      {moviesList}
    </div>
  );
}

export default Movies;
