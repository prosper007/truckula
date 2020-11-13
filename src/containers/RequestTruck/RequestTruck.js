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
    addressLine1: {
      label: 'Address Line 1',
      ...this.textInput
    },
    addressLine2: {
      label: 'Address Line 2',
      ...this.textInput
    },
    city: {
      label: 'City',
      ...this.textInput
    },
    state: {
      label: 'State',
      ...this.textInput
    },
    zipCode: {
      label: 'Zip Code',
      ...this.textInput
    },
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
      name: {
        label: 'Name',
        ...this.textInput
      },
      email: {
        label: 'Email',
        ...this.textInput
      },
      pickupLocation: {
        addressLine1: {
          label: 'Address Line 1',
          ...this.textInput
        },
        addressLine2: {
          label: 'Address Line 2',
          ...this.textInput
        },
        city: {
          label: 'City',
          ...this.textInput
        },
        state: {
          label: 'State',
          ...this.textInput
        },
        zipCode: {
          label: 'Zip Code',
          ...this.textInput
        },
      },
      dropoffLocation: { ...this.addressForm },
    }
  }

  inputChangedHandler(event, inputIdentifier) {
    const updatedRequestForm = {
      ...this.state.requestForm
    };
    const updatedFormField = {
      ...updatedRequestForm[inputIdentifier]
    };
   
    if (inputIdentifier !== 'pickupLocation' && inputIdentifier !== 'dropoffLocation') {
      updatedFormField.value = event.target.value;
      updatedFormField.touched = true;
      updatedRequestForm[inputIdentifier] = updatedFormField;
    } else {
      const updatedAddressField = event.target.name;
      updatedFormField[updatedAddressField].value = event.target.value;
      updatedFormField[updatedAddressField].touched = true;      
      updatedRequestForm[inputIdentifier] = updatedFormField;
    }

    this.setState({ requestForm: updatedRequestForm });

  }

  render() {
    const nameField = { id: 'name', ...this.state.requestForm.name };
    const emailField = { id: 'email', ...this.state.requestForm.email };

    let pickupFields = [];
    for (let key in this.state.requestForm.pickupLocation) {
      pickupFields.push({
        key: "pickupLocation_" + key,
        id: "pickupLocation",
        name: key,
        ...this.state.requestForm.pickupLocation[key],
      })
    }
    let pickupInputs = pickupFields.map(pickupField => (
      <Input
        key={pickupField.key}
        name={pickupField.name}
        elementType={pickupField.elementType}
        elementConfig={pickupField.elementConfig}
        value={pickupField.value}
        label={pickupField.label}
        invalid={!pickupField.valid}
        shouldValidate={pickupField.validation}
        touched={pickupField.touched}
        onChange={(event) => this.inputChangedHandler(event, pickupField.id)}
      />
    ))

    let dropoffFields = [];
    for (let key in this.state.requestForm.dropoffLocation) {
      dropoffFields.push({
        key: "dropoffLocation_" + key,
        id: "dropoffLocation",
        name: key,
        ...this.state.requestForm.dropoffLocation[key],
      })
    }
    let dropoffInputs = dropoffFields.map(dropoffField => (
      <Input
        key={dropoffField.key}
        name={dropoffField.name}
        elementType={dropoffField.elementType}
        elementConfig={dropoffField.elementConfig}
        value={dropoffField.value}
        label={dropoffField.label}
        invalid={!dropoffField.valid}
        shouldValidate={dropoffField.validation}
        touched={dropoffField.touched}
        onChange={(event) => this.inputChangedHandler(event, dropoffField.id)}
      />
    ))
    return (
      <React.Fragment>
        <PageHeader>Request Truck {this.state.selectedTruck.letter}</PageHeader>
        <div className={styles.RequestForm}>
          <form>
            <Input
              key={nameField.id}
              name={nameField.id}
              elementType={nameField.elementType}
              elementConfig={nameField.elementConfig}
              value={nameField.value}
              label={nameField.label}
              invalid={!nameField.valid}
              shouldValidate={nameField.validation}
              touched={nameField.touched}
              onChange={(event) => this.inputChangedHandler(event, nameField.id)}
            />

            <Input
              key={emailField.id}
              name={emailField.id}
              elementType={emailField.elementType}
              elementConfig={emailField.elementConfig}
              value={emailField.value}
              label={emailField.label}
              invalid={!emailField.valid}
              shouldValidate={emailField.validation}
              touched={emailField.touched}
              onChange={(event) => this.inputChangedHandler(event, emailField.id)}
            />

            <h4>Pickup Location</h4>
            {pickupInputs}

            <h4>Dropoff Location</h4>
            {dropoffInputs}

          </form>
        </div>
      </React.Fragment>
    )
  }
}

export default RequestTruck;