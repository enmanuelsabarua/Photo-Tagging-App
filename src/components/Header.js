import { useEffect, useState } from 'react';
import '../styles/Header.css';
import DropDownCharacters from './DropDownCharacters';

import image1 from '../imgs/A.D.-2.222.webp';

export default function Header({time, counter, setCounter, levelsInfo, level, setStartScreen, timer, characterSelection}) {
    const [showDropDown, setShowDropDown] = useState('hide');

    useEffect(() => {
        setCounter(3);
    }, []);

    const selectOtherLevel = () => {
        setCounter(3);
        setStartScreen('levels-background');
        document.querySelectorAll('.level-card').forEach(level => level.classList.add('show-level'));
        timer().stopTimer(1);
    }

    return (
        <header>
            <div className="container">
                <h1 className='title' onClick={selectOtherLevel}>Find The <span>Characters</span></h1>

                <div className="timer">{time}</div>

                <div className='counter' onClick={() => {showDropDown === 'hide' ? setShowDropDown('') : setShowDropDown('hide')}}>
                    {counter}

                    {counter ? 
                        <div className={`drop-down ${showDropDown}`}>
                            {level === image1 ? 
                                    <DropDownCharacters characterSelection={characterSelection} levelName={levelsInfo[0].levelName} name1={levelsInfo[0].name1} name2={levelsInfo[0].name2} name3={levelsInfo[0].name3} character1={levelsInfo[0].character1} character2={levelsInfo[0].character2} character3={levelsInfo[0].character3} cartoon1={levelsInfo[0].cartoon1} cartoon2={levelsInfo[0].cartoon2} cartoon3={levelsInfo[0].cartoon3} />
                                : 
                                    <DropDownCharacters characterSelection={characterSelection} levelName={levelsInfo[1].levelName} name1={levelsInfo[1].name1} name2={levelsInfo[1].name2} name3={levelsInfo[1].name3} character1={levelsInfo[1].character1} character2={levelsInfo[1].character2} character3={levelsInfo[1].character3} cartoon1={levelsInfo[1].cartoon1} cartoon2={levelsInfo[1].cartoon2} cartoon3={levelsInfo[1].cartoon3} />
                            }
                        </div>   
                        : timer().stopTimer()   
                    }
                </div>
            </div>
        </header>
    );
}