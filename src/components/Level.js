import '../styles/Level.css';
import Character from './Character';

export default function Level({levelName, creator, image, character1, character2, character3, name1, name2, name3, cartoon1, cartoon2, cartoon3, btnLevel}) {
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
                <button className={`start-btn ${btnLevel}`} type='button'>START</button>
            </div>
        </div>
    );
}