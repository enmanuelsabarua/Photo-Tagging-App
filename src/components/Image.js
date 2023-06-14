import '../styles/Image.css';

export default function Image({ image, height }) {
    
    return (
        <main>
            <div className="img" style={{
                backgroundImage: `url(${image}`,
                height: `${height}px`
            }}></div>
        </main>
    );
}