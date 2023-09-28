import React, { useState } from 'react';
import Hogdata from './Hogdata';

function HogCard({ hog, handleShowData }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="hogCard">
      <p>{hog.name}</p>
      <a onClick={toggleVisibility} href="JavaScript:void(0)">
        <img src={hog.image} key={hog.name} alt={hog.name} />
      </a>
      <Hogdata hog={hog} isVisible={isVisible} handleShowData={handleShowData} />
    </div>
  );
}

export default HogCard;
