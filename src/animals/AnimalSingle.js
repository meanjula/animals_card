import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

function AnimalSingle(props) {
  let { animal } = useParams();
  let history = useHistory();
  console.log(history);
  // const [animalInfo, setAnimalInfo] = useState("");

  const url = `/proxy/https://en.wikipedia.org/wiki/dog`;

  const getAnimals = () => {
    //promise.then(call back fun)
    axios
      .get(url)
      .catch((error) => console.log(error))
      .then((res) => {
        const fetches = res;

        console.log(fetches);
      });
  };

  useEffect(() => {
    getAnimals();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="animal-single">
      <h3>This is page for {animal}</h3>
      <img
        src={`https://source.unsplash.com/1600x900/?${animal}`}
        alt={animal}
      />
      {/* <p>{animalInfo}</p> */}
      <button onClick={() => history.goBack()}>Back to animals</button>
    </div>
  );
}

export default AnimalSingle;
