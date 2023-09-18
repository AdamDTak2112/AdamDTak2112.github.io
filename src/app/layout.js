import './globals.css';
import { Inter } from 'next/font/google';
import Header from './header';
import Footer from './footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tak Software',
  description: 'Software Testing extraordinaire',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className="h-full w-full border-blue border-2">
        <div className="container">
          <Header/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  )
}
