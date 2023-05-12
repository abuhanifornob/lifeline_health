import React from 'react';

import Toggle from './Toggle';
import useDarkMode from 'use-dark-mode';
import Head from 'next/head';

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
<>

<Head>
{/* <!--font awsome cnd link --> */}
  <script src="https://kit.fontawesome.com/77ce313bde.js" crossOrigin="anonymous"></script>
  
         </Head>
      <div className="dark-mode-toggle">
        <button type="button" onClick={darkMode.disable}>
        <i class="fa-regular fa-sun mx-2"></i>
        </button>
        
        <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
        <button type="button" onClick={darkMode.enable}>
        <i class="fa-solid fa-moon mx-2"></i>
        </button>
      </div>
</>
  );
};

export default DarkModeToggle;
