import React from 'react'

export default function Newjeans() {
    const letters = [
      { text: 'N', color: '#6a37bf' },
      { text: 'E', color: '#b23db8' },
      { text: 'W', color: '#ee2e97' },
      { text: 'J', color: '#fc5746' },
      { text: 'E', color: '#fc8427' },
      { text: 'A', color: '#f9bd23' },
      { text: 'N', color: '#cce026' },
      { text: 'S', color: '#87c940' },
    ];
  
    return (
      <div style={{ fontSize: '20rem', fontWeight: 'bold',font:'Arial' }}>
        {letters.map((letter, index) => (
          <span key={index} style={{ color: letter.color }}>
            {letter.text}
          </span>
        ))}
      </div>
    );
  }
  