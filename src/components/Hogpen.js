import React, { useState } from 'react';
import HogCard from './HogCard';

function Hogpen({ hogs }) {
  const [showGreased, setShowGreased] = useState(false);

  const toggleGreased = () => {
    setShowGreased(!showGreased);
  };

  const filteredHogs = showGreased ? hogs.filter((hog) => hog.greased) : hogs;

  return (
    <div className="hogPen">
      <button onClick={toggleGreased}>
        {showGreased ? 'Show All Hogs' : 'Show Greased Hogs'}
      </button>
      {filteredHogs.map((hog) => (
        <div key={hog.name}>
          <HogCard hog={hog} />
        </div>
      ))}
    </div>
  );
}

export default Hogpen;
