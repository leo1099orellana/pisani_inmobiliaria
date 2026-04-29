import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import WhyUs from './components/WhyUs.jsx'
import Properties from './components/Properties.jsx'
import Services from './components/Services.jsx'
import CTA from './components/CTA.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="bg-bg text-ink min-h-screen">
      <div className="relative">
        <Nav />
        <Hero />
      </div>

      <main>
        <About />
        <WhyUs />
        <Properties />
        <Services />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}