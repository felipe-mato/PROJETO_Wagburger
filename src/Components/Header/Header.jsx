import React from 'react';
import logoHeader from '../../images/logoHeader.png';
import SearchBar from '../SearcBar/SearchBar';

import './Header.css';
import CartButton from '../CartButton/CartButton';

export default function Header(){
  return(
    <header className="header">
      <div className="header-container">
        <img src={logoHeader} alt="logo-header" style={{ maxHeight: '100px'}} />
        <div>
          <SearchBar />
          <CartButton />
        </div>
      </div>
    </header>
  );

}