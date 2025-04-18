
export function SpotifyEmbed() {
  return (
    <div style={playerStyle}>
      <iframe
        src="https://open.spotify.com/embed/album/1HMLpmZAnNyl9pxvOnTovV?utm_source=generator"
        width="100%"
        height="152"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
} 

export function OMG () {
  return (
    <div style={playerStyle}>
      <iframe
        src="https://open.spotify.com/embed/album/45ozep8uHHnj5CCittuyXj?si=TisDdD2DRimQNvkYOsYjYg"
        width="100%"
        height="152"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export function DITTO() {
  return (
    <div style={playerStyle}>
      <iframe
        src="https://open.spotify.com/embed/album/4N1fROq2oeyLGAlQ1C1j18?si=WnExgWfhQqqUM3vtzYqzZQ"
        width="100%"
        height="152"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export function Sweet() {
  return (
    <div style={playerStyle}>
      <iframe
        src="https://open.spotify.com/embed/album/0EhZEM4RRz0yioTgucDhJq?utm_source=generator" 
        width="100%" 
        height="152" 
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
        ></iframe>
    </div>
  );
}

export function GOD() {
  return (
    <div style={playerStyle}>
      <iframe
        src="https://open.spotify.com/embed/track/210JJAa9nJOgNa0YNrsT5g?si=3213d070c7754a94" 
        width="100%" 
        height="152" 
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
        ></iframe>
    </div>
  );
}

export function Super() {
  return (
    <div style={playerStyle}>
      <iframe
        src="https://open.spotify.com/embed/album/1FVw30SoC91lq1UZ6N9rwN?si=8OU5OpZITROzgG2cDGj_sA" 
        width="100%" 
        height="152" 
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
  marginTop: '1px',
  marginLeft: '10',
};
