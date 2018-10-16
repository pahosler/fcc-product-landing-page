import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Description from './Description'
import Contact from './Form'
import Footer from './Footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faHeartbeat, fas } from '@fortawesome/free-solid-svg-icons'
import './styles.css'

library.add(fab, fas, faHeart, faHeartbeat)

function App() {
  return (
    <div className="App">
      <Header />
      <section name="Description" className="section">
        <a href="#Description" id="desciption">
          Used Tardis in Good Working Condition
        </a>
        <div className="description">
          <p>
            Gently? used TARDIS. Have fun with your friends while traveling in
            your very own time machine. Don't let the picture full you, this
            TARDIS is definitely BIGGER on the inside!
          </p>
        </div>
      </section>
      <section id="Pricing" className="section">
        <a href="#" id="pricing">
          Only 5,000,000,000 Santorian Credits
        </a>
        <Description />
      </section>
      <section id="Contact" className="section">
        <a href="#Contact" id="contact">
          Contact
        </a>
        <div className="contact">
          <Contact />
        </div>
      </section>
      <Footer />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
