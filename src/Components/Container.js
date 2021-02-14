import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Container = ({ children }) => {
  return (
    <div className="container">
      <Link to="/" className="logo" style={{ borderBottom: 'none' }}>
        <Logo />
        <h2 style={{ color: 'var(--lightbk)' }}>RMBlog</h2>
      </Link>

      {children}
    </div>
  );
};

export default Container;
