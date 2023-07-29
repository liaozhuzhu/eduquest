import React from 'react'

function Home() {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
        <div className="flex justify-center flex-col items-center w-full h-full">
            <div className="flex justify-center items-center w-full ">
                <h1 className="text-2xl font-semibold">Select your level</h1>
            </div>
            <div className="flex justify-center items-center rounded-lg my-4 cursor-pointer">
                <h1>Level 1</h1>
            </div>
            <div className="flex justify-center items-center rounded-lg my-4 cursor-pointer">
                <h1>Level 2</h1>
            </div>
            <div className="flex justify-center items-center rounded-lg my-4 cursor-pointer">
                <h1>Level 3</h1>
            </div>
        </div>
    </div>
  )
}

export default Home