import './styles/App.css';
import Header from './components/Header';
import Image from './components/Image';
import image1 from './imgs/A.D.-2.222.webp';
import image2 from './imgs/ad-2222-undrcty.webp';
import Levels from './components/Levels';
import { useState } from 'react';

import character1Level1 from './imgs/zoidberg.png'
import character2Level1 from './imgs/patrick-star.webp';
import character3Level1 from './imgs/spider-man.png';

import character1Level2 from './imgs/roger.webp'
import character2Level2 from './imgs/mikasa-ackerman.webp';
import character3Level2 from './imgs/jake.png';

import level1 from "./imgs/A.D.-2.222.webp";
import level2 from './imgs/ad-2222-undrcty.webp';

function App() {
  const [level, setLevel] = useState(image1);
  const [startScreen, setStartScreen] = useState('levels-background');
  const [interval, setIntervalState] = useState(0);

  const [characterSelection, setCharacterSelection] = useState([]);

  let seconds = 0;
  
  const timer = () => {
    let timer;
    function runTimer() {
      timer = setInterval(upTimer, 1000);
      setIntervalState(timer);
    }
    
    const stopTimer = () =>  {
      seconds = 0;
      document.querySelector('.timer').innerHTML = 0 + ":" + 0 + ":" + 0;
      clearInterval(interval);
    }

      return { stopTimer, runTimer };
  }

  const upTimer = () => {

      ++seconds;

      let hour = Math.floor(seconds / 3600);

      let minute = Math.floor((seconds - hour * 3600) / 60);

      let updSecond = seconds - (hour * 3600 + minute * 60);

      document.querySelector('.timer').innerHTML = hour + ":" + minute + ":" + updSecond;
  }

  const levelsInfo = [
    {
        id: 'level0',
        levelName: 'AD 2222 - UNDRCTY',
        creator: 'by Egor Klyuchnyk',
        image: level1,
        name1: 'Zoidberg',
        name2: 'Patrick Star',
        name3: 'Spider-Man',
        character1: character1Level1,
        character2: character2Level1,
        character3: character3Level1,
        cartoon1: 'Futurama',
        cartoon2: 'Sponge Bob',
        cartoon3: 'Marvel',
        btnLevel: 'level1-btn',        
      },
      {
        id: 'level1',
        levelName: 'Cyberpunk Underground 🔞',
        creator: 'by Egor Klyuchnyk',
        image: level2,
        name1: 'Roger Smith',
        name2: 'Mikasa Ackerman',
        name3: 'Jake',
        character1: character1Level2,
        character2: character2Level2,
        character3: character3Level2,
        cartoon1: 'American Dad',
        cartoon2: 'Attack On Titan',
        cartoon3: 'Adventure Time',
        btnLevel: 'level2-btn',
        characterPosition: {
          characterPosition1: '484px -700px 0 0',
          characterPosition2: '-75px -332px 0 0',
          characterPosition3: '1012px -311px 0 0',
        },
    },

  ]

  const charactersPosition = {
    charactersPosition1: {
      characterPosition1: '484px -700px 0 0',
      characterPosition2: '-75px -332px 0 0',
      characterPosition3: '1012px -311px 0 0',
      characterSize1: {
        width: '272px',
        height: '292px'
      },
      characterSize2: {
        width: '132px',
        height: '115px',
      },
      characterSize3: {
        width: '119px',
        height: '115px',
      },
    },
    charactersPosition2: {
      characterPosition1: '10px 88px 0px 0px',
      characterPosition2: '1271px 606px 0px 0px',
      characterPosition3: '18px -501px 0px 0px',
      characterSize1: {
        width: '118px',
        height: '156px'
      },
      characterSize2: {
        width: '121px',
        height: '245px',
      },
      characterSize3: {
        width: '91px',
        height: '88px',
      },
    },
  }

  return (
    <div>
      <Header characterSelection={characterSelection} upTimer={upTimer} levelsInfo={levelsInfo} level={level} setStartScreen={setStartScreen}  timer={timer}/>
      <Image setCharacterSelection={setCharacterSelection} image={level} height={level === image2 ? 3395 : 3150} charactersPosition={level === image1 ? charactersPosition.charactersPosition1 : charactersPosition.charactersPosition2}/>
      <Levels setLevel={setLevel} upTimer={upTimer} levelsInfo={levelsInfo} startScreen={startScreen} setStartScreen={setStartScreen} timer={timer}/>
    </div>
  );
}

export default App;