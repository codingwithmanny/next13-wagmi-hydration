// Imports
// ========================================================
import React from 'react';
import ConnectWallet from './wallet';

// Page
// ========================================================
export default function Home() {
    // Render
    return (
        <div className="p-8">
            <h1 className="text-2xl text-white font-medium mb-6">Wallet Connection</h1>

            <ConnectWallet />
        </div>
    );
};