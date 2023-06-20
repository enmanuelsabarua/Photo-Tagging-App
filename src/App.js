import './styles/App.css';
import Header from './components/Header';
import Image from './components/Image';
import image1 from './imgs/A.D.-2.222.webp';
import image2 from './imgs/ad-2222-undrcty.webp';
import Levels from './components/Levels';
import { useState } from 'react';

function App() {
  const [level, setLevel] = useState(image1);

  let seconds = 0

  function upTimer() {

      ++seconds;

      let hour = Math.floor(seconds / 3600);

      let minute = Math.floor((seconds - hour * 3600) / 60);

      let updSecond = seconds - (hour * 3600 + minute * 60);

      document.querySelector('.timer').innerHTML = hour + ":" + minute + ":" + updSecond;
  }

  return (
    <div>
      <Header upTimer={upTimer}/>
      <Image image={level} height={level === image2 ? 3858 : 3708}/>
      <Levels setLevel={setLevel} upTimer={upTimer}/>
    </div>
  );
}

export default App;