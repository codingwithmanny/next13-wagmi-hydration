'use client';

// Imports
// ========================================================
import React from 'react';
import ClientOnly from './clientOnly';
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

// Page
// ========================================================
export default function Wallet() {
    // State / Props
    const { address, isConnected } = useAccount();
    const { connect } = useConnect({
      connector: new InjectedConnector(),
    });
    const { disconnect } = useDisconnect()

    // Render
    return (
        <div>
            <ClientOnly>
                {!isConnected
                    ? <div>
                        <button className="h-10 bg-blue-600 text-white px-6 rounded-full hover:bg-blue-800 transition-colors ease-in-out duration-200" onClick={() => connect()}>Connect Wallet</button>
                    </div>
                    : <div>
                        <label className="text-zinc-400 block mb-2">Wallet Address Connected</label>
                        <code className="bg-zinc-700 text-zinc-200 p-4 rounded block mb-4"><pre>{address}</pre></code>
                        <button className="h-10 bg-red-600 text-white px-6 rounded-full hover:bg-red-800 transition-colors ease-in-out duration-200" onClick={() => disconnect()}>Connect Wallet</button>
                    </div>}
            </ClientOnly>
        </div>
    );
};
