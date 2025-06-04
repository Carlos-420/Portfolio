import { useState } from 'react'
import Firebase from './img/Firebase.png'
import './Projects.css'
import Jj1 from './img/jj1.png';
import Jj2 from './img/Jj2.png';
import Jj3 from './img/Jj3.png';
import Jj4 from './img/Jj4.png';
import Web1 from './img/web1.png';
import Web2 from './img/web2.png';
import Web3 from './img/web3.png';
import Web4 from './img/web4.png';
import Github from './img/Github.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

function Projects() {
  const [count, setCount] = useState(0);
  
    return (
      <>
        <div className='projects-div' id="projects">
          <h1>Projects</h1>
          <div className="project-grid">
            <div className='project-box'>
              <div className='prueba card1' style={{width: '550px', height: '500px', padding: '22px'}}></div>
              <div className="project-card">
                <Swiper 
                  navigation={true} 
                  modules={[Navigation]} 
                  style={{display:'flex', color:'white', alignItems:'center', border: '1px solid black'}}className="mySwiper" loop="true"
                  autoplay={{
                    delay: 3000,   // 3 seconds
                    disableOnInteraction: false, // keeps autoplay running after user interacts
                  }}
                >
                  <SwiperSlide><img src={Jj1}/></SwiperSlide>
                  <SwiperSlide><img src={Jj2}/></SwiperSlide>
                  <SwiperSlide><img src={Jj3}/></SwiperSlide>
                  <SwiperSlide><img src={Jj4}/></SwiperSlide>
                </Swiper>
                <h3>Sitio Web SOLUCIONES J&J</h3>
                <p style={{color: 'rgb(175, 175, 175)', fontSize: '20px', marginTop: '-15px'}}>An e-commerce for a importer business of industrial equipment.</p>
                <br></br>
                <div style={{marginTop: '-15px'}}>
                  <img src='https://cdn.iconscout.com/icon/free/png-256/free-html-5-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175208.png' style={{width: '35px', height: '35px', margin: '5px'}}/>
                  <img src='https://icons.veryicon.com/png/o/application/skills-section/css3-5.png' style={{width: '35px', height: '35px', margin: '5px'}}/>
                  <img src='https://cdn.iconscout.com/icon/free/png-256/free-php-28-226043.png?f=webp&w=256' style={{width: '35px', height: '35px', margin: '5px'}}/>

                </div>
                <br></br>
                <a href="https://jjsolucionesgt.com/" className="visit" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>VISIT &rarr;</a>
              </div>
            </div>

            <div className='project-box'>
              <div className='prueba card1' style={{width: '550px', height: '500px', padding: '22px'}}></div>
              <div className="project-card">
                <Swiper navigation={true} modules={[Navigation]} style={{display:'flex', color:'white', alignItems:'center', border: '1px solid black'}} className="mySwiper" loop="true">
                  <SwiperSlide><img src={Web1}/></SwiperSlide>
                  <SwiperSlide><img src={Web2}/></SwiperSlide>
                  <SwiperSlide><img src={Web3}/></SwiperSlide>
                  <SwiperSlide><img src={Web4}/></SwiperSlide>
                </Swiper>
                <h3>Big Social Network</h3>
                <p style={{color: 'rgb(175, 175, 175)', fontSize: '20px', marginTop: '-15px', fontFamily: ''}}>A Twitter based social network made by myself. Project still on developing.</p>
                <br></br>
                <div style={{marginTop: '-15px'}}>
                  <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" style={{width: '35px', height: '35px', margin: '5px'}}/>
                  <img src={Firebase} style={{width: '35px', height: '35px', margin: '5px'}}/>
                </div>
                <br></br>
                <a href="https://github.com/carl-m94/proyecto_web" className="visit" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><img src={Github} width="30px" height="30px"alt="" /></a>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default Projects
  