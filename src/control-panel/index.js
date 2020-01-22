import React, {useState, useEffect, useRef} from 'react';
import './index.scss';
import Switch from '../switch';

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

const ControlPanel = (props) => {
  const [bank, switchBank] = useState('bankOne');
  const [power, switchPower] = useState(true);
  const [volume, tuneVolume] = useState(0.3);
  const [banner, handleBanner] = useState('\u00A0');

  const prevState = {
    bank: usePrevious(bank),
    volume: usePrevious(volume)
  };

  useEffect(() => {
    props.handleControlPanel({
      bank: bank,
      power: power,
      volume: volume
    });

    if(power) {
      if(bank !== prevState.bank) {
        handleBanner(bank === 'bankOne' ? 'Heater Kit' : 'Smooth Piano Kit');
      }
      else if(volume !== prevState.volume) {
        handleBanner(`Volume: ${Math.round(volume * 100)}`);
        setTimeout(() => {handleBanner('\u00A0')}, 1000);
      }
      else if(props.padPlayed !== false) {
        handleBanner(props.padPlayed);
      }
    }
    else {
      handleBanner('\u00A0');
    }
  }, [props, bank, power, volume, prevState]);

  return (
    <div className="control-panel">
      <div className="control-panel__power">
        <Switch id="power"
          label="Power"
          handleSwitch={(p) => switchPower(p)}
          default={true}
        />
      </div>
      <div className="control-panel__banner" id="display">
        {banner}
      </div>
      <div className="control-panel__volume">
        <input type="range"
          step="0.01" min="0" max="1"
          value={volume}
          onChange={(event) => tuneVolume(event.target.value)}
          disabled={!power}
        />
      </div>
      <div className="control-panel__bank">
        <Switch id="bank"
          label="Bank"
          handleSwitch={(b) => switchBank(b ? 'bankTwo' : 'bankOne')}
          disabled={!power}
        />
      </div>
    </div>
  );
}

export default ControlPanel;
