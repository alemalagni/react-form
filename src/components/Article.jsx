export default function Article({ text }) {
    return (
        <div style={{ border: '2px solid #000000', width: '20%', margin: '10px 0px', placeItems: 'center' }}
        >
            <h2>{text}</h2>
        </div>
    );
}