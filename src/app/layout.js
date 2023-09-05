import './globals.css'
import { Inter } from 'next/font/google';
import Header from './header';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tak Software',
  description: 'Software Testing extraordinaire',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
