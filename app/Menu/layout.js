import './globals.css'
import { Inter } from 'next/font/google'


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
          <main className='mainContent'>{children}</main>
      </body>
    </html>
  )}