import React, { useState, useEffect } from 'react';
import QuestionPage from '../pages/QuestionPage';

function Level({ level }) {
  const [bgColor, setBgColor] = useState('bg-white');
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (level === 1) {
      setBgColor('bg-green-500');
    } else if (level === 2) {
      setBgColor('bg-blue-500');
    } else if (level === 3) {
      setBgColor('bg-yellow-500');
    }

    // Wait for 2 seconds before showing the content and triggering the animation
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2000);

    // Clear the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div className="w-full h-screen">
      <div
        className={`flex flex-col justify-center items-center w-full h-full absolute top-0 left-0 ${bgColor} ${
          showContent ? 'slide-up' : ''
        }`}
      >
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="flex justify-center items-center text-6xl text-white">
            <h1 className="font-semibold">Level {level}</h1>
          </div>
        </div>
      </div>
      <QuestionPage bgColor={bgColor}/>
    </div>
  );
}

export default Level;
