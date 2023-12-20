import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';


const Header = () => {
  return (
    <header>
      <NavLink to={'/'}>
        <h1 className='app-text'>SentimentScope</h1>
      </NavLink>
      <p className='slogan-text'>Відчуваємо настрій суспільства, <span className="fancy">цінуємо Ваш вибір!</span></p>
    </header>
  );
};

export default Header;