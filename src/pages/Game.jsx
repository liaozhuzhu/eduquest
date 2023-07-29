import React from 'react'
import Navbar from '../components/Navbar'

function Game({ level }) {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
        <Navbar />
        <div className="flex justify-center flex-col items-center w-full h-full">
        </div>
    </div>
  )
}

export default Game