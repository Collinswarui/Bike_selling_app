import React from 'react';
import { useParams } from 'react-router-dom';


const BikeDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Bike Details</h2>
      <p>Bike ID: {id}</p>
    </div>
  );
};

export default BikeDetails;