import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Typography, Modal, Button} from 'antd';
import fgimg from '../../assets/Images/fg-landing.png';
import srijanLogo from '../../assets/Images/srijan_logo_white.png';

import JULogo from '../../assets/Images/Jadavpur_University_Logo.svg';
import Particles from 'react-particles-js';
import './Landing.css';

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
                    <span className="btn">
          <a href="https://drive.google.com/uc?id=1PLxCWVKJ-2bPHM6yp4TVI2AUO7mZjLZZ&export=download"
             style={{padding: 0, margin: 0, color: 'white'}}>Checkout the Srijan'22 Brochure</a>
        </span>
                    <div className="landing-actions-main">
                        {/* {isAuthenticated ? (
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
            )} */}
                    </div>
                </div>) : null}

            s
            {showForm === 'login' ? <LoginForm setShowForm={setShowForm}/> : null}
            {showForm === 'register' ? <RegisterForm setShowForm={setShowForm}/> : null}
            {showForm === 'forgot-password' ? <PasswordResetForm/> : null}
        </section>
    )
}

export default Landing;