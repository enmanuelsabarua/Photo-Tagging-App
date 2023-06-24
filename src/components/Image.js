import { useState, useEffect } from 'react';
import '../styles/Image.css';
import image1 from '../imgs/A.D.-2.222.webp';

export default function Image({ image, height }) {
    const [mousePos, setMousePos] = useState({});

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY + window.scrollY });
    };

    window.addEventListener('click', handleMouseMove);

    return () => {
      window.removeEventListener(
        'click',
        handleMouseMove
      );
    };
  }, []);

  const showSelectionMenu = () => {
    const selectionMenu = document.querySelector('.selection-menu');

    selectionMenu.classList.toggle('hide');
  }
    
    return (
        <main>
            <div className="img" style={{
                backgroundImage: `url(${image}`,
                height: `${height}px`
            }}
            onClick={showSelectionMenu}
            >
            <div className='selection-menu hide'>
                <div className='selection' style={{top: mousePos.y - 50, left: mousePos.x - 50}}></div>
                <div className='drop-down-selection' style={{top: mousePos.y + 40, left: mousePos.x + 30}}>
                    <p>{image === image1 ? 'Zoidberg' : 'Roger Smith'}</p>
                    <p>{image === image1 ? 'Patrick Star' : 'Mikasa Ackerman'}</p>
                    <p>{image === image1 ? 'Spider-Man' : 'Jake'}</p>
                </div>
            </div>
            </div>
        </main>
    );
}