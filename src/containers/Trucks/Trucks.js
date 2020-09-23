import React, { Component } from 'react';
import styles from './Trucks.module.css';
import Truck from '../../components/Truck/Truck';
import PageHeader from '../../components/UI/PageHeader/PageHeader';
import availableTrucks from '../../seedTrucks';

class Trucks extends Component {
  state = {
    availableTrucks: []
  }

  componentDidMount() {
    this.setState({ availableTrucks });
  }

  getAvailableTrucks = () => {
    return this.state.availableTrucks.map((truck) => {
      return (
        <Truck
          key={truck.letter}
          truckName={truck.name}
          truckLetter={truck.letter}
          truckDimensions={truck.dimensions}
          truckLocation={truck.location}
          truckDescription={truck.description}
          truckHasLiftGate={truck.hasLiftGate}
        />
      );
    })
  }

  render() {
    return (
      <React.Fragment>
        <PageHeader>Available Trucks</PageHeader>
        <div className={styles.TrucksContainer}>
          {this.getAvailableTrucks()}
        </div>
      </React.Fragment>
    )
  }
}

export default Trucks;