import '../styles/DropDownCharacter.css';

export default function DropDownCharacter({difficulty, characterName, cartoon, image}) {
    return (
        <div className='character-drop-down'>
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