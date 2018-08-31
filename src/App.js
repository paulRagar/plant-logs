import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Conservatory from './components/Conservatory'
import PlantPot from './components/PlantPot'
import AddPlant from './components/AddPlant'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/conservatory' component={Conservatory} />
          <Route path="/plant-pot/:plantId" component={PlantPot} />
          <Route path="/add-plant" component={AddPlant} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
