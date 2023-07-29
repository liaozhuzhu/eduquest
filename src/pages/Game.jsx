import React from 'react'
import Navbar from '../components/Navbar'
import Level from '../components/Level'

function Game({ signOut }) {
  return (
    <div className="h-screen">
        <Navbar signOut={signOut}/>
        <Level level={1}/>
    </div>
  )
}

export default Game