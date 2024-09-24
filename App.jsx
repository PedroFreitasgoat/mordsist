import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Insights from "./components/Insights"
import Stats from "./components/stats"
import Pricing from "./components/Pricing"
import Testimonials from "./components/Testimonials"
import Faq from "./components/Faq"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="bg-[url('/bg.svg')] bg-cover">
      <Navbar />
      <Hero />
      <Insights />
      <Stats />
      <Pricing />
      <Testimonials />
      <Faq />
      <Footer />
    </div>
  )
}

export default App
