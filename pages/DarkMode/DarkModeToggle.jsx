import React from 'react';

import Toggle from './Toggle';
import useDarkMode from 'use-dark-mode';

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className="dark-mode-toggle">
      <button type="button" onClick={darkMode.disable}>
      <i className={`fa-regular fa-sun mx-2${ darkMode ? 'text-info' : undefined}`}></i>
      </button>
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
      <button type="button" onClick={darkMode.enable}>
      <i className="fa-solid fa-moon mx-2"></i>
      </button>
    </div>
  );
};

export default DarkModeToggle;
