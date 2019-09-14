import React from "react";
import styled from "styled-components";

const CardContent = props => {
  return (
    <div>
      <h4>{props.name}</h4>
      <img src={props.Img} />
      <h4>{props.email}</h4>
      <h4>{props.gender}</h4>
    </div>
  );
};

export default CardContent;
