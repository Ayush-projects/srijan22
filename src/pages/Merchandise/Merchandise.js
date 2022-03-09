// import React, { useState, useEffect, useContext } from 'react';
// import { AuthContext } from '../../context/authContext';
// import { Row, Col, Card, Icon, Form, Input, Button, Spin, Alert, Radio, Modal } from 'antd';
// import { getUserInfo } from '../../firebase/utility';
// import { firestore } from '../../firebase/config';

import React from 'react';
import { Row, Col, Card } from 'antd';
import srijanTshirtMockup from '../../assets/Images/srijan_tshirt_mockup.png';
import './Merchandise.css';

console.log("Test");

// const { confirm } = Modal;

// const isValid = (department, college, email, year, printName, phoneNo) => {
//   return (department !== "") && (college !== "") && (email !== "") && (year !== "") && (printName !== "") && (phoneNo !== "");
// }

const Merchandise = () => {
  // const [userInfo, setUserInfo] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const [formError, setFormError] = useState(false);
  // const [checkoutDisabled, setCheckoutDisabled] = useState(false);
  // const [size, setSize] = useState('M');
  // const { currentUser } = useContext(AuthContext);

  // useEffect(() => {
  //   getUserInfo(currentUser.uid)
  //     .then(data => setUserInfo(data))
  //     .catch(err => console.log(err))
  // }, [currentUser.uid]);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setIsLoading(true);
  //   const { username, department, college, year, email, printName, phoneNumber } = event.target.elements;
  //   if (isValid(department.value, college.value, email.value, year.value, printName.value, phoneNumber.value)) {
  //     confirm({
  //       title: 'Submit order request with given data?',
  //       onOk() {
  //         setCheckoutDisabled(true);
  //         const date = new Date();
  //         const data = {
  //           date: date.toDateString() + " " + date.toTimeString(),
  //           name: username.value,
  //           department: department.value,
  //           college: college.value,
  //           year: year.value,
  //           email: email.value,
  //           printName: printName.value,
  //           phoneNo: phoneNumber.value,
  //           paymentStatus: "manual-payment",
  //           size: size,
  //           userId: currentUser.uid,
  //           amount: 300
  //         }
  //         firestore.collection('orders').add(data)
  //           .then(docRef => {
  //             setCheckoutDisabled(false);
  //             window.location.href = `https://us-central1-srijan20-temp.cloudfunctions.net/app/merch/txn?orderId=${docRef.id}&amount=300`;
  //           })
  //           .catch(err => console.log(err));
  //       },
  //       onCancel() {
  //         setCheckoutDisabled(false);
  //         setIsLoading(false);
  //       },
  //     });
  //   } else {
  //     setCheckoutDisabled(false);
  //     setFormError(true);
  //     setIsLoading(false);
  //   }
  // }

  return (
  <section className="merchandise">
    <Row>
      <Col md={24} className="flex-container" style={{ padding: '.5rem', textAlign: 'center' }}>
        <Card headStyle={{backgroundColor: 'rgba(22, 104, 159, 0.3)', borderBottom: '2px solid #00ebff', color: '#00ebff' }}
              bodyStyle={{backgroundColor: 'rgba(22, 104, 159, 0.2)', border: 'none' }}
              style={{ width: '100%',backgroundColor: 'rgba(0,0,0,0)', border: 'none' }}
              title="Buy the official Srijan 20 merchandise">
          <Row>
            <Col lg={10}>
              <div className="merchandise-img-container">
                <img src={srijanTshirtMockup} alt="merchandise-img" />
              </div>
              <h3 className="merchandise-amount">Get your name printed T-shirt for &#8377;300/-</h3>
              <p className="merchandise-amount-sub">For multiple orders, contact 9333324765 (Soumyadip)</p>
            </Col>
            <Col lg={14} className="merchandise-info">
              <strong style={{ color: '#00ebff' }}>The portal for ordering tshirts has closed</strong>
              {/* {userInfo ? (
                <Form onSubmit={handleSubmit} layout="horizontal" className="merchandise-form">
                  {formError ? <Alert message="Form fields can't be blank!" type="error" /> : null}
                  <br />
                  <Form.Item label="Name" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                    <Input
                      className="merchandise-input"
                      name="username"
                      disabled
                      value={userInfo.name}
                      prefix={<Icon type="user" style={{ color: '#00ebff' }} />}
                      placeholder="Name" />
                  </Form.Item>
                  <Form.Item label="Department" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                    <Input
                      className="merchandise-input"
                      name="department"
                      prefix={<Icon type="solution" style={{ color: '#00ebff' }} />}
                      placeholder="Department" />
                  </Form.Item>
                  <Form.Item label="College" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                    <Input
                      className="merchandise-input"
                      name="college"
                      prefix={<Icon type="book" style={{ color: '#00ebff' }} />}
                      placeholder="College" />
                  </Form.Item>
                  <Form.Item label="Year Of Study" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                    <Input
                      className="merchandise-input"
                      name="year"
                      type="number"
                      min={1} max={4}
                      prefix={<Icon type="read" style={{ color: '#00ebff' }} />}
                      placeholder="Year Of Study" />
                  </Form.Item>
                  <Form.Item label="Email" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                    <Input
                      className="merchandise-input"
                      name="email"
                      type="email"
                      prefix={<Icon type="mail" style={{ color: '#00ebff' }} />}
                      placeholder="Email" />
                  </Form.Item>
                  <Form.Item label="Phone no." labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                    <Input
                      className="merchandise-input"
                      name="phoneNumber"
                      type="number"
                      prefix={<Icon type="phone" style={{ color: '#00ebff' }} />}
                      placeholder="Phone no." />
                  </Form.Item>
                  <Form.Item label="Print name" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                    <Input
                      className="merchandise-input"
                      name="printName"
                      prefix={<Icon type="user" style={{ color: '#00ebff' }} />}
                      placeholder="Name to be printed on T-shirt" />
                  </Form.Item>
                  <Form.Item label="Size" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                    <Radio.Group onChange={e => setSize(e.target.value)} value={size}>
                      <Radio value="S">S</Radio>
                      <Radio value="M">M</Radio>
                      <Radio value="L">L</Radio>
                      <Radio value="XL">XL</Radio>
                      <Radio value="2XL">2XL</Radio>
                    </Radio.Group>
                  </Form.Item>
                  <Button htmlType="submit" className="merchandise-submit-btn" style={{ color: '#00ebff' }} disabled={checkoutDisabled}>
                    Submit&nbsp;&nbsp;{isLoading ? <Spin /> : null}
                  </Button>
                </Form>
              ) : <Spin />} */}
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  </section>
  );
}

export default Merchandise;