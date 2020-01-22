import React from 'react';
import './index.scss';
import banks from '../banks.js';
import DrumPad from '../drum-pad';

const PadBank = (props) => {
  return (
    <div className="pad-bank">
      {
        banks[props.bank].map((pad, i) => {
          return (
            <DrumPad key={i}
              data={pad}
              power={props.power}
              volume={props.volume}
              handleOnPlay={(status) => {
                status && props.padPlayed(pad.id)
              }}
            />
          )
        })
      }
    </div>
  );
}

export default PadBank;
