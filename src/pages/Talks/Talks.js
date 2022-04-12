import React from 'react';
import { Row, Col, Card, Icon } from 'antd';
import F5PosterOne from '../../assets/Images/F5_Srijan_poster_1.jpg';
import F5PosterTwo from '../../assets/Images/F5_Srijan_poster_2.jpg';
import F5PosterThree from '../../assets/Images/F5_Srijan_poster_3.jpg';
import './Talks.css';

const Talks = props => {
  return (
    <section className="talks">
      <Row>
        <Col lg={24} className="flex-container" style={{ padding: '.5rem', textAlign: 'center'}}>
          <Card headStyle={{backgroundColor: 'rgba(22, 104, 159, 0.3)', borderBottom: '2px solid #00ebff', color: '#00ebff' }}
                bodyStyle={{backgroundColor: 'rgba(22, 104, 159, 0.2)', border: 'none' }}
                style={{ width: '100%',backgroundColor: 'rgba(0,0,0,0)', border: 'none', color: '#00ebff' }}
                title="F5">
            <Row>
              <Col lg={14}>
                <div className="talks-img-container">
                  <img src={F5PosterOne} alt="F5 One" />
                </div>
              </Col>
              <Col lg={10} className="talks-info">
                <h5 className="talks-subtitle">
                  <Icon type="calendar" /> Date: 14th April<br />
                  <Icon type="phone" /> Suvankar Mondal (7001082597)&nbsp;&nbsp;|&nbsp;&nbsp;Navonil Sarkar (8918845868)
                </h5>
                <p>
                  Are you a coding enthusiast?
                  <br /><br />
                  Looking for some motivation to get your coding journey started? We have got you covered!
                  <br /><br />
                  Join us on 14 th April, 2022 to get inspired by a self-built software engineer at Google, Mr. Raj Vikramaditya(Striver. He has a YouTube channel with over 160K+ subscribers.
                  <br /><br />
                  He is a Candidate Master(2020) at Codeforces and 6 star at Codechef(2019) who shares knowledge on DSA.
                  <br /><br />
                  Striver will be there on 14th April. Will you?
                  <br /><br />
                  #Srijan_22<br />
                  #tech_enthusiasts_assemble
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg={14}>
                <div className="talks-img-container">
                  <img src={F5PosterTwo} alt="F5 Two" />
                </div>
              </Col>
              <Col lg={10} className="talks-info">
                <h5 className="talks-subtitle">
                  <Icon type="calendar" /> Date: 14th April<br />
                  <Icon type="phone" /> Suvankar Mondal (7001082597)&nbsp;&nbsp;|&nbsp;&nbsp;Navonil Sarkar (8918845868)
                </h5>
                <p>
                Confused and worried about Placements, College and Exams? Calm Yourselves because we are back with an exciting interactive session for you by Mr. Manish Mazumder. 
                <br /><br />
                Mr. Mazumder has his own Youtube channel with 15K+ subscribers and he was a former software developer at VMware India and his currently working on his dream project to create a great space for students. He did his M.Tech in CSE from IIT Kanpur.
                <br /><br />
                Join us in this interactive session with Mr. Manish Mazumder.
                <br /><br />
                #Srijan_22<br />
                #tech_enthusiasts_assemble
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg={14}>
                <div className="talks-img-container">
                  <img src={F5PosterThree} alt="F5 Three" />
                </div>
              </Col>
              <Col lg={10} className="talks-info">
                <h5 className="talks-subtitle">
                  <Icon type="calendar" />Date: 14th April<br />
                  <Icon type="phone" /> Suvankar Mondal (7001082597)&nbsp;&nbsp;|&nbsp;&nbsp;Navonil Sarkar (8918845868)
                </h5>
                <p>
                "The secret of getting ahead is getting started." 
                  <br /><br />
                  Keeping this in mind, what could be a better start towards a bright future apart from registering  for this interactive session by Soumita Roy Chowdhury.
                  <br /><br />
                  She is specialized in business development, , account management in video, mobile and technology industry accross APAC, US and India. She is currently working at Mobilewalla, Singapore. 
                  <br /><br />
                  So? What are you waiting for?
                  <br /><br />
                  Come and join this amazing session without any further adieu.
                </p>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </section>
  );
}

export default Talks;