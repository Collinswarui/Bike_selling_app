import React from "react";


function BikeItem({ bike }) {
    return(
        <div>
            <h3>{bike.name}</h3>
            <p>Price: ${bike.price}</p>
            <button>Add to Cart</button>
        </div>
    );
}

export default BikeItem;