import React from 'react'
import Level from '../components/Level'

function Game({ signOut, setScore }) {
  return (
    <div className="h-screen">
        <Level level={2} setScore={setScore}/>
    </div>
  )
}

export default Game