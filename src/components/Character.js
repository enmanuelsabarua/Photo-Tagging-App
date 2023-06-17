import '../styles/Character.css';

export default function Character({difficulty, characterName, cartoon, image}) {
    return (
        <div className='character'>
            <p className={`${difficulty} difficulty`}>{difficulty}</p>
            <div className='character-info'>
                <img src={image} alt="Character" className='character-img' />
                <div className='character-name'>
                    <h3>{characterName}</h3>
                    <p>{cartoon}</p>
                </div>
            </div>
        </div>
    );
}