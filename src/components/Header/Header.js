import React from 'react';
import logoUrl from "../../assets/logo.svg";
import './Header.css';

const Header = () => {
  return (
    <header>
      <img src={logoUrl} alt="Tesla" />
    </header>
  );
};

export default Header;
