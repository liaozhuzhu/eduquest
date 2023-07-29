import React from 'react';
import { Link } from 'react-router-dom';

function SettingsDropdown({ signOut }) {
  return (
    <div className="flex justify-center items-center flex-col w-20 border-stone-600 border-2 h-auto absolute top-8 right-0 gap-1 bg-white">
      <Link to="/profile" className="cursor-pointer w-full">
        <div className="flex justify-center items-center text-lg text-center hover:text-black">
          Profile
        </div>
      </Link>
      <div
        onClick={signOut}
        className="cursor-pointer bg-white hover:bg-red-500 transition-colors duration-300 border-white w-full"
      >
        <div className="flex justify-center items-center text-lg text-center hover:text-black">
          Sign Out
        </div>
      </div>
    </div>
  );
}

export default SettingsDropdown;
