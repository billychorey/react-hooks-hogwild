import React, { useState } from 'react';
import HogCard from './HogCard';

function Hogpen({ hogs }) {
  const [showGreased, setShowGreased] = useState(false);
  const [sortedHogs, setSortedHogs] = useState(null); // Initialize with null
  const [isSorted, setIsSorted] = useState(false); // Track if hogs are sorted

  const toggleGreased = () => {
    setShowGreased(!showGreased);
  };

  const sortHogsBySize = () => {
    const sorted = [...hogs].sort((a, b) => a.weight - b.weight);
    setSortedHogs(sorted);
    setIsSorted(true); // Set to true when sorted
  };

  const undoSortBySize = () => {
    setSortedHogs(null); // Clear sorted hogs
    setIsSorted(false); // Reset the sorted flag
  };

  const filteredHogs = showGreased
    ? hogs.filter((hog) => hog.greased)
    : isSorted
    ? sortedHogs
    : hogs; // Use sortedHogs if sorted, else use original hogs

  return (
    <div className="hogPen">
        <div className="nav">
            <button onClick={sortHogsBySize}>Sort By Size</button>
            {isSorted && <button onClick={undoSortBySize}>Undo Sort</button>}
            <button onClick={toggleGreased}>
                {showGreased ? 'Show All Hogs' : 'Show Greased Hogs'}
            </button>
        </div>
      {filteredHogs.map((hog) => (
        <div key={hog.name}>
          <HogCard hog={hog} />
        </div>
      ))}
    </div>
  );
}

export default Hogpen;
