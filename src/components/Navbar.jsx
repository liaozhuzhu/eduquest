import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import SettingsDropdown from './SettingsDropdown';
import { Link } from 'react-router-dom';

function Navbar({ signOut }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prevShowDropdown) => !prevShowDropdown);
  };

  const handleClickOutside = (event) => {
    if (showDropdown && !event.target.closest('.settings-dropdown')) {
      setShowDropdown(false);
    }
  };

  return (
    <div
      className="flex fixed z-1 top-0 right-0 w-full justify-between items-center p-4 bg-white"
      onClick={handleClickOutside}
    >
      <Link to="/">
        <div className="flex justify-center items-center">
          <div className="text-3xl text-zinc-500 hover:text-zinc-600">
            <h1 className="font-semibold">
              EduQuest
            </h1>
          </div>
        </div>
      </Link>
      <div className="flex justify-center items-center relative text-zinc-600">
        <div
          className="flex justify-center items-center text-3xl transition-transform transform hover:rotate-45 cursor-pointer"
          onClick={toggleDropdown}
        >
          <FontAwesomeIcon icon={faGear} />
        </div>
        {showDropdown && <SettingsDropdown signOut={signOut} />}
      </div>
    </div>
  );
}

export default Navbar;
