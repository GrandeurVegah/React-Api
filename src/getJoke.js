import React, { useState } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";

export default function Joke() {
  // setting up states
  const [joke, setJoke] = useState("");
  const [img, setImg] = useState("");
  const [num, setNum] = useState(0);

  // getting the joke using axios
  async function getJoke() {
    setNum(num + 1);
    const url = "https://api.chucknorris.io/jokes/random";
    const results = await axios.get(url);
    // setting jokes to variable

    setJoke(results.data.value);
    setImg(results.data.icon_url);
  }

  const displayJoke = () => {
    if (joke === "") {
      return <></>;
    } else {
      return <div>{joke}</div>;
    }
  };

  return (
    <div>
      <br/>
      <div>
        <Button variant="contained" color="primary" onClick={getJoke}>
          Click for a facts
        </Button>
        <div>
          <div>{displayJoke()}</div>
          <div>
            <img src={img} alt="" />
            <div>You have rendered {num} facts</div>
          </div>
        </div>
      </div>
    </div>
  );
}
