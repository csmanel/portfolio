import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export const Nav = ({ title, links }) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-secondary">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">
            <span className="">{title}</span>
          </a>
        </Link>

        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}>
          <div className="navbar-nav">
            {links.map((value, index) => (
              <Link key={index} href={value.link}>
                <a className="nav-link">{value.title}</a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
