import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import WhyChooseUs from './components/WhyChooseUs.tsx';
import MarketingFunnel from './components/MarketingFunnel.tsx';
import Statistics from './components/Statistics.tsx';
import SMMA from './components/SMMA.tsx';
import Footer from './components/Footer.tsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-skyblue-50">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <MarketingFunnel />
        <Statistics />
        <SMMA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
