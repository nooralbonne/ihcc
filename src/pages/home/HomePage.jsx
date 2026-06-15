import Header from "../../components/Header.jsx"
import Hero from "../../components/Hero.jsx"
import About from "../../components/About.jsx"
import Services from "../../components/Services.jsx"
import WhyUs from "../../components/WhyUs.jsx"
import Projects from "../../components/Projects.jsx"
import Testimonials from "../../components/Testimonials.jsx"
import RequestQuote from "../../components/RequestQuote.jsx"
import Footer from "../../components/Footer.jsx"

export default function App() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Projects />
        <Testimonials />
        <RequestQuote />
      </main>
    </>
  )
}
