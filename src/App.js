import './App.css';
import { motion } from "framer-motion"
import Game from './pages/Game.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useEffect, useState} from 'react'

import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
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
      <Routes>
        <Route exact path="/" element={<Game signOut={signOut}/>} />
      </Routes>
      {/* <View className="App">
      <Card>
        <Image src={''} className="App-logo" alt="logo" />
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button >Sign Out</Button>
    </View> */}
    </Router>
  );
}

export default (App);

