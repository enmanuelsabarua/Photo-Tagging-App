import '../styles/Header.css';

export default function Header() {
    return (
        <header>
            <div className="container">
                <h1 className='title'>Find The <span>Characters</span></h1>

                <div className="timer">0:0:0</div>

                <div className='counter'>3</div>
            </div>
        </header>
    );
}