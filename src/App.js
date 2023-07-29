import './App.css';
import { motion } from "framer-motion"
import Home from './pages/Home.jsx'
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

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/welcome" component={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
