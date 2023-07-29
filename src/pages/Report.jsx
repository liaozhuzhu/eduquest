import React from 'react'

function Report({score, level}) {
  return (
    <div className="flex justify-center items-center h-full flex-col gap-10">
        <h1 className="text-4xl">
            Congratulations! You completed the level.
        </h1>
        <h1 className="text-xl">
            You got <span className="text-blue-500">{score}</span> out of 6 questions correct! Well done!
        </h1>
    </div>
  )
}

export default Report