import '../styles/Level.css';
import Character from './Character';
import character1 from '../imgs/zoidberg.png'
import character2 from '../imgs/patrick-star.webp';
import character3 from '../imgs/spider-man.png';

export default function Level({levelName, creator, image}) {
    return (
        <div className='level-card'>
            <img className='level-img' src={image} alt="Level" />
            <div className='level-info'>
                <h2>{levelName}</h2>
                <p>{creator}</p>
                <div className="characters">
                    <Character difficulty={'easy'} characterName={'Zoidberg'}  cartoon={'Futurama'} image={character1}/>
                    <Character difficulty={'medium'} characterName={'Patrick Star'}  cartoon={'Sponge Bob'} image={character2}/>
                    <Character difficulty={'hard'} characterName={'Spider-Man'}  cartoon={'Marvel'} image={character3}/>
                </div>
                <button className='start-btn' type='button'>START</button>
            </div>
        </div>
    );
}