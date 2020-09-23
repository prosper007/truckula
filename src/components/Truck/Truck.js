import React from 'react';
import styles from './Truck.module.css';
import { Link } from 'react-router-dom';

const Truck = (props) => {
  return (
    <div className={styles.Truck}>
      <h2>Truck {props.truckLetter}</h2>
      <span className={styles.TruckDeet}><b>Type:</b>  {props.truckName}</span>
      <span className={styles.TruckDeet}><b>Dimensions:</b>  {props.truckDimensions.lengthInches}'' x {props.truckDimensions.widthInches}''</span>
      <span className={styles.TruckDeet}><b>Location:</b>  {props.truckLocation.city}, {props.truckLocation.state}</span>
      <span className={styles.TruckDeet}><b>Has Liftgate: </b>  {props.truckHasLiftGate ? 'Yes' : 'No'}</span>
      <span className={styles.TruckDeet}><b>Description:</b>  {props.truckDescription}</span>
      <Link to={`request-truck/${props.truckLetter}`} className={styles.RequestButton}>Request Truck</Link>
    </div>
  )
}

export default Truck;