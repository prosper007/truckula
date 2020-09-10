import React from 'react';
import NavBar from './components/Navigation/Navbar/Navbar';
import Trucks from './containers/Trucks/Trucks';

const App = (props) => {
  return (
    <React.Fragment>
      <NavBar />
      <Trucks />
    </React.Fragment>
  );
}

export default App;
