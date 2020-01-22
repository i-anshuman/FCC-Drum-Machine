import React, {useState} from 'react';
import './drum-machine.scss';

import PadBank from './pad-bank';
import ControlPanel from './control-panel';

function DrumMachine() {
  const [bank, switchBank] = useState('bankOne');
  const [power, switchPower] = useState(true);
  const [volume, tuneVolume] = useState(0.3);
  const [pad, handlePad] = useState(false);

  const handleSettings = (settings) => {
    switchBank(settings.bank);
    switchPower(settings.power);
    tuneVolume(settings.volume);
  }

  return (
    <main className="wrapper">
      <div className="drum-machine" id="drum-machine">
        <div className="drum-machine__logo">
          <span>FCC&nbsp;<i className="fa fa-free-code-camp"></i></span>
        </div>
        <PadBank bank={bank}
          power={power}
          volume={volume}
          padPlayed={(pad) => {
            handlePad(pad)
            setTimeout(() => handlePad(false), 5000)
          }}
        />
        <ControlPanel handleControlPanel={(settings) => handleSettings(settings)}
          padPlayed={pad}
        />
      </div>
    </main>
  );
}

export default DrumMachine;
