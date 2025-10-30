import { useEffect } from 'react';
import Header from '@/react-app/components/Header';
import Hero from '@/react-app/components/Hero';
import Features from '@/react-app/components/Features';
import Solutions from '@/react-app/components/Solutions';
import Testimonials from '@/react-app/components/Testimonials';
import Pricing from '@/react-app/components/Pricing';
import BookingSection from '@/react-app/components/BookingSection';
import Footer from '@/react-app/components/Footer';

export default function Home() {
  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Solutions />
        <Testimonials />
        <Pricing />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
}
