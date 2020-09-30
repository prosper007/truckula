import React, { Component } from 'react';
import PageHeader from '../../components/UI/PageHeader/PageHeader';
import Input from '../../components/UI/Input/Input';
import styles from './RequestTruck.module.css';

class RequestTruck extends Component {
  textInput = {
    elementType: 'input',
    elementConfig: {
      type: 'text',
    },
    value: '',
    validation: {
      required: true
    },
    valid: false,
    touched: false,
  }

  addressForm = {
    addressLine1: { ...this.textInput },
    addressLine2: { ...this.textInput },
    city: { ...this.textInput },
    state: { ...this.textInput },
    zipCode: { ...this.textInput },
  }

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
      name: { ...this.textInput },
      email: { ...this.textInput },
      pickupLocation: { ...this.addressForm },
      dropoffLocation: { ...this.addressForm },
    }
  }

  render() {
    let formElements = [];
    for (let key in this.state.requestForm) {
      formElements.push({
        id: key,
        ...this.state.requestForm[key],
      })
    }
    let form = (
      <form>
        {formElements.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.elementType}
            elementConfig={formElement.elementConfig}
            value={formElement.value}
            invalid={!formElement.valid}
            shouldValidate={formElement.validation}
            touched={formElement.touched}
          // changed={(event) => this.inputChangedHandler(event, formElement.id)}
          />
        ))}
      </form>
    );
    return (
      <React.Fragment>
        <PageHeader>Request Truck {this.state.selectedTruck.letter}</PageHeader>
        <div className={styles.RequestForm}>
          {form}
        </div>
      </React.Fragment>
    )
  }
}

export default RequestTruck;