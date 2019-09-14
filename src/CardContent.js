import React from "react";
import styled from "styled-components";

const ContentDiv = styled.div`
  width: 400px;
  max-width: 100%;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const CardContent = props => {
  return (
    <ContentDiv>
      <h4>{props.name}</h4>
      <h4>{props.email}</h4>
      <h4>{props.dob}</h4>
      <h4>{props.gender}</h4>
    </ContentDiv>
  );
};

export default CardContent;
