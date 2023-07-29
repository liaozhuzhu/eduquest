import './App.css';
import { motion } from "framer-motion"
import Game from './pages/Game.jsx'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {useEffect, useState} from 'react'

function App() {
  const [showTitle, setShowTitle] = useState(true)

 useEffect(() => {
    // Check if the flag exists in localStorage
    const hasVisitedBefore = localStorage.getItem('hasVisited');

    if (hasVisitedBefore) {
      setShowTitle(false);
    } else {
      // Set the flag in localStorage to indicate that the user has visited
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

  const handleTitleClick = () => {
    setShowTitle(false);
  };

  return (
    <Router>
      <div>
        {showTitle && (
          <div className="flex justify-center items-center h-screen">
              <h1 className="text-lg font-semibold" onClick={handleTitleClick}>EduQuest</h1>
          </div>
        )}
        <Routes>
          <Route exact path="/" element={<Game/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
