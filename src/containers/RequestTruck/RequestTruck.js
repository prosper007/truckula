import React, { Component } from 'react';
import PageHeader from '../../components/UI/PageHeader/PageHeader';
// import Input from '../../components/UI/Input/Input';
import styles from './RequestTruck.module.css';

class RequestTruck extends Component {
  state = {
    selectedTruck: {
      name: 'Small Straight',
      letter: 'B',
      dimensions: {
        lengthInches: 47,
        widthInches: 23
      },
      location: {
        city: "Kevin's Jewett Room",
        state: 'The Pough'
      },
      hasLiftGate: false,
      description: "This truck is old. It's as old as Kevin."
    },
    requestForm: {

    }
  }

  render() {
    let form = (
      <form>

      </form>
    );
    return (
      <React.Fragment>
        <PageHeader>Request Truck {this.state.selectedTruck.letter}</PageHeader>
        <div className={styles.RequestForm}>

        </div>
      </React.Fragment>
    )
  }
}

export default RequestTruck;