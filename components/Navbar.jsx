import Link from 'next/link';
import React from 'react';

const links = [
  { title: 'Client', path: '/client' },
  { title: 'Drinks', path: '/drinks' },
  { title: 'Tasks', path: '/tasks' },
  { title: 'Query', path: '/query' },
];

function Navbar() {
  return (
    <nav className="bg-base-300 py-4">
      <div className="navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row">
        <Link href="/" className="btn btn-primary">
          Next.js
        </Link>
        <ul className="menu menu-horizontal md:ml-8">
          {links.map((link) => (
            <li key={link.path} className="px-2">
              <Link href={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
