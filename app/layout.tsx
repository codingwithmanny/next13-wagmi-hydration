// Imports
// ========================================================
import RootProvider from "./providers";
import '../styles/globals.css';

// Layout
// ========================================================
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className="bg-zinc-900">
          <RootProvider>
            {children}
          </RootProvider>
      </body>
    </html>
  )
};
