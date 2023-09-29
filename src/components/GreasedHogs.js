import React from 'react';
import HogCard from './HogCard';

function GreasedHogs({ hogs }) {
  // Filter the hogs that are greased
  const greasedHogs = hogs.filter((hog) => hog.greased);

  return (
    <div className="greasedHogs">
      {greasedHogs.map((hog) => (
        <HogCard key={hog.name} hog={hog} />
      ))}
    </div>
  );
}

export default GreasedHogs;
