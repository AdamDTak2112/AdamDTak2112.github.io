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
      
      <body className="w-screen">
        <div className="container flex flex-col justify-between h-screen mx-auto
       bg-[#dfd3b1] min-w-full"> 
          <Header/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  )
}
