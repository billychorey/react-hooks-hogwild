import React from 'react';

function Hogdata({ hog, isVisible }) {
  return (
    <div>
      {isVisible && (
        <>
          <p>{hog.specialty}</p>
          <p>{hog.weight}</p>
          <p>{hog.greased}</p>
          <p>{hog["highest medal achieved"]}</p>
        </>
      )}
    </div>
  );
}

export default Hogdata;
