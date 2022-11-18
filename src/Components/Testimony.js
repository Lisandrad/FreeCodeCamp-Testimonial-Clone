import React from "react";
import "../style-sheets/testimony.css";

function Testimony(props) {
  return (
    <div className="container-testimony">
      <img className="image-testimony"
      src={require(`../images/Testimony ${props.image}.png`)}
      alt="Foto Emma"/>
      <div className="container-text">
        <p className="name-testimony"><strong>{props.name}</strong> in {props.country}</p>
        <p className="position-testimony">{props.position} at <strong>{props.company}</strong></p>
        <p className="text-testimony">"{props.testimony}"</p>
      </div>
    </div>
  );
}

export default Testimony;