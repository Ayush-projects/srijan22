import React from 'react';
import { Row, Col, Card, Icon } from 'antd';

const Mementos = (props) => {
  return (
    <div>
      <Row>
        <Col md={24} style={{ padding: '.5rem', textAlign: 'center'}}>
          <Card headStyle={{backgroundColor: 'rgba(22, 104, 159, 0.3)', borderBottom: '2px solid #00ebff', color: '#00ebff' }}
                bodyStyle={{backgroundColor: 'rgba(22, 104, 159, 0.2)', border: 'none' }}
                style={{ width: '100%',backgroundColor: 'rgba(0,0,0,0)', border: 'none' }}
                title={"Mementos"}>
            <Row>
              <Col md={24} className="eventInfo">
                <p style={{ color: '#00ebff', textAlign: 'left' }}>
                  <strong><Icon type="info-circle" /> Description: </strong><br />
                  What if Doge turned up in your campus next week? Trollface laughed at your midsem marks, or Fancy Winnie the Pooh lent you his tuxedo?
                  Better still, what if you and the bois could make history, this Srijan '20?<br /><br />
                  As entertainment goes through another paradigm shift, this decade, mark yourself safe from online oblivion, with 'Mementos'- our very own meme generating event.
                  Tickle the world's humerus and become an overnight sensation!

                  #Srijan_20
                  #tech_enthusiasts_assemble
                </p>
              </Col>
              <Col md={24}>
                <Row>
                  <Col lg={13}>
                    <div className="event-img-container">
                      <img src="https://firebasestorage.googleapis.com/v0/b/srijan20-temp.appspot.com/o/events%2Fmementos_page.jpg?alt=media&token=e94d5a9c-806e-482f-9bab-6f861933f345" alt="mementos poster"></img>
                    </div>
                  </Col>
                  <Col lg={11} style={{ padding: '1rem' }}>
                    <div className="events-poc-display" style={{ color: '#00ebff' }}>
                      <strong>Participation:</strong>
                      <ul>
                        <li>Participation is free for all.</li>
                        <li>Send in your memes on the submission page. LINK will be live from 16-FEB-2020 midnight on the Facebook Pages</li>
                        <li>The submissions will be accepted as per the rules.</li>
                      </ul>
                      <strong>Rules:</strong>
                      <ul>
                        <li>The participant must be registered on the SRIJAN portal.</li>
                        <li>The memes must not target a religious or political party or promote any related propaganda.</li>
                        <li>The memers can use any template available or create a new template from themselves.</li>
                        <li>In case a template is custom made with personal contacts i.e. using your friends’
                            pictures or contains you yourselves, a consent from all the persons in the meme would
                            be required to post the meme. (option will be available on the link)
                        </li>
                        <li>A participant can send in multiple entries upto 3 memes. Multiple entries must be made
                            within a time span of 24 hours from the first submission.
                        </li>
                      </ul>
                      <strong>Scoring and Posting:</strong>
                      <ul>
                        <li>The memes will be posted from 18 th February on our Facebook Page and Instagram handle stories in intervals.</li>
                        <li>The posting of memes will be on first come first basis.</li>
                        <li><strong>Scoring:</strong><br />
                            <ul>
                              <li>Facebook: Every react will count for 1 point, HAHA reacts will count for 2.<br />Likes will count to 0.</li>
                              <li>Other: In case of ties, shares, post reach and engagements may be considered.</li>
                            </ul>    
                        </li>
                      </ul>
                      <strong>
                        Disclaimer: The organisers and admins reserve the right to disqualify a meme submission in any
                        situation. The reason of the same will be informed to the creators by mail.
                      </strong>
                      <br />
                      <strong><Icon type="mail" /> jumemecell@gmail.com</strong>
                      <strong><Icon type="facebook" /> facebook.com/jumemecell</strong>
                      <strong><Icon type="instagram" /> @jumemecell</strong>
                      <br />
                      <div>
                        <a href="https://bit.ly/MEMEntos" target="_blank_">
                          <span className="btn">
                            <p style={{ padding: 0, margin: 0 }}>Submissions</p>
                          </span>
                        </a>
                        <a href="https://bit.ly/mementos_rules" target="_blank_">
                          <span className="btn">
                            <p style={{ padding: 0, margin: 0 }}>Rules</p>
                          </span>
                        </a>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Mementos;