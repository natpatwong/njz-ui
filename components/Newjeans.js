import React from 'react'


export default function Newjeans() {
    const letters = [
      { text: 'ㅤ', color: '#6a37bf' },
      { text: 'ㅤ', color: '#b23db8' },
      { text: 'ㅤ', color: '#ee2e97' },
      { text: 'ㅤ', color: '#fc5746' },
      { text: 'ㅤ', color: '#fc8427' },
      { text: 'ㅤ', color: '#f9bd23' },
      { text: 'ㅤ', color: '#cce026' },
      { text: 'ㅤ', color: '#87c940' },
    ];
  
    return (
      <div style={{ fontSize: '18rem', fontWeight: 'bold', fontFamily: 'Cooper Black, serif' }}>
        {letters.map((letter, index) => (
          <span key={index} style={{ color: letter.color }}>
            {letter.text}
          </span>
        ))}
      </div>
    );
  }
  