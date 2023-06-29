import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
//import BikeItem from "./BikeItem";

const bikes = [
    { id: 1, name: "Mountain Bike", price:500 },
    { id: 2, name: "City Bike", price: 800 },
    { id: 3, name: "Road Bike", price: 350 },
];

function BikeList() {
    return (
        <div className="container">
        <h2 className="mt-4 mb-3">Bikes for Sale</h2>
        <ul className="list-group">
          {bikes.map((bike) => (
            <li key={bike.id} className="list-group-item d-flex justify-content-between align-items-center">
              <a href={`/bike/${bike.id}`} className="text-decoration-none">{bike.name}</a>
              <span className="badge bg-primary rounded-pill">Price: ${bike.price}</span>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default BikeList;