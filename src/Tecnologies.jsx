import { useState } from 'react'
import Netbeans from './img/netbeans.png';
import Npm from './img/npm.png';
import Visual from './img/visual.png';
import GitIcon from './img/Git-Icon-1788C.png';
import Java from './img/java.png';
import Php from './img/php.webp';
import Nodejs from './img/nodejs.png';
import Tux from './img/Tux.png';
import AwsEc2 from './img/aws-ec2.png';
import RDS from './img/RDS.svg';
import Mongo from './img/mongo.png';
import Postgres from './img/postgres.png';
import Mysql from './img/mysql.png';
import Figma from './img/Figma-logo.svg';
import ReactLogo from './img/React.webp';
import Js from './img/js.png';
import Css3 from './img/css3.png';
import Html5 from './img/html5.webp';
import Firebase from './img/Firebase.png'
import './Tecnologies.css'
import './App.css'

function Tecnologies() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="tecnologies-div" id="skillset">        
        <h1>Skillset</h1>
        <div class='card-grid'>
            <div class="card-grid1">
                <div className='card-box'>
                    <div className="prueba card2" style={{ width: '400px', height: '200px', padding: '22px' }}></div>
                    <div className="card">
                        <h3>Front-End</h3>
                        <div className="image-grid">
                        <div className="skill-cell"><img src={Html5} alt="HTML5 logo" /></div>
                        <div className="skill-cell"><img src={Css3} alt="CSS3 logo" /></div>
                        <div className="skill-cell"><img src={Js} alt="JavaScript logo" /></div>
                        <div className="skill-cell"><img src={ReactLogo} alt="React logo" /></div>
                        <div className="skill-cell"><img src={Figma} alt="Figma logo" /></div>
                        </div>
                    </div>
                </div>

                <div className='card-box'>
                    <div className="prueba card2" style={{ width: '400px', height: '200px', padding: '22px' }}></div>
                    <div className="card">
                        <h3>Others</h3>
                        <div className="image-grid">
                        <div className="skill-cell"><img src={Mysql} style={{ width: '40px', height: '40px' }} alt="MySQL logo" /></div>
                        <div className="skill-cell"><img src={Postgres} style={{ width: '35px', height: '35px' }} alt="Postgres logo" /></div>
                        <div className="skill-cell"><img src={Mongo} style={{ width: '40px', height: '40px' }} alt="MongoDB logo" /></div>
                        <div className="skill-cell"><img src={RDS} style={{ width: '35px', height: '35px' }} alt="RDS logo" /></div>
                        <div className="skill-cell"><img src={AwsEc2} alt="AWS EC2 logo" /></div>
                        <div className="skill-cell"><img src={Tux} alt="Linux logo" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card-grid1'>
                <div className='card-box'>
                    <div className="prueba card2" style={{ width: '400px', height: '120px', padding: '22px' }}></div>
                    <div className="card" style={{ width: '400px', height: '120px' }}>
                        <h3>Back-End</h3>
                        <div className="image-grid">
                        <div className="skill-cell"><img src={Nodejs} alt="Node.js logo" /></div>
                        <div className="skill-cell"><img src={Php} style={{ width: '40px', height: '40px' }} alt="PHP logo" /></div>
                        <div className="skill-cell"><img src={Java} alt="Java logo" /></div>
                        <div className="skill-cell"><img src={Firebase} alt="Firebase logo" /></div>
                        </div>
                    </div>
                </div>

                <div className='card-box'>
                    <div className="prueba card2" style={{ width: '400px', height: '120px', padding: '22px' }}></div>
                    <div className="card" style={{ width: '400px', height: '120px' }}>
                        <h3>Tooling/Productivy</h3>
                        <div className="image-grid">
                        <div className="skill-cell"><img src={GitIcon} alt="Git logo" /></div>
                        <div className="skill-cell"><img src={Visual} alt="VS Code logo" /></div>
                        <div className="skill-cell"><img src={Npm} alt="NPM logo" /></div>
                        <div className="skill-cell"><img src={Netbeans} alt="NetBeans logo" /></div>
                        </div>
                    </div>
                </div>
            </div> 
            </div>
        </div>
    </>
  )
}

export default Tecnologies
