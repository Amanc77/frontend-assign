// app/layout.js
import './globals.css';
import Header from '../components/Header';
import { CartProvider } from '../context/CartContext';

export const metadata = {
  title: 'My Store',
  description: 'An awesome store',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
              {children}
            </main>
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
