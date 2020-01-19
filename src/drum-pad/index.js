import React, {useState, useEffect} from 'react';
import './index.scss';

const DrumPad = (props) => {
  const [active, activate] = useState('');

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return function() {
      document.removeEventListener('keydown', handleKeyPress);
    }
  });

  const handleKeyPress = (event) => {
    if(props.data.keyCode === event.keyCode) {
      playSound(event.key.toUpperCase());
    }
  }

  const handleClick = (audio) => {
    playSound(audio);
  }

  const playSound = (audio) => {
    const sound = document.getElementById(audio);
    if(sound) {
      sound.currentTime = 0;
      activate('active');
      sound.play();
      setTimeout(() => activate(''), 100);
    }
  }

  return (
    <div id={props.data.id}
      className={`drum-pad ${active}`}
      onClick={() => handleClick(props.data.key)}
    >
      <audio className="clip" id={props.data.key} src={props.data.audio}></audio>
      {props.data.key}
    </div>
  );
}

export default DrumPad;
