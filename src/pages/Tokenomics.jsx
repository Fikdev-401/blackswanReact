/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const Tokenomics = () => {
    const tokenDistribution = [
        { category: 'Team', percentage: 20, color: 'bg-gold' },
        { category: 'Community', percentage: 40, color: 'bg-gray-600' },
        { category: 'Staking', percentage: 25, color: 'bg-gray-700' },
        { category: 'Marketing', percentage: 15, color: 'bg-gray-800' },
    ];

    return (
        <div className="container mx-auto px-4 sm:px-6 md:px-12 py-8 md:py-16 text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold mb-8 text-center">
                BlackSwan Tokenomics
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Token Distribution */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="bg-gray-dark p-6 md:p-8 rounded-lg"
                >
                    <h3 className="text-xl sm:text-2xl mb-4 md:mb-6 text-gold">Token Distribution</h3>
                    {tokenDistribution.map((item, index) => (
                        <div key={index} className="mb-4">
                            <div className="flex justify-between text-sm md:text-base mb-2">
                                <span>{item.category}</span>
                                <span>{item.percentage}%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2.5">
                                <div
                                    className={`${item.color} h-2.5 rounded-full`}
                                    style={{ width: `${item.percentage}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Token Details */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="bg-gray-dark p-6 md:p-8 rounded-lg"
                >
                    <h3 className="text-xl sm:text-2xl mb-4 md:mb-6 text-gold">Token Details</h3>
                    <ul className="space-y-2 md:space-y-4 text-sm md:text-base">
                        <li>
                            <strong className="text-gold">Total Supply:</strong> 10,000,000 BSW
                        </li>
                        <li>
                            <strong className="text-gold">Token Symbol:</strong> BSW
                        </li>
                        <li>
                            <strong className="text-gold">Contact Address:</strong> 
                            <p>0xaf4b60adc3b09beb38fca3948361f13bd89c9d33</p>
                        </li>
                        <li>
                            <strong className="text-gold">Blockchain:</strong> Polygon
                        </li>
                    </ul>
                </motion.div>
            </div>

            {/* How to Buy BlackSwan Token */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="mt-8 md:mt-12 bg-gray-dark p-6 md:p-8 rounded-lg"
            >
                <h3 className="text-2xl md:text-3xl mb-6 md:mb-8 text-gold text-center">
                    How to Buy BlackSwan Token
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        {
                            title: 'Step 1: Set Up a Wallet',
                            description:
                                'To buy BlackSwan token, you need a cryptocurrency wallet that supports Polygon (MATIC). Use wallets like MetaMask, Trust Wallet, or Coinbase Wallet.',
                        },
                        {
                            title: 'Step 2: Add Polygon Network',
                            description:
                                'If you’re using MetaMask or another wallet, ensure you add the Polygon network. Follow instructions from the official Polygon website.',
                        },
                        {
                            title: 'Step 3: Buy MATIC',
                            description:
                                'To buy BlackSwan, you need MATIC for gas fees. Buy MATIC on exchanges like Binance or Coinbase, and transfer it to your wallet.',
                        },
                        {
                            title: 'Step 4: Go to the BlackSwan Token Contract',
                            description:
                                'Visit the official BlackSwan token contract on PolygonScan to get the token’s contract address (ensure it’s the official site).',
                        },
                        {
                            title: 'Step 5: Add BlackSwan to Your Wallet',
                            description:
                                'Add BlackSwan to your wallet by clicking "Add Token" and entering the token contract address. Your wallet will recognize BlackSwan.',
                        },
                        {
                            title: 'Step 6: Use a DEX (Decentralized Exchange)',
                            description:
                                'Visit a DEX like Uniswap or Sushiswap, connect your wallet, and swap for BlackSwan token using the contract address.',
                        },
                        {
                            title: 'Step 7: Confirm Your Purchase',
                            description:
                                'After the transaction, check your wallet for BlackSwan tokens and verify the transaction on PolygonScan.',
                        },
                    ].map((step, index) => (
                        <div key={index} className="text-start">
                            <div className="text-gold text-lg md:text-xl font-bold mb-2 md:mb-4">
                                {step.title}
                            </div>
                            <p className="text-sm md:text-base">{step.description}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Tokenomics;
