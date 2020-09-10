import React from 'react';
import styles from './Truck.module.css';

const Truck = (props) => {
  return (
    <div className={styles.Truck}>
      <h3>Truck {props.truckLetter}</h3>
      <span><b>Type:</b>  {props.truckName}</span>
      <span><b>Dimensions:</b>  {props.truckDimensions.lengthInches}'' x {props.truckDimensions.widthInches}''</span>
      <span><b>Location:</b>  {props.truckLocation.city}, {props.truckLocation.state}</span>
      <span><b>Has Liftgate: </b>  {props.truckHasLiftGate ? 'Yes' : 'No'}</span>
      <span><b>Description:</b>  {props.truckDescription}</span>
      <h4>Request Truck</h4>
    </div>
  )
}

export default Truck;