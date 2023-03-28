import '../globals.css';
import { Inter } from 'next/font/google';

export const metadata = {
  title: 'Swipe North',
  description: 'Swipa på jobb i Skellefeå',
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '900'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
         <main className="mainContent">{children}</main>
      </body>
    </html>
  );
}
