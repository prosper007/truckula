import React from 'react';
import classes from './Input.module.css';

const input = (props) => {
  let inputElement = null;

  switch (props.elementType) {
    case ('input'):
      inputElement = (
        <input
          value={props.value}
          onChange={props.onChange}
          className={classes.Input}
          {...props.elementConfig}
        />
      );
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
      inputElement = (
        <input
          value={props.value}
          onChange={props.onChange}
          className={classes.Input}
          {...props.elementConfig}
        />
      );

  }
  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  )

}

export default input;