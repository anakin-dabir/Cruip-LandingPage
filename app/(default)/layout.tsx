// /app/(default)/layout.tsx
// Saturday, September 30th 2023, 12:47 am

'use client';

import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Footer from '@/components/Footer';

export default function DefaultLayout({children}: {children: React.ReactNode}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  return (
    <>
      <main className='grow'>{children}</main>

      <Footer />
    </>
  );
}
