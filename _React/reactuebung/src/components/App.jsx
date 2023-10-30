import '../App.css'
import AboutMe from './AboutMe'
import Contact from './Contact'
import Footer from './Footer'
import Header from './Header'

function App() {


  return (
    <div>
      <Header />
      <main>
        <h1>APP</h1>
        <AboutMe />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
