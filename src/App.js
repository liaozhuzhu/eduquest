import './App.css';
import { motion } from "framer-motion"
import Game from './pages/Game.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useEffect, useState} from 'react'
import auth from './customAuth';

import "@aws-amplify/ui-react/styles.css";
import { Amplify, Auth } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import awsExports from './aws-exports';
import Navbar from './components/Navbar.jsx';
Amplify.configure(awsExports);


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

  const handleSignOut = async () => {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('Error signing out:', error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Routes>
        <Route exact path="/" element={<Game signOut={handleSignOut}/>} />
      </Routes>
      <Authenticator formFields={auth.formFields}> 
      </Authenticator>
      <Navbar signOut={signOut}/>
    </div>
  );
}

export default (App);

