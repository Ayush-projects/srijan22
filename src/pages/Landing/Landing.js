import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Typography, Modal, Button} from 'antd';
import fgimg from '../../assets/Images/fg-landing.png';
import srijanLogo from '../../assets/Images/srijan_logo_white.png';
import srijan_past_sponsers from '../../assets/Images/srijan_past_sponsers.png'
import srijan_past_footfalls from '../../assets/Images/srijan_past_footfalls.png'
import srijan_past_events from '../../assets/Images/srijan_past_events.png'
import srijan_past_events1 from '../../assets/Images/srijan_past_events1.png'
import srijan_past_attraction from '../../assets/Images/srijan_past_attraction.png'
import JULogo from '../../assets/Images/Jadavpur_University_Logo.svg';
import Particles from 'react-particles-js';
import './Landing.css';
import './scroll.css'

import LoginForm from '../../components/Login/Login';
import RegisterForm from '../../components/Register/Register';
import PreLoader from '../../components/PreLoader/PreLoader';
import PasswordResetForm from '../../components/PasswordResetForm/PasswordResetForm';
import h42result from '../../assets/Images/h42 prelims result.jpg';
import ptbresult from '../../assets/Images/ptb prelims result.jpg';

const {Title} = Typography;

const Landing = props => {
    const {isAuthenticated, username} = props;
    const [showForm, setShowForm] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <div style={{width: "100vw"}}>
       <section className="landing">
            <PreLoader setIsLoading={setIsLoading}/>
            {/* <Modal
          title="Prelims results"
          visible={modalVisible}
          onOk={() => setModalVisible(false)}
          onCancel={() => setModalVisible(false)}
          footer={[
            <Button key="back" type="primary" onClick={() => setModalVisible(false)}>
              Go back
            </Button>
          ]}>
          <div style={{ width: '100%', marginBottom: '.75rem' }}>
            <h4>H42 prelims result</h4>
            <img src={h42result} alt="h42 prelims result" style={{ width: '100%' }}/>
          </div>
          <div style={{ width: '100%' }}>
            <h4>Pass the baton prelims result</h4>
            <img src={ptbresult} alt="ptb prelims result" style={{ width: '100%' }}/>
          </div>
      </Modal> */}
            <Particles className="particles"
                       params={{
                           "particles": {
                               "number": {
                                   "value": 250,
                                   "density": {
                                       "enable": false
                                   }
                               },
                               "size": {
                                   "value": 3,
                                   "random": true
                               },
                               "move": {
                                   "direction": "bottom",
                                   "out_mode": "out"
                               },
                               "line_linked": {
                                   "enable": false
                               }
                           },
                           "interactivity": {
                               "events": {
                                   "onhover": {
                                       "enable": true,
                                       "mode": "repulse"
                                   }
                               },
                               "modes": {
                                   "repulse": {
                                       "particles_nb": 10
                                   }
                               }
                           }
                       }}
                       style={{height: '100vh', width: '100%'}}/>
            <img id="fg-img" className="fgimg" src={fgimg} alt="landing-fg"/>
            {!showForm && !isLoading ? (
                <div className="landing-actions">
                    <div className="landing-actions-heading">
                        <img src={JULogo} alt="ju-logo" height="50px" width="50px"/>
                        <Title level={4} style={{color: '#fafafa', margin: 0}}>JADAVPUR UNIVERSITY</Title>
                    </div>
                    <img src={srijanLogo} style={{animation: 'fadeIn 4s ease-in', paddingTop: '10%'}} alt="srijan-logo"
                         width="500px"/>
                    <Title level={4} style={{
                        color: '#fafafa',
                        margin: 0,
                        animation: 'fadeIn 4s ease-in',
                        marginTop: '-1.25rem',
                        marginBottom: '.75rem'
                    }}>
                        14th -17th April
                    </Title>
                    <span className="btn"
                          onClick={() => window.open("/merchandise", "_self")}>
                   <p
              style={{padding: 0, margin: 0, color: 'white'}}> Srijan'22 Merchandise</p>
             
        </span>
       
        
                    <div className="landing-actions-main">
                        {isAuthenticated ? (
              <Link to="/app/dashboard">
                <span className="btn">
                  <p style={{ padding: 0, margin: 0 }}>Go to Dashboard ({username})</p>
                </span>
              </Link>) : (
              <>
                <span className="btn" style={{ marginRight: '1rem' }} onClick={e => setShowForm('login')}>
                  <p style={{ padding: 0, margin: 0 }}>Login</p>
                </span>
                <span className="btn" onClick={e => setShowForm('register')}>
                  <p style={{ padding: 0, margin: 0 }}>Register</p>
                </span>
              </>
            )}


          
                    </div>

                </div>) : null}

            {showForm === 'login' ? <LoginForm setShowForm={setShowForm}/> : null}
            {showForm === 'register' ? <RegisterForm setShowForm={setShowForm}/> : null}
            {showForm === 'forgot-password' ? <PasswordResetForm/> : null}
            
            <a href="/video.html">
        <span className="btn1" >
                  
              <div id="scrollContainer" style={{marginTop: "1rem"}}>
              <div id="scroll" style={{width: "2em", height: "2em", backgroundColor: "transparent" , zIndex: "80", 
            bottom: "25px", position: "absolute", borderWidth: "0 0.25em 0.25em 0",  borderStyle: "solid", borderColor: "antiquewhite",  animation: "scrolldown 1.2s ease-in-out infinite 0.15s"}}></div>
            <div id="scroll" style={{width: "2em", height: "2em", backgroundColor: "transparent" , zIndex: "80", 
            bottom: "40px", position: "absolute", borderWidth: "0 0.25em 0.25em 0",  borderStyle: "solid", borderColor: "antiquewhite",  animation: "scrolldown 1.2s ease-in-out infinite"}}></div>
            </div>
        </span>
        </a>
        </section>
        <br/>
        <br/>
        {/* <div class="wise-iframe-wrapper" id="homevideo"><iframe width="315" height="700" src="https://www.youtube.com/embed/bcRQjfqS2uQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture autoplay" allowfullscreen></iframe></div> */}
        {/* <img src={srijan_past_footfalls} style={{height: "100vh", width: "100vw"}}></img><br/> <br/>
        <img src={srijan_past_sponsers} style={{height: "100vh", width: "100vw"}}></img><br/> <br/>
        <img src={srijan_past_events} style={{height: "100vh", width: "100vw"}}></img><br/> <br/>
        <img src={srijan_past_events1} style={{height: "100vh", width: "100vw"}}></img><br/> <br/>
        <img src={srijan_past_attraction} style={{height: "100vh", width: "100vw"}}></img><br/> <br/> */}
        </div>
    )
}

export default Landing;