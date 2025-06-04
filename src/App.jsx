import { useState } from 'react'
import yoxd from './img/si.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='welcome' id="about">
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
              Competitive and passionated developer who loves to sample all his ideas to code going from solution for all kind of problems to complex applications finding the way applicate them based on the knowledge I have.
              <br></br>
              <br></br>
              Learning new skills and Tecnologies has always been one of my hobbies dedicating myself to it at my free times.
            </p>
          </div>
        </div>
      </div>
 
    </>
  )
}

export default App
