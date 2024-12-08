/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="container mx-auto px-4 py-16 text-white">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
            >
                <h1 className="text-5xl font-bold text-gold mb-6">The BlackSwan Story</h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Embracing the Unpredictable, Transforming Uncertainty into Elegance
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Philosophy Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-gray-dark p-8 rounded-lg"
                >
                    <h2 className="text-3xl text-gold mb-6">Our Philosophy</h2>
                    <p className="text-gray-300 leading-relaxed">
                        BlackSwan is more than a cryptocurrency. We are a testament to the beauty
                        of unexpected events, the elegance of complexity, and the potential hidden
                        within uncertainty. Like the rare black swan, we challenge conventional
                        thinking and turn unpredictability into opportunity.
                    </p>
                    <div className="mt-6 border-l-4 border-gold pl-4 italic text-gray-400">
                        &quot;In the world of finance, the most profound transformations often emerge
                        from the most unexpected moments.&quot;
                    </div>
                </motion.div>

                {/* Mission Section */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-gray-dark p-8 rounded-lg"
                >
                    <h2 className="text-3xl text-gold mb-6">Our Mission</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-gold mr-3">★</span>
                            Democratize access to financial opportunities through innovative blockchain solutions.
                        </li>
                        <li className="flex items-start">
                            <span className="text-gold mr-3">★</span>
                            Build a secure, transparent, and decentralized ecosystem for global participation.
                        </li>
                        <li className="flex items-start">
                            <span className="text-gold mr-3">★</span>
                            Embrace the potential of blockchain volatility for innovative growth and resilience.
                        </li>
                        <li className="flex items-start">
                            <span className="text-gold mr-3">★</span>
                            Foster a strong global community united by vision, innovation, and transformation.
                        </li>
                    </ul>
                </motion.div>

            </div>

            {/* Team Section */}
            {/* Our Vision */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="mt-12 bg-gray-dark p-8 rounded-lg"
            >
                <h3 className="text-3xl mb-8 text-gold text-center">Our Vision</h3>
                <div className="text-center">
                    <p className="text-sm text-white mb-6">
                        At BlackSwan, our vision is to revolutionize the way people experience luxury and aesthetics through blockchain technology. We aim to provide a seamless, secure, and transparent platform where users can engage in the world of crypto with elegance and style.
                    </p>
                    <p className="text-sm text-white mb-6">
                        By leveraging decentralized finance (DeFi) and NFT technology, we envision creating an ecosystem where our community members can actively participate in shaping the future of luxury experiences while being rewarded for their involvement.
                    </p>
                    <p className="text-sm text-white">
                        Our mission is to make BlackSwan not just a token, but a movement that redefines the standards of luxury, exclusivity, and community-driven growth in the world of crypto.
                    </p>
                </div>
            </motion.div>

        </div>
    );
};

export default About;