import React from 'react';
import NavBar from './Navigation/Navbar/Navbar';
import Trucks from './Trucks/Trucks';

const App = (props) => {
  return (
    <React.Fragment>
      <NavBar />
      <Trucks />
    </React.Fragment>
  );
}

export default App;
