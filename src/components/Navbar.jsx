import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import SettingsDropdown from './SettingsDropdown';

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
      className="flex fixed z-1 top-0 right-0 w-full justify-end items-center p-4"
      onClick={handleClickOutside}
    >
      <div className="flex justify-center items-center relative">
        <div
          className="flex justify-center items-center text-3xl transition-transform transform hover:rotate-45 cursor-pointer"
          onClick={toggleDropdown}
        >
          <FontAwesomeIcon icon={faGear} />
        </div>
        {showDropdown && <SettingsDropdown signOut={signOut}/>}
      </div>
    </div>
  );
}

export default Navbar;
