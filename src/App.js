import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/Navigation/Navbar/Navbar';
import Trucks from './containers/Trucks/Trucks';

const App = (props) => {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Trucks} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
