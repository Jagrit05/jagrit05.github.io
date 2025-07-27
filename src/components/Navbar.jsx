import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const pages = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Education', path: '/education' },
    { name: 'Certifications', path: '/certifications' }
  ];

  return (
    <nav className="bg-gray-100 dark:bg-gray-800 p-4 shadow-md flex justify-center gap-6 text-lg font-medium">
      {pages.map((page) => (
        <Link
          key={page.name}
          to={page.path}
          className="hover:text-blue-500 dark:hover:text-yellow-400"
        >
          {page.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
