'use client';

// Imports
// ========================================================
import { useState, useEffect } from 'react';

// Page
// ========================================================
export default function ClientOnly({ children }: { children: JSX.Element | null }) {
    // State / Props
    const [hasMounted, setHasMounted] = useState(false);

    // Hooks
    useEffect(() => {
        setHasMounted(true);
    }, [])

    // Render
    if (!hasMounted) return null;

    return children
};

export const withClient = (Component: () => JSX.Element) => {
    const element = () => (
        <ClientOnly>
            <Component />
        </ClientOnly>
    );
    element.displayName = 'ClientOnly';
    return element;
};

