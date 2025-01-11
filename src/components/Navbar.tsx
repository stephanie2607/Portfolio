import React from 'react';
import { NavLink } from 'react-router-dom';
import { Gamepad2 } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600/80 to-purple-600/80 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="flex items-center space-x-3">
            <Gamepad2 size={28} className="text-white" />
            <span className="font-extrabold text-2xl text-white">
              GameDev
            </span>
          </NavLink>
          
          <div className="flex space-x-12">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-medium text-lg tracking-wide transition-all duration-200 hover:text-yellow-400 ${
                  isActive 
                    ? 'text-yellow-400 border-b-2 border-yellow-400' 
                    : 'text-white/90'
                }`
              }
            >
              À propos
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `font-medium text-lg tracking-wide transition-all duration-200 hover:text-yellow-400 ${
                  isActive 
                    ? 'text-yellow-400 border-b-2 border-yellow-400' 
                    : 'text-white/90'
                }`
              }
            >
              Projets
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `font-medium text-lg tracking-wide transition-all duration-200 hover:text-yellow-400 ${
                  isActive 
                    ? 'text-yellow-400 border-b-2 border-yellow-400' 
                    : 'text-white/90'
                }`
              }
            >
              Ambition
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
