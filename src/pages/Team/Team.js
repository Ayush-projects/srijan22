import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Spin } from 'antd';
import { database } from '../../firebase/config';
import './Team.css';

const Team = props => {
  const [coreTeam, setCoreTeam] = useState(null);
  const [eventCoordinators, setEventCoordinators] = useState(null);

  useEffect(() => {
    database.ref("srijan/team/core").once('value')
      .then(coreTeamRef => {
        const data = coreTeamRef.val();
        const coreTeamMembers = [];
        for (let id in data) {
          coreTeamMembers.push(data[id]);
        }
        coreTeamMembers.sort((a, b) => a.order - b.order);
        setCoreTeam(coreTeamMembers);
        return database.ref("srijan/team/events").once('value')
      })
      .then(eventTeamRef => {
        const data = eventTeamRef.val();
        const eventCoorMems = [];
        for (let id in data) {
          eventCoorMems.push(data[id]);
        }
        eventCoorMems.sort((a, b) => a.event.localeCompare(b.event));
        setEventCoordinators(eventCoorMems);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <section className="team">
      <Row>
        <Col lg={24} className="flex-container" style={{ padding: '.5rem', textAlign: 'center'}}>
          <Card headStyle={{backgroundColor: 'rgba(22, 104, 159, 0.3)', borderBottom: '2px solid #00ebff', color: '#00ebff' }}
                bodyStyle={{backgroundColor: 'rgba(22, 104, 159, 0.2)', border: 'none' }}
                style={{ width: '100%',backgroundColor: 'rgba(0,0,0,0)', border: 'none', color: '#00ebff' }}
                title="Core Team">
            <div className="team-grid">
              {coreTeam ? coreTeam.map((mem, index) => (
                <div className="team-card" key={index}>
                  <div className="team-card-header">
                    <div style={{ width: '100%' }}>
                      <img
                        alt={mem.name}
                        src={mem.dp}
                        style={{ width: '100%' }}/>
                    </div>
                  </div>
                  <div className="team-card-content">
                    <strong style={{ color: '#00ebff', fontSize: '1.2em' }}>{mem.name}</strong>
                    <strong style={{ color: '#00ebff', fontSize: '.9em' }}>{mem.post}</strong>
                    <small style={{ color: '#00ebff', textTransform: 'uppercase' }}>({mem.dy})</small>
                  </div>
                </div>
              )) : <Spin />}
            </div>
          </Card>
        </Col>
        <Col lg={24} className="flex-container" style={{ padding: '.5rem', textAlign: 'center'}}>
          <Card headStyle={{backgroundColor: 'rgba(22, 104, 159, 0.3)', borderBottom: '2px solid #00ebff', color: '#00ebff' }}
                bodyStyle={{backgroundColor: 'rgba(22, 104, 159, 0.2)', border: 'none' }}
                style={{ width: '100%',backgroundColor: 'rgba(0,0,0,0)', border: 'none', color: '#00ebff' }}
                title="Event Coordinators">
            <div className="team-grid">
              {eventCoordinators ? eventCoordinators.map((mem, index) => (
                <div className="team-card" key={index}>
                  <div className="team-card-header">
                    <div style={{ width: '100%' }}>
                      <img
                        alt={mem.name}
                        src={mem.dp}
                        style={{ width: '100%' }}/>
                    </div>
                  </div>
                  <div className="team-card-content">
                    <strong style={{ color: '#00ebff', fontSize: '1.2em' }}>{mem.name}</strong>
                    <strong style={{ color: '#00ebff', fontSize: '.9em' }}>{mem.event}</strong>
                  </div>
                </div>
              )) : <Spin />}
            </div>
          </Card>
        </Col>
      </Row>
    </section>
  );
}

export default Team;