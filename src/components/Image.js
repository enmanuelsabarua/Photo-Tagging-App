import { useState, useEffect } from 'react';
import '../styles/Image.css';
import image1 from '../imgs/A.D.-2.222.webp';
import { db } from '../firebase'
import { getDocs, collection, addDoc } from 'firebase/firestore';

export default function Image({ setStartScreen, setCounter, counter, time, image, height, charactersPosition, setCharacterSelection, collections }) {
  const [mousePos, setMousePos] = useState({});
  const [userSelection, setUserSelection] = useState('');
  const [timesList, setTimeList] = useState([]);
  const [name, setName] = useState('');

  const timesCollectionRef = collection(db, collections);

  const getTimeList = async () => {
    try {
      const data = await getDocs(timesCollectionRef);
      const filteredData = data.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTimeList(filteredData);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getTimeList();

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
  });

  const onSubmitTime = async () => {
    try {
      await addDoc(timesCollectionRef, {
        name: name,
        time: time
      });

      getTimeList();
    } catch (error) {
      console.error(error);
    }
  }

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

  const handleFinishedLevel = () => {
    document.querySelectorAll('.level-card').forEach(level => level.classList.add('show-level'));
    setStartScreen('levels-background');
    onSubmitTime();
    setCounter(3);
    setCharacterSelection([]);
  }

  const showSortedTimes = (timesList) => {
    const times = [...timesList];
    const arrOfSeconds = [];

    for (let i = 0; i < times.length; i++) {
      let a = times[i].time.split(':');

      let seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
      arrOfSeconds.push(seconds);
    }


    let temp, swapped, temp2;

    swapped = false;

    for (let i = 0; i < times.length; i++) {
      for (let j = 0; j < times.length - 1; j++) {

        if (arrOfSeconds[j] > arrOfSeconds[j + 1]) {

          temp2 = arrOfSeconds[j];
          arrOfSeconds[j] = arrOfSeconds[j + 1];
          arrOfSeconds[j + 1] = temp2;

          temp = times[j];
          times[j] = times[j + 1];
          times[j + 1] = temp;
          swapped = true;
        }
      }

      if (swapped === false) break;
    }

    return times;
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
          <div className='selection' style={{ top: mousePos.y - 50, left: mousePos.x - 50 }}></div>
          <div className='drop-down-selection' style={{ top: mousePos.y + 40, left: mousePos.x + 30 }} onClick={(e) => verifySelection(e)}>
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
        <div className="times">
          <h2>Leaderboard</h2>
          <ol>
            {showSortedTimes(timesList).map((time, index) => {
              if (index < 10) {
                return <li key={time.name}>{time.name}: {time.time}</li>
              }

              return null;
            })}
          </ol>
        </div>

        <div className='current-time'>
          <h2>Your Time:</h2>
          <input type="text" placeholder='Your nickname' id='name' onChange={e => setName(e.target.value)} />
          <p>{time}</p>

          <button type='button' className='continue-btn' onClick={handleFinishedLevel}>Continue</button>

        </div>
      </div>
    </main>
  );
}