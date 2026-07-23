import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Benefits from './components/Benefits';
import Objections from './components/Objections';
import Testimonials from './components/Testimonials';
import Urgency from './components/Urgency';
import Payment from './components/Payment';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import CTAFinal from './components/CTAFinal';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

function App() {
  return (
    <div className="min-h-screen bg-warm-white text-brownie">
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Benefits />
      <Objections />
      <Testimonials />
      <Urgency />
      <Payment />
      <Guarantee />
      <FAQ />
      <CTAFinal />
      <Contact />
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;
