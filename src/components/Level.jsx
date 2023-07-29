import React from 'react'

function Level({ level }) {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
        <div className="flex flex-col justify-center items-center w-full h-full bg-green-500">
            <div className="flex justify-center items-center text-6xl text-white">
                <h1 className="font-semibold">
                    Level {level}
                </h1>
            </div>
        </div>
    </div>
  )
}

export default Level