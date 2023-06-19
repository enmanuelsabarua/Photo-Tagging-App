import './styles/App.css';
import Header from './components/Header';
import Image from './components/Image';
import image1 from './imgs/A.D.-2.222.webp';
import image2 from './imgs/ad-2222-undrcty.webp';
import Levels from './components/Levels';
import { useState } from 'react';

function App() {
  const [level, setLevel] = useState(image1);

  return (
    <div>
      <Header />
      <Image image={level} height={level === image2 ? 3858 : 3708}/>
      <Levels setLevel={setLevel}/>
    </div>
  );
}

export default App;