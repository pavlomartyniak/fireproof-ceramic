import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'], weight: ['400', '600', '700'] });

export const metadata: Metadata = {
  title: 'Термо Кераміка',
  description: 'Шамотна плита різних розмірів для печей, камінів та промислових потреб.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" className={inter.className}>
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <Header />
        <main className="flex-grow mb-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}