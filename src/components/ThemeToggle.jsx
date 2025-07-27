import React from 'react';

const ThemeToggle = () => {
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="flex justify-end p-4">
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-gray-800 text-white dark:bg-yellow-400 dark:text-black rounded-full"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeToggle;
