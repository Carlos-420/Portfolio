import { useState } from 'react'
import yoxd from './img/si.jpg'
import './App.css'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1500, // animation duration
      once: true,     // whether animation should happen only once
      mirror: false,
    });
  }, []);

  return (
    <>
      <div
        className='welcome'
        id="about"
        data-aos="fade-up"
      >
        <div className='welcome-content'>
          <div className='img'>
            <img src={yoxd}></img>
          </div>
          <div className='Bio'>
            <h1>HI! I'm Carlos Milián 👋</h1>
            <h2>Full-Stack developer</h2>
            <h3>Fourth-year college student</h3>
            <div className='cv-social'>
              <a href='./Carlos_Milian_CV.pdf' className='downLink'><button className='downcv'>Download CV</button></a>
              <span className='open-to-work'>Open To Work</span>
            </div>
            <p className="about-me">
              <br></br>
              Competitive and passionate developer who loves to translate all his ideas to code going from solutions for all kind of problems to complex applications and develop them based on the knowledge I have.
              <br></br>
              <br></br>
              Learning new skills and tecnologies has always been one of my hobbies dedicating myself to it at my free times.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
