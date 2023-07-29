import React from 'react'
import Navbar from '../components/Navbar'

function Game({ level, signOut }) {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
        <Navbar signOut={signOut}/>
        <div className="flex justify-center flex-col items-center w-full h-full">
        </div>
    </div>
  )
}

export default Game