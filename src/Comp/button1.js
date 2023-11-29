import React from "react";
import "./ButtonGrid.css";
import styled, { keyframes } from "styled-components";

const LoaderContainer = styled.div`
  background: linear-gradient(to right, #917173, #2a3b36, #432c52);
  height: 100vh;
`;

const Button1 = () => {
  return (
    <LoaderContainer>
      <div className="loader">
        <div style={{ "--i": 1 }}></div>
        <div style={{ "--i": 2 }}></div>
        <div style={{ "--i": 3 }}></div>
        <div style={{ "--i": 4 }}></div>
      </div>
    </LoaderContainer>
  );
};

export default Button1;
