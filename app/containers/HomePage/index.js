/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useState } from 'react';
import StyledHomePage from './styles';

export function HomePage() {
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [lastTranslateX, setLastTranslateX] = useState(0);
  const [lastTranslateY, setLastTranslateY] = useState(0);
  const [originalX, setOriginalX] = useState(0);
  const [originalY, setOriginalY] = useState(0);
  const [isOverlap, setIsOverlap] = useState(false);

  const handleMouseDown = event => {
    const { clientX, clientY } = event;
    setOriginalX(clientX);
    setOriginalY(clientY);
  };

  const handleMouseUp = event => {
    const { clientX, clientY } = event;

    const x = clientX - originalX + lastTranslateX;
    const y = clientY - originalY + lastTranslateY;
    setTranslateX(x);
    setTranslateY(y);
    setOriginalX(0);
    setOriginalY(0);
    setLastTranslateX(x);
    setLastTranslateY(y);
    if (x < -100 && x > -400 && y < 150 && y > -150) {
      setIsOverlap(true);
    } else setIsOverlap(false);
  };

  return (
    <StyledHomePage>
      <div className="box" />
      <button
        className={`circle ${isOverlap ? 'red' : 'green'}`}
        draggable="true"
        onDragStart={e => handleMouseDown(e)}
        onDragEnd={e => handleMouseUp(e)}
        style={{ transform: `translate(${translateX}px, ${translateY}px)` }}
        type="button"
      />
    </StyledHomePage>
  );
}

export default HomePage;
