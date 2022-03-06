// import React, { useState, useEffect, useContext } from 'react';
// import { Row, Col, Card, Form, Input, Alert, Spin, Icon, Button, Modal } from 'antd';
// import { AuthContext } from '../../context/authContext';
// import { getUserInfo } from '../../firebase/utility';
// import { firestore } from '../../firebase/config';
import React from 'react';
import { Row, Col, Card, Icon } from 'antd';
import ethicalHackingImg from '../../assets/Images/hacking WA.png';
import './Workshops.css';

// const isValid = (department, college, year, phoneNo) => {
//   return (department !== "") && (college !== "") && (year !== "") && (phoneNo !== "");
// }

const Workshops = props => {
  // const [userInfo, setUserInfo] = useState(null);
  // const [modalVisible, setModalVisible] = useState(false);
  // const [isRegistered, setIsRegistered] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // const [formError, setFormError] = useState(false);
  // const [checkoutDisabled, setCheckoutDisabled] = useState(false);
  // const { currentUser } = useContext(AuthContext);

  // useEffect(() => {
    // firestore.collection('workshopOrders').get()
    //   .then(querySnapshot => {
    //     querySnapshot.docs.forEach(doc => {
    //       const data = doc.data();
    //       if (data.userId === currentUser.uid && data.paymentStatus === 'paid') {
    //         setIsRegistered(true);
    //       }
    //     })
    //   })
    // getUserInfo(currentUser.uid)
    //   .then(data => setUserInfo(data))
    //   .catch(err => console.log(err))
  // }, [currentUser.uid])

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setIsLoading(true);
  //   const { username, department, college, year, email, phoneNumber } = event.target.elements;
  //   if (isValid(department.value, college.value, year.value, phoneNumber.value)) {
  //     setCheckoutDisabled(true);
  //     const date = new Date();
  //     const data = {
  //       date: date.toDateString() + " " + date.toTimeString(),
  //       name: username.value,
  //       department: department.value,
  //       college: college.value,
  //       year: year.value,
  //       email: email.value,
  //       phoneNo: phoneNumber.value,
  //       paymentStatus: "manual-payment",
  //       userId: currentUser.uid,
  //       amount: 700
  //     }
  //     firestore.collection('workshopOrders').add(data)
  //       .then(docRef => {
  //         window.location.href = `https://us-central1-srijan20-temp.cloudfunctions.net/app/workshops/txn?orderId=${docRef.id}&amount=700`;
  //       })
  //       .catch(err => console.log(err));
  //   } else {
  //     setCheckoutDisabled(false);
  //     setFormError(true);
  //     setIsLoading(false);
  //   }
  // }

  // const showModal = () => setModalVisible(true);
  // const hideModal = () => setModalVisible(false);

  return (
    <section className="workshops">
      <Row>
        <Col lg={24} className="flex-container" style={{ padding: '.5rem', textAlign: 'center'}}>
          <Card headStyle={{backgroundColor: 'rgba(22, 104, 159, 0.3)', borderBottom: '2px solid #00ebff', color: '#00ebff' }}
                bodyStyle={{backgroundColor: 'rgba(22, 104, 159, 0.2)', border: 'none' }}
                style={{ width: '100%',backgroundColor: 'rgba(0,0,0,0)', border: 'none', color: '#00ebff' }}
                title="Workshops">
            {/* <Modal
              className="registration-modal"
              title="Hacker's Den registration"
              visible={modalVisible}
              onOk={() => console.log('ok')}
              onCancel={hideModal}
              footer={[
                <Button key="back" type="primary" onClick={hideModal}>
                  Go back
                </Button>
              ]}>
              {userInfo ? (
                <Form onSubmit={handleSubmit} layout="horizontal" name="modalForm" className="workshop-form">
                  {formError ? <Alert message="Form fields can't be blank!" type="error" /> : null}
                  <br />
                  <Form.Item label="Name" labelCol={{ span: 6 }} wrapperCol={{ span: 16 }}>
                    <Input
                      className="workshop-input"
                      name="username"
                      disabled
                      value={userInfo.name}
                      prefix={<Icon type="user" style={{ color: '#222' }} />}
                      placeholder="Name" />
                  </Form.Item>
                  <Form.Item label="Department" labelCol={{ span: 6 }} wrapperCol={{ span: 16 }}>
                    <Input
                      className="workshop-input"
                      name="department"
                      prefix={<Icon type="solution" style={{ color: '#222' }} />}
                      placeholder="Department" />
                  </Form.Item>
                  <Form.Item label="College" labelCol={{ span: 6 }} wrapperCol={{ span: 16 }}>
                    <Input
                      className="workshop-input"
                      name="college"
                      prefix={<Icon type="book" style={{ color: '#222' }} />}
                      placeholder="College" />
                  </Form.Item>
                  <Form.Item label="Year Of Study" labelCol={{ span: 6 }} wrapperCol={{ span: 16 }}>
                    <Input
                      className="workshop-input"
                      name="year"
                      type="number"
                      min={1} max={4}
                      prefix={<Icon type="read" style={{ color: '#222' }} />}
                      placeholder="Year Of Study" />
                  </Form.Item>
                  <Form.Item label="Email" labelCol={{ span: 6 }} wrapperCol={{ span: 16 }}>
                    <Input
                      className="workshop-input"
                      name="email"
                      type="email"
                      disabled
                      value={userInfo.email}
                      prefix={<Icon type="mail" style={{ color: '#222' }} />}
                      placeholder="Email" />
                  </Form.Item>
                  <Form.Item label="Phone no." labelCol={{ span: 6 }} wrapperCol={{ span: 16 }}>
                    <Input
                      className="workshop-input"
                      name="phoneNumber"
                      type="number"
                      prefix={<Icon type="phone" style={{ color: '#222' }} />}
                      placeholder="Phone no." />
                  </Form.Item>
                  <Button htmlType="submit" className="workshop-submit-btn" style={{ color: '#222' }} disabled={checkoutDisabled}>
                    Submit&nbsp;&nbsp;{isLoading ? <Spin /> : null}
                  </Button>
                </Form>
              ) : <Spin />}
            </Modal> */}
            <Row>
              <Col lg={12}>
                <div className="workshop-img-container">
                  <img src={ethicalHackingImg} alt="ethical hacking workshop img" />
                </div>
              </Col>
              <Col lg={12} className="workshop-info">
                <h2 className="workshop-title">Hacker's Den</h2>
                <h5 className="workshop-subtitle">
                  <Icon type="calendar" /> Date: 22nd & 23rd February<br />
                  <Icon type="home" /> Venue: TEQIP<br />
                  <Icon type="phone" /> Soumyadip Maity: 9333324765
                </h5>
                <p>"No matter who you are, every day of your life, you are sitting in a database just ready to be looked at"
                        - Edward Snowden<br /><br/>

                  With trillion dollar corporations selling away the privacy of billions of people, cyber security is much more than a sub-division in the field of IT. It is the modern man's strongest weapon against corporate spies. To fight these crimes against a person's right to privacy, team SRIJAN'20 is proud to introduce JU's first ever 'Ethical Hacking and Cyber Security' community.
                  <br/>This will be three-month interaction and learning period with the first session on 22nd of February in the Teqip building, Jadavpur University. In the end, during your sem break, <strong>we will hire the top performers to work on live projects of various companies and intern with us. With industry-based tie-ups with companies (for security reasons we are not allowed to disclose the name of our clients which includes some of the top MNCs) as well as government partnerships, we'd provide a wide array of corporate as well as government projects for the interns to work upon.</strong> Registration open to all age groups, from all colleges.
                  <br /><br />If you value your privacy, then DO NOT MISS OUT! Let's work our way towards a safe and secure world.
                  <br />
                  Chief Mentor - <strong>Sohang Sengupta</strong> <br />Founder - Zero Dollar Security, Head of Information security - cemX, RSA security, DEL EMC, ITC Infotech, Top 30 KWHS young lead selected around the world by University of Pennsylvania, Wharton school of business, Red hat certified.
                  <br /><br />
                  Registration fees for the first 3 months - &#8377;700 (refundable) 
                </p>
                <br/>
                <div>
                  <span className="btn">
                    <p style={{ padding: 0, margin: 0 }}>Registrations have closed</p>
                  </span>
                  {/* {isRegistered ? (
                    <span className="btn">
                      <p style={{ padding: 0, margin: 0 }}>You've already registered for this workshop</p>
                    </span>
                  ) : (
                    <span className="btn" onClick={showModal}>
                      <p style={{ padding: 0, margin: 0 }}>Register</p>
                    </span>
                  )}
                  <a target="_about" href="https://firebasestorage.googleapis.com/v0/b/srijanju20.appspot.com/o/ethical_hacking_workshop.pdf?alt=media&token=ee46d3e3-08a5-49db-91ce-07bc24a3d73a" download>
                    <span className="btn">
                      <p style={{ padding: 0, margin: 0 }}>Learn More</p>
                    </span>
                  </a> */}
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </section>
  );
}

export default Workshops;