import Level from './Level';
import '../styles/Levels.css';

export default function Levels({levelsInfo, setLevel, upTimer, startScreen, setStartScreen, timer }) {
    return (
        <div className={startScreen}>
            <div>
                <h1 className='title'>Find The <span>Characters</span></h1>
                <div className='levels'>
                    {levelsInfo.map(info => {
                        return <Level timer={timer} upTimer={upTimer} setStartScreen={setStartScreen} setLevel={setLevel} key={info.levelName} levelName={info.levelName} creator={info.creator} image={info.image} name1={info.name1} name2={info.name2} name3={info.name3} character1={info.character1} character2={info.character2} character3={info.character3} cartoon1={info.cartoon1} cartoon2={info.cartoon2} cartoon3={info.cartoon3} btnLevel={info.btnLevel}/>
                    })}
                </div>
            </div>
        </div>
    );
}