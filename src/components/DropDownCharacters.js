import DropDownCharacter from "./DropDownCharacter";
import '../styles/DropDownCharacters.css';

export default function DropDownCharacters({ character1, character2, character3, name1, name2, name3, cartoon1, cartoon2, cartoon3 }) {
    return (
        <div className='drop-down-characters'>
            <DropDownCharacter  difficulty={'easy'} characterName={name1}  cartoon={cartoon1} image={character1} />
            <DropDownCharacter difficulty={'medium'} characterName={name2}  cartoon={cartoon2} image={character2}/>
            <DropDownCharacter difficulty={'hard'} characterName={name3}  cartoon={cartoon3} image={character3}/>
        </div>
    );
}