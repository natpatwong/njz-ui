
export function SpotifyEmbed() {
  return (
    <div style={playerStyle}>
      <iframe
        src="https://open.spotify.com/embed/album/1HMLpmZAnNyl9pxvOnTovV?utm_source=generator"
        width="100%"
        height="160"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export function Supernaturl() {
  return (
    <div style={playerStyle}>
      <iframe
        src="https://open.spotify.com/embed/album/0FZK97MXMm5mUQ8mtudjuK?utm_source=generator"
        width="100%"
        height="160"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}

// 🧱 สไตล์ใช้ร่วมกัน
const playerStyle = {
  borderRadius: '12px',
  overflow: 'hidden',
  width: '100%',
  maxWidth: '500px',
  marginTop: '20px',
  marginLeft: '0',
};
