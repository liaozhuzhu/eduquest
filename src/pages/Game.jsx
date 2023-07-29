import React from 'react'
import Level from '../components/Level'

function Game({ signOut }) {
  return (
    <div className="h-screen">
        <Level level={2}/>
    </div>
  )
}

export default Game