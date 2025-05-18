'use client'

import './globals.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import LoadingSpinner from './Components/LoadingSpinner/LoadingSpinner'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'


export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();


  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [pathname]);
  return (
    <html lang="en">
      <body className='flex flex-col min-h-screen bg-pink-950'>
        <header>
          <Navbar />
        </header>
        <main className='flex-grow'>
         {loading? <LoadingSpinner />: children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}