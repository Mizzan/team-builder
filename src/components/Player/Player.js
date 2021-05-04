import React from "react";
import "./Player.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faDollarSign } from "@fortawesome/free-solid-svg-icons";
const plusIcon = <FontAwesomeIcon icon={faPlus} />;
const dollarIcon = <FontAwesomeIcon icon={faDollarSign} />;

const Player = (props) => {
  const { name, club, position, email, salary, image } = props.player;
  return (
    <div className="player-card">
      <img src={image} alt="" />
      <p>
        Player Name: <strong>{name}</strong>{" "}
      </p>
      <p>
        Club Name: <strong>{club}</strong>
      </p>
      <p>
        Position: <strong>{position}</strong>
      </p>
      <p>
        Email: <strong>{email}</strong>
      </p>
      <p>
        Salary:{" "}
        <strong>
          {dollarIcon}
          {salary}
        </strong>
      </p>
      <button
        className="primary-btn primary-btn-effect"
        onClick={() => props.handleAddPlayer(props.player)}
      >
        {plusIcon} Add Player
      </button>
    </div>
  );
};

export default Player;
