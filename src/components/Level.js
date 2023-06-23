import '../styles/Level.css';
import Character from './Character';
import image1 from '../imgs/A.D.-2.222.webp';
import image2 from '../imgs/ad-2222-undrcty.webp';

export default function Level({timer, levelName, creator, image, character1, character2, character3, name1, name2, name3, cartoon1, cartoon2, cartoon3, btnLevel, setLevel, setStartScreen}) {
    const handleStartGame = () => {
        levelName === 'AD 2222 - UNDRCTY' ? setLevel(image1) : setLevel(image2);
        setStartScreen('hide');
    }

    const mainFunctions = () => {
        handleStartGame();
        timer().runTimer();
    }
    
    return (
        <div className='level-card'>
            <img className='level-img' src={image} alt="Level" />
            <div className='level-info'>
                <h2>{levelName}</h2>
                <p>{creator}</p>
                <div className="characters">
                    <Character difficulty={'easy'} characterName={name1}  cartoon={cartoon1} image={character1}/>
                    <Character difficulty={'medium'} characterName={name2}  cartoon={cartoon2} image={character2}/>
                    <Character difficulty={'hard'} characterName={name3}  cartoon={cartoon3} image={character3}/>
                </div>
                <button id={levelName} className={`start-btn ${btnLevel}`} type='button' onClick={mainFunctions}>START</button>
            </div>
        </div>
    );
}