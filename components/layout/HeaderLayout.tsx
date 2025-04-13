"use client";
import { useState, useEffect } from 'react';
import Header from './Header'; // افترض إن ده مكون الـ Header بتاعك
import { Toaster } from '../ui/sonner';
import { usePathname } from 'next/navigation';

const HeaderLayout = ({ links }: { links: any }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive =  pathname === '/' || pathname === '/blogs' || pathname === '/diplomas'

  return (
   <>
     <div
      className={`fixed top-0 inset-x-0 z-50 w-full transition-colors duration-300 ${
        isScrolled ? 'bg-primary/70 backdrop-blur-sm ' : isActive ? 'bg-transparent' : 'bg-primary/90 backdrop-blur-sm '
      }`}
    >
      <Header links={links} />
      <Toaster position="top-center" />
    </div>
    {!isActive && <div className="h-16" />}
   </>
  );
};

export default HeaderLayout;