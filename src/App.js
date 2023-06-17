import './styles/App.css';
import Header from './components/Header';
import Image from './components/Image';
import image1 from './imgs/ad-2222-undrcty.webp';
import Levels from './components/Levels';

function App() {
  return (
    <div>
      <Header />
      <Image image={image1} height={3858}/>
      <Levels />
    </div>
  );
}

export default App;