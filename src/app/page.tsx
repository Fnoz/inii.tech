import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AppShowcase from '@/components/AppShowcase';
import About from '@/components/About';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AppShowcase />
      <About />
      <Footer />
    </main>
  );
}
