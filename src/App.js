import React from 'react';
import  { BrowserRouter as Router,  Routes,Route} from 'react-router-dom';
import './css/style.css';
import backgroundImage from './images/Bike5.jpg';
import LandingPage from './pages/LandingPage';
import  BikeList from "./components/BikeList/BikeList";
import BikeDetails from "./components/BikeDetails/BikeDetails";
import Cart from "./components/Cart/Cart";

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
      <div>
     
      <h1 className="display-4 text-center text-sm-center text-md-center text-lg-center custom-heading"> SwiftRider</h1>

        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path="/bikes" element={<BikeList />} />
          <Route path="/bike/:id" element={<BikeDetails />} />
          <Route path="/cart" element={<Cart />}/>
        </Routes>
        
      </div>
      </div>
      </Router>
  );
}

export default App;