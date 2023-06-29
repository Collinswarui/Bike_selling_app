import React from 'react';
import  { BrowserRouter as Router,  Routes,Route} from 'react-router-dom';
import  BikeList from "./components/BikeList/BikeList";
import BikeDetails from "./components/BikeDetails/BikeDetails";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Router>
      <div>
        <h1 className='dispaly-4 text-center'>Bike Selling Application</h1>

        <Routes>
          <Route exact path="/" element={<BikeList />} />
          <Route path="/bike/:id" element={<BikeDetails />} />
          <Route path="/cart" element={<Cart />}/>
        </Routes>
        
      </div>
      </Router>
  );
}

export default App;