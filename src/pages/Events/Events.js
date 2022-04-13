import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getEvents } from '../../firebase/utility';
import { Row, Col, Card, Icon, Spin } from 'antd';
import './Events.css';

const Events = props => {
  const [fetchedEvents, setFetchedEvents] = useState([]);

  useEffect(() => {
    getEvents()
      .then(data => {
        const events = [];
        for (const eventId in data) {
          if (eventId === "024_f5") { continue; }
          events.push(data[eventId]);
        }
        setFetchedEvents(events);
      })
  }, [])

  return (
    <section>
      <Row>
        {fetchedEvents.length > 0 ? (
          <Col lg={24} className="flex-container" style={{ padding: '.5rem', textAlign: 'center'}}>
            <Card headStyle={{backgroundColor: 'rgba(22, 104, 159, 0.3)', borderBottom: '2px solid #00ebff', color: '#00ebff' }}
                  bodyStyle={{backgroundColor: 'rgba(22, 104, 159, 0.2)', border: 'none' }}
                  style={{ width: '100%', backgroundColor: 'rgba(0,0,0,0)', border: 'none', color: '#00ebff' }}
                  title="Srijan Events">
              <div className="events-grid">
                {/* Mementos */}
                {/* <div className="events-card">
                  <div className="events-card-header">
                    <div style={{ width: '100%' }}>
                      <img
                        alt="Mementos poster"
                        src="https://firebasestorage.googleapis.com/v0/b/srijan20-temp.appspot.com/o/events%2Fmementos.jpg?alt=media&token=9052ad2e-b4a4-4dd2-b406-b1b6537df7f2"
                        style={{ width: '100%' }}/>
                    </div>
                  </div>
                  <div className="events-card-content">
                    <strong style={{ color: '#00ebff', fontSize: '1.2rem' }}>Mementos</strong>
                    <small style={{ color: '#00ebff', textTransform: 'uppercase' }}>(Misc)</small>
                    <Link to="/app/events/mementos" className="events-card-visit-btn"><Icon type="export" />&nbsp;Visit page</Link>
                  </div>
                </div> */}
                {/* Mementos */}
                {fetchedEvents.map((ev, index) => (
                    <Link to={"/app/events/" + ev.code} className="events-card-visit-btn">
                  <div className="events-card" key={index}>
                    <div className="events-card-header">
                      <div style={{ width: '100%' }}>
                        <img
                          alt={ev.name + " poster"}
                          src={ev.poster}
                          style={{ width: '100%' }}/>
                      </div>
                    </div>
                    <div className="events-card-content">
                      <strong style={{ color: '#00ebff', fontSize: '1.2rem' }}>{ev.name}</strong>
                      <small style={{ color: '#00ebff', textTransform: 'uppercase' }}>({ev.type})</small>
                      <Link to={"/app/events/" + ev.code} className="events-card-visit-btn"><Icon type="export" />&nbsp;Visit page</Link>
                    </div>
                  </div>
                  </Link>
                ))}
              </div>
            </Card>
          </Col>
        ) : <Col span={24} className="flex-container" ><Spin /></Col>}
      </Row>
    </section>
  );
}

export default Events;