import React, { useState } from 'react';
import Hogdata from './Hogdata';

function HogCard({ hog }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="hogCard">
      <h3>{hog.name}</h3>
      <a onClick={toggleVisibility} href="JavaScript:void(0)">
        <img src={hog.image} key={hog.name} alt={hog.name} />
      </a>
      {isVisible && <Hogdata hog={hog} />}
    </div>
  );
}

export default HogCard;
