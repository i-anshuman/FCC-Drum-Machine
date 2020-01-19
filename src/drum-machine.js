import React from 'react';
import './drum-machine.scss';

import PadBank from './pad-bank';

function DrumMachine() {
  return (
    <main className="wrapper">
      <div className="drum-machine" id="drum-machine">
        <div className="drum-machine__logo">
          <span>FCC&nbsp;<i className="fa fa-free-code-camp"></i></span>
        </div>
        <PadBank bank='bankOne'/>
      </div>
    </main>
  );
}

export default DrumMachine;
