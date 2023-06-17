import Level from './Level';
import '../styles/Levels.css';
import level1 from "../imgs/A.D.-2.222.webp";

export default function Levels() {
    return (
        <div className='levels-background'>
            <div>
                <h1 className='title'>Find The <span>Characters</span></h1>
                <Level levelName={'AD 2222 - UNDRCTY'} creator={'by Anomaly World'} image={level1}/>
            </div>
        </div>
    );
}