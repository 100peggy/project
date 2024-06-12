// CabinsList.js

import React from 'react';

const CabinsList = ({ cabins }) => {
  return (
    <ul>
      {cabins.map((cabin) => (
        <li key={cabin.id}>
          <div>{cabin.name}</div>
          <div>{cabin.salty}</div>
        </li>
      ))}
    </ul>
  );
};

export default CabinsList;
