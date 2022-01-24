import React from "react";
import { useParams, useHistory } from "react-router-dom";

function AnimalSingle(props) {
  let { animal } = useParams();
  let history = useHistory();
  return (
    <div className="animal-single">
      <h3>This is page for {animal}</h3>
      <img
        src={`https://source.unsplash.com/1600x900/?${animal}`}
        alt={animal}
      />
      <button onClick={() => history.goBack()}>Back to animals</button>
    </div>
  );
}

export default AnimalSingle;
