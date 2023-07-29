import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <div className="flex fixed z-1 top-0 right-0 w-full justify-end items-center p-4">
        <div className="flex justify-center items-center">
            <div className="flex justify-center items-center text-3xl transition-transform transform hover:rotate-45 cursor-pointer">
                <FontAwesomeIcon icon={faGear} />
            </div>
        </div>
    </div>
  )
}

export default Navbar