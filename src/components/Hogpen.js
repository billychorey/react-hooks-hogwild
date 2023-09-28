import React from 'react';
import HogCard from './HogCard';

function Hogpen({ hogs }) {
    return (
    <div className="hogPen">
        {hogs.map((hog) => (
        <HogCard key={hog.name} hog={hog} />
        ))}
    </div>
    );
}

export default Hogpen;
