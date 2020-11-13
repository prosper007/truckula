import React from 'react';
import classes from './Input.module.css';

const getInput = (props) => {
  let defaultInput = (
    <input
      name={props.name}
      defaultValue={props.value}
      onChange={props.onChange}
      className={classes.Input}
      {...props.elementConfig}
    />
  );

  let inputElement;

  switch (props.elementType) {
    case ('input'):
      inputElement = defaultInput;
      break;
    // case ('textarea'):
    //   inputElement = (

    //   );
    //   break;
    // case ('select'):
    //   inputElement = (

    //   );
    //   break;
    default:
      inputElement = defaultInput;
  }
  return inputElement;
}
const input = (props) => {
  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {getInput(props)}
    </div>
  )
}

export default input;