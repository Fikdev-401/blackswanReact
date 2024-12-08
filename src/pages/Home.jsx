/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold text-gold mb-8">BlackSwan</h1>
        <p className="text-xl text-gray-300 mb-12">
          Transforming Uncertainty into Elegant Opportunity
        </p>

        <div className="flex justify-center space-x-6">
          <Link 
            to="/tokenomics" 
            className="bg-gold text-black px-8 py-3 rounded-full font-bold hover:bg-opacity-80 transition"
          >
            Buy Token
          </Link>
          <a 
            href="https://t.me/blackswanpolygon" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border-2 border-gold text-gold px-8 py-3 rounded-full hover:bg-gold hover:text-black transition"
          >
            Join Community
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;