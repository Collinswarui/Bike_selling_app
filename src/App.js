import React from 'react';
import  { BrowserRouter as Router,  Routes,Route} from 'react-router-dom';
import './css/style.css';
import './components/navbar/navbar.css';
import backgroundImage from './images/Bike6.jpg';
import  BikeList from "./components/BikeList/BikeList";
import BikeDetails from "./components/BikeDetails/BikeDetails";
import Cart from "./components/Cart/Cart";
import Navbar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';



import mountainBikeImage from './images/Bike3.jpeg';
import cityBikeImage from './images/bmw.jpg';
import roadBikeImage from './images/kawa2.jpg';

const bikes = [
  { id: 1, name: "Mountain Bike", Engine_capacity:'998 cc', Top_Speed:'299 (km/h)', price: 5000, image: mountainBikeImage },
  { id: 2, name: "BMW S 1000 RR", Engine_capacity:'999 cc', Top_Speed:'303 (km/h)', price: 6000, image: cityBikeImage },
  { id: 3, name: "Ninja H2 Kawasaki", Engine_capacity:'998 cc', Top_Speed:'400 (km/h)', price: 8500, image: roadBikeImage },
];


function App() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
   
    
  };

  return (
    <Router>
      <div className="landing-page" style={backgroundStyle}>
        <Navbar />
        <div>
          <h1 className="display-4 text-center text-sm-center text-md-center text-lg-center custom-heading">SwiftRider</h1>

          <Routes>
            {/* Render the BikeList component */}
            <Route path="/" element={<BikeList bikes={bikes} />} />
            
            {/* Render the BikeDetails component */}
            <Route path="/bikes/:id" element={<BikeDetails bikes={bikes} />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;