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

export default function Levels() {
    return (
        <div className='levels-background'>
            <div>
                <h1 className='title'>Find The <span>Characters</span></h1>
                <div className='levels'>
                    <Level levelName={'AD 2222 - UNDRCTY'} creator={'by Egor Klyuchnyk'} image={level1} name1={'Zoidberg'} name2={'Patrick Star'} name3={'Spider-Man'} character1={character1Level1} character2={character2Level1} character3={character3Level1} cartoon1={'Futurama'} cartoon2={'Sponge Bob'} cartoon3={'Marvel'} btnLevel={'level1-btn'}/>
                    <Level levelName={'Cyberpunk Underground (+18)'} creator={'by Egor Klyuchnyk'} image={level2} name1={'Roger Smith'} name2={'Mikasa Ackerman'} name3={'Jake'} character1={character1Level2} character2={character2Level2} character3={character3Level2} cartoon1={'American Dad'} cartoon2={'Attack On Titan'} cartoon3={'Adventure Time'} btnLevel={'level2-btn'}/>
                </div>
            </div>
        </div>
    );
}