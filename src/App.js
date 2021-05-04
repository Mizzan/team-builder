import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Player from "./components/Player/Player";
import data from "./fakeData/data.json";
import { useState } from "react";
import { useEffect } from "react";
import AddPlayer from "./components/AddPlayer/AddPlayer";

const displayAlreadyAddedMessage = () => {
  return alert("Player already added to the list.");
};

function App() {
  const [players, setPlayers] = useState([]);
  useEffect(() => setPlayers(data), []);

  const [salary, setSalary] = useState([]);

  const handleAddPlayer = (player) => {
    if (salary.indexOf(player) === -1) {
      setSalary([...salary, player]);
    } else {
      displayAlreadyAddedMessage();
    }
  };
  return (
    <div className="container-fluid">
      <Header></Header>
      <div className="player-add">
        <AddPlayer salary={salary}></AddPlayer>
      </div>
      <div className="wrapper">
        {players.map((player) => (
          <Player
            handleAddPlayer={handleAddPlayer}
            player={player}
            key={player.id}
          ></Player>
        ))}
      </div>
      <h5>2021 &copy; All Rights Reserved.</h5>
    </div>
  );
}

export default App;
