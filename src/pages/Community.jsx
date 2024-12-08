/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Manual SVG Icons
const DiscordIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.032c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-7.008-1.728-7.008-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692.012-2.424.048l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.144-1.728 7.008 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.468.276.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.096.012.552-.096 1.116-.264 1.692-.516.408-.156.864-.384 1.32-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972z"/>
  </svg>
);

const TelegramIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm4.524 9.896l-4.764-2.206c-.464-.215-1.576-.076-1.576.584v3.608c0 .675 1.016.879 1.576.584l4.764-2.206c.644-.298.644-1.048 0-1.348l-4.764-2.206c-.56-.295-1.576-.076-1.576.584v3.608c0 .66 1.016.879 1.576.584z"/>
  </svg>
);

const TwitterIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
  </svg>
);

const GithubIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const Community = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const socialLinks = [
    {
      name: 'Discord',
      icon: DiscordIcon,
      link: 'https://discord.gg/blackswan',
      color: 'text-[#7289DA]'
    },
    {
      name: 'Telegram',
      icon: TelegramIcon,
      link: 'https://t.me/blackswantoken',
      color: 'text-[#0088cc]'
    },
    {
      name: 'Twitter',
      icon: TwitterIcon,
      link: 'https://twitter.com/blackswantoken',
      color: 'text-[#1DA1F2]'
    },
    {
      name: 'GitHub',
      icon: GithubIcon,
      link: 'https://github.com/blackswantoken',
      color: 'text-white'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement actual form submission logic
    console.log('Submitted:', { email, message });
    alert('Thank you for your message! We will get back to you soon.');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container mx-auto px-4 py-16 text-white">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold text-gold mb-6">BlackSwan Community</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Join our global network of innovators, dreamers, and blockchain enthusiasts
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Social Links Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gray-dark p-8 rounded-lg"
        >
          <h2 className="text-3xl text-gold mb-6">Connect With Us</h2>
          <div className="grid grid-cols-2 gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-3 ${social.color} hover:opacity-80 transition`}
              >
                <social.icon className="h-8 w-8" />
                <span>{social.name}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gray-dark p-8 rounded-lg"
        >
          <h2 className="text-3xl text-gold mb-6">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-gold mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-black border border-gold rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-gold"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gold mb-2">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className="w-full bg-black border border-gold rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-gold"
                placeholder="Your message to BlackSwan..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gold text-black py-3 rounded-full font-bold hover:bg-opacity-80 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>

      {/* Community Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-12 bg-gray-dark p-8 rounded-lg text-center"
      >
        <h2 className="text-3xl text-gold mb-8">Community at a Glance</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { label: 'Total Members', value: '45,678' },
            { label: 'Countries', value: '87' },
            { label: 'Active Contributors', value: '1,234' },
            { label: 'Community Events', value: '42' }
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-4xl text-gold font-bold mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Community;