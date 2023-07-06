import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import './Bikelist.css'
//import BikeDetails from "../BikeDetails/BikeDetails";
import mountainBikeImage from '../../images/Bike3.jpeg';
import cityBikeImage from '../../images/bmw.jpg';
import roadBikeImage from '../../images/kawa2.jpg';

const bikes = [
  { id: 1, name: "Mountain Bike", Engine_capacity:'998 cc', Top_Speed:'299 (km/h)', price: 5000, image: mountainBikeImage },
  { id: 2, name: "BMW S 1000 RR", Engine_capacity:'999 cc', Top_Speed:'303 (km/h)', price: 6000, image: cityBikeImage },
  { id: 3, name: "Ninja H2 Kawasaki", Engine_capacity:'998 cc', Top_Speed:'400 (km/h)', price: 8500, image: roadBikeImage },
];

function BikeList({ bikes, addToCart }) {

  const [searchQuery, setSearchQuery] = useState("");
  const filteredBikes = bikes.filter(bike =>
    bike.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
    };

  return (
    <div className="container">
      <h2 className="mt-4 mb-3">Bikes for Sale</h2>
      {/* Search input*/}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search bikes..."
          value={searchQuery}
          onChange={handleSearchChange}
        />

      </div>
      <ul className="list-group">
        {bikes.map((bike) => (
          <li key={bike.id} className="list-group-item d-flex justify-content-between align-items-center">
            {/* Image */}
            <img src={bike.image} alt={bike.name} style={{ width: "100px", height: "100px", marginRight: "10px" }} />
            <Link to={`/bikes/${bike.id}`} className="text-decoration-none">
              {bike.name}
            </Link>
            <span className="badge bg-primary rounded-pill">Price: ${bike.price}</span>
            <button onClick={() => addToCart(bike)}>Add toCart</button>
          </li>
        ))}
      </ul>

      {/* Add BikeDetails component and pass the bikes array as a prop */}
      {/* <BikeDetails bikes={bikes} /> */}
    </div>
  );
}

export default BikeList;