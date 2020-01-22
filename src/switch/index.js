import React, {useState, useEffect} from 'react';
import './index.scss';

const Switch = (props) => {
  const [state, switchState] = useState(props.default ? props.default : false);

  useEffect(() => {
    props.handleSwitch(state);
  });

  return (
    <div className="switch">
      <label htmlFor={props.id}>{props.label}</label>
      <input type="checkbox"
        id={props.id}
        value={state}
        onChange={() => switchState(!state)}
        checked={state}
        disabled={props.disabled}
      />
      <label htmlFor={props.id} className="switch__box">
        <span className="switch__slider"></span>
      </label>
    </div>
  );
}

export default Switch;
