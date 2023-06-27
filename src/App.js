import React from 'react';
import  { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import  BikeList from ".components/BikeList/BikeList";
import BikeDetails from ".components/BikeDetails/BikeDetails";
import Cart from ".components/Cart/Cart";

function App() {
  return (
    <Router>
      <div>
        <h1>Bike selling App</h1>

        <Switch>
          <Route exact path="/" component={BikeList} />
          <Route path="/bike:id" component={BikeDetails} />
          <Route path="/cart" component={Cart}/>

        </Switch>
      </div>
      </Router>
  );
}

export default App