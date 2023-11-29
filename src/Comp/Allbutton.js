import React from 'react';
import './ButtonGrid.css'; // Import the CSS file for styling
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
  max-width: 800px;
  margin: 20px auto;
`;

const Button = styled(Link)`
  background-color: #3498db;
  color: #ffffff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AnimatedButton = styled(Button)`
  animation: ${fadeIn} 0.5s ease;
`;


const ButtonGrid = () => {
  // Define an array of buttons with their paths
  const buttons = [
    { id: 1, path: '/button1', label: 'Button 1' },
    { id: 2, path: '/button2', label: 'Button 2' },
    { id: 3, path: '/button3', label: 'Button 3' },
    { id: 4, path: '/button4', label: 'Button 4' },
    { id: 5, path: '/button5', label: 'Button 5' },
    { id: 6, path: '/button6', label: 'Button 6' },
    { id: 7, path: '/button7', label: 'Button 7' },
    { id: 8, path: '/button8', label: 'Button 8' },
    { id: 9, path: '/button9', label: 'Button 9' },
    { id: 10, path: '/button10', label: 'Button 10' },
    { id: 11, path: '/button2', label: 'Button 11' },
    { id: 12, path: '/button2', label: 'Button 12' },
    { id: 13, path: '/button2', label: 'Button 13' },
    { id: 14, path: '/button2', label: 'Button 14' },
    { id: 15, path: '/button2', label: 'Button 15' },
    { id: 16, path: '/button2', label: 'Button 16' },
    { id: 17, path: '/button2', label: 'Button 17' },
    { id: 18, path: '/button2', label: 'Button 18' },
    { id: 19, path: '/button2', label: 'Button 19' },
    { id: 20, path: '/button2', label: 'Button 20' },
    { id: 21, path: '/button2', label: 'Button 21' },
    { id: 22, path: '/button2', label: 'Button 22' },
    { id: 23, path: '/button2', label: 'Button 23' },
    { id: 24, path: '/button2', label: 'Button 24' },
    { id: 25, path: '/button25', label: 'Button 25' },
  ];

  return (
    <div className="button-grid">
      {buttons.map((button) => (
        <a key={button.id} href={button.path} className="custom-button">
          {button.label}
        </a>
      ))}
    </div>
  );
};

export default ButtonGrid;
