import '../App.css'
import AboutMe from './AboutMe'
import Contact from './Contact'
import Footer from './Footer'
import Header from './Header'
import PartnerLogos from './PartnerLogos/PartnerLogos'

function App() {
  return (
    <>
      <Header />
      <main>
        <h1>APP</h1>
        <AboutMe />
        <PartnerLogos/>
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
