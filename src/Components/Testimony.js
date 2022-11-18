import React from "react";
import "../style-sheets/testimony.css";

function Testimony(props) {
  return (
    <div className="container-testimony">
      <img className="image-testimony"
      src={require(`../images/Testimony ${props.image}.png`)}
      alt="Foto Emma"/>
      <div className="container-text">
        <p className="name-testimony">{props.name} in {props.country}</p>
        <p className="position-testimony">{props.position} at {props.company}</p>
        <p className="text-testimony">"{props.testimony}"</p>
      </div>
    </div>
  );
}

export default Testimony;