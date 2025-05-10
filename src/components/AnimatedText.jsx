import React, { useEffect, useState } from 'react';

function AnimatedText() {
  const texts = [
    "I'm a Mechanical Engineer", 
    "I'm a Developer", 
    "I'm a Creator", 
    "I'm a Problem Solver",
  ];

  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[currentIndex];

    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100); // Typing speed
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText('');
        setCharIndex(0);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }, 2000); // Wait before switching
      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentIndex, texts]);

  return (
    <h2 className="text-2xl text-orange-500 font-bold font-mono whitespace-nowrap">
      {text}
      <span className="animate-pulse">|</span>
    </h2>
  );
}

export default AnimatedText;
