import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <div>
      <header className='header'>
        <span className='header_title' data-testid='header-title'>
          Registered Cars
        </span>
      </header>
    </div>
  );
};

export default Header;
