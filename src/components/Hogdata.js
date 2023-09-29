import React from 'react';

function Hogdata({ hog }) {
  return (
    <div className="hogData">
      <p>My specialty is: {hog.specialty}</p>
      <p>This is my weight: {hog.weight} lbs.</p>
      <p>{hog.greased}</p>
      <p>I have been awarded the honor of: {hog["highest medal achieved"]}</p>
    </div>
  );
}

export default Hogdata;
