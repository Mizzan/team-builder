import React from "react";
import "./AddPlayer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
const dollarIcon = <FontAwesomeIcon icon={faDollarSign} />;

const AddPlayer = (props) => {
  const players = props.salary;
  const totalSalary = players.reduce((acc, player) => acc + player.salary, 0);

  return (
    <div>
      <div>
        <h3 className="text-white text-center">
          Build your own team by your choice
        </h3>
      </div>
      <div className="player-info">
        <div className="player-cart">
          <h4>Total Player Added : {players.length}</h4>
          <h4>
            Total Player Salary : {dollarIcon} {totalSalary}
          </h4>
        </div>

        <div className="player-list">
          {players.length > 0 ? <h6>Players you have added </h6> : null}
          {players.map((player) => {
            return <span>{player.name} </span>;
          })}
        </div>
      </div>
    </div>
  );
};

export default AddPlayer;
