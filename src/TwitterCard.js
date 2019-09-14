import React, { useEffect, useState } from "react";
import axios from "axios";
import CardContent from "./CardContent";

const TwitterCard = () => {
  const [people, setPeople] = useState([]);
  const [error, setErrorState] = useState("");

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/")
      .then(response => {
        setPeople(response.data.results);
      })
      .catch(error => {
        setErrorState("Error 404");
      });
  }, []);

  return (
    <div className="characters">
      {error && <p>{error}</p>}
      {people.map(character => {
        return (
          <CardContent
            key={character}
            name={character.name.first}
            Img={character.picture.large}
            email={character.email}
            gender={character.gender}
          />
        );
      })}
    </div>
  );
};
export default TwitterCard;
