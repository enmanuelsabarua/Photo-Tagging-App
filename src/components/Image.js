import { useState, useEffect } from 'react';
import '../styles/Image.css';
import image1 from '../imgs/A.D.-2.222.webp';

export default function Image({setCounter, counter, time, image, height, charactersPosition, setCharacterSelection }) {
    const [mousePos, setMousePos] = useState({});
    const [userSelection, setUserSelection] = useState('');

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY + window.scrollY });
    };

    window.addEventListener('click', handleMouseMove);

    return () => {
      window.removeEventListener(
        'click',
        handleMouseMove
      );
    };
  }, []);

  const showSelectionMenu = (e) => {
    const selectionMenu = document.querySelector('.selection-menu');

    selectionMenu.classList.toggle('hide');

    setUserSelection(e.target.classList[1]);
  }
  
  const verifySelection = (e) => {
    const character = e.target.classList[0];;

    const foundMessage = document.querySelector('.found-message');
    const missMessage = document.querySelector('.miss-message');

    if (userSelection === character) {
      setCounter(counter - 1);
      missMessage.classList.remove('show-message');
      
      foundMessage.classList.add('show-message');
      setTimeout(() => {
        foundMessage.classList.remove('show-message');
      }, 3000);

      if (character === 'character1-selection') {
        setCharacterSelection(prevState => [...prevState, 0]);
      } else if (character === 'character2-selection') {
        setCharacterSelection(prevState => [...prevState, 1]);
      } else if (character === 'character3-selection') {
        setCharacterSelection(prevState => [...prevState, 2]);
      }
      
    } else {
      foundMessage.classList.remove('show-message');

      missMessage.classList.add('show-message');
      setTimeout(() => {
        missMessage.classList.remove('show-message');
      }, 3000);
    }
  } 

  const hideFinishedTime = () => {
    setCounter(3);
    setCharacterSelection([]);
  }
    
    return (
        <main>
            <div className="img" style={{
                backgroundImage: `url(${image}`,
                height: `${height}px`
            }}
            onClick={(e) => showSelectionMenu(e)}
            >

            <div className="found-message message">
              <p>Character Found, great!</p>
            </div>

            <div className="miss-message message">
              <p>Keep looking!</p>
            </div>

            <div className='selection-menu hide'>
                <div className='selection' style={{top: mousePos.y - 50, left: mousePos.x - 50}}></div>
                <div className='drop-down-selection' style={{top: mousePos.y + 40, left: mousePos.x + 30}} onClick={(e) => verifySelection(e)}>
                    <p className="character1-selection">{image === image1 ? 'Zoidberg' : 'Roger Smith'}</p>
                    <p className="character2-selection">{image === image1 ? 'Patrick Star' : 'Mikasa Ackerman'}</p>
                    <p className="character3-selection">{image === image1 ? 'Spider-Man' : 'Jake'}</p>
                </div>
            </div>


            <div className="character1 character1-selection" style={{
              margin: `${charactersPosition.characterPosition1}`, 
              width: `${charactersPosition.characterSize1.width}`,
              height: `${charactersPosition.characterSize1.height}`,
              }}></div>
            <div className="character2 character2-selection" style={{
              margin: `${charactersPosition.characterPosition2}`,               
              width: `${charactersPosition.characterSize2.width}`,
              height: `${charactersPosition.characterSize2.height}`,
              }}></div>
            <div className="character3 character3-selection" style={{
              margin: `${charactersPosition.characterPosition3}`,               
              width: `${charactersPosition.characterSize3.width}`,
              height: `${charactersPosition.characterSize3.height}`,
              }}></div>
          </div>

          <div className={`finished-time ${counter ? '' : 'show-finished-time'}`}>
            <h2>Your Time:</h2>
            <p>{time}</p>

            <button type='button' className='continue-btn' onClick={hideFinishedTime}>Continue</button>
          </div>
        </main>
    );
}