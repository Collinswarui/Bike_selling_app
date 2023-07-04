import React from "react";
import { useParams, useNavigate } from "react-router-dom";
//import '../../css/style.css';
import './BikeDetails.css';


const BikeDetails = ({ bikes }) => {
  const { id } = useParams();
  const bike = bikes.find((bike) => bike.id === parseInt(id));
  const navigate = useNavigate();

  if (!bike) {
    return <div>Bike not found.</div>;
  }

  const currentIndex = bikes.findIndex((bike) => bike.id === parseInt(id));
  const totalBikes = bikes.length;

  const handleNextBike = () => {
    const nextIndex = (currentIndex + 1) % totalBikes;
    navigate(`/bikes/${bikes[nextIndex].id}`);
  };

  return (
    <div className="container">
      <h2 className="mt-4 mb-3">Bike Details</h2>
      <div className="card mb-3">
        <img src={bike.image} className="card-img-top" alt={bike.name} 
        style={{ 
          width: "100%", 
          height: "auto",
           objectFit: "cover",
           borderRadius: "8px",
           boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
           }} />
        <div className="card-body">
          <h5 className="card-title">{bike.name}</h5>
          <p className="card-text">Engine Capacity: {bike.Engine_capacity}</p>
          <p className="card-text">Top Speed: {bike.Top_Speed}</p>
          <p className="card-text">Price: ${bike.price}</p>
          <p className="card-text">Bike ID: {bike.id}</p>
        </div>
      </div>
      <button
        className="arrow-button" onClick={handleNextBike}></button>
    </div>
  );
};

export default BikeDetails;