import Level from './Level';
import '../styles/Levels.css';
import level1 from "../imgs/A.D.-2.222.webp";
import level2 from '../imgs/ad-2222-undrcty.webp';

import character1Level1 from '../imgs/zoidberg.png'
import character2Level1 from '../imgs/patrick-star.webp';
import character3Level1 from '../imgs/spider-man.png';

import character1Level2 from '../imgs/roger.webp'
import character2Level2 from '../imgs/mikasa-ackerman.webp';
import character3Level2 from '../imgs/jake.png';
import { useState } from 'react';

export default function Levels({ setLevel }) {
    const [startScreen, setStartScreen] = useState('levels-background');

    const levelsInfo = [
        {
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
            levelName: 'Cyberpunk Underground (+18)',
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
        },
    ]

    return (
        <div className={startScreen}>
            <div>
                <h1 className='title'>Find The <span>Characters</span></h1>
                <div className='levels'>
                    {levelsInfo.map(info => {
                        return <Level setStartScreen={setStartScreen} setLevel={setLevel} key={info.levelName} levelName={info.levelName} creator={info.creator} image={info.image} name1={info.name1} name2={info.name2} name3={info.name3} character1={info.character1} character2={info.character2} character3={info.character3} cartoon1={info.cartoon1} cartoon2={info.cartoon2} cartoon3={info.cartoon3} btnLevel={info.btnLevel}/>
                    })}
                </div>
            </div>
        </div>
    );
}