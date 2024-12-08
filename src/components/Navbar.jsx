/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 border-b border-gold">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gold">
          BlackSwan
        </Link>
        
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gold transition">Home</Link>
          <Link to="/about" className="hover:text-gold transition">About</Link>
          <Link to="/tokenomics" className="hover:text-gold transition">Tokenomics</Link>
          {/* <Link to="/community" className="hover:text-gold transition">Community</Link> */}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gold focus:outline-none"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black">
            <Link to="/" className="block hover:bg-gold hover:text-black px-3 py-2">Home</Link>
            <Link to="/about" className="block hover:bg-gold hover:text-black px-3 py-2">About</Link>
            <Link to="/tokenomics" className="block hover:bg-gold hover:text-black px-3 py-2">Tokenomics</Link>
            {/* <Link to="/community" className="block hover:bg-gold hover:text-black px-3 py-2">Community</Link> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;