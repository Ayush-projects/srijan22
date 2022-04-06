import React, { useState, useContext, useEffect } from 'react';
import { Row, Col, Card, Form, Input, Icon, Skeleton, Button, notification, Avatar } from 'antd';
import './Profile.css';
import { AuthContext } from '../../context/authContext';
import { getUserInfo, updateUserData } from '../../firebase/utility';

const Profile = props => {
  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState({});
  const [inputYear, setInputYear] = useState(-1);
  const [inputDepartment, setInputDepartment] = useState('');
  const [inputCollege, setInputCollege] = useState('');
  const { currentUser } = useContext(AuthContext);
  let yearDisplay = null;

  const yearSuffix = ["st", "nd", "rd", "th", "th"];

  const handleSubmit = e => {
    e.preventDefault();
    const { year, college, department } = e.target.elements;
    updateUserData(currentUser.uid, year.value + yearSuffix[year.value-1], department.value, college.value);
    notification['success']({
      message: 'Success!',
      description: 'Your profile has been updated!',
      duration: 2
    })
  }

  useEffect(() => {
    getUserInfo(currentUser.uid)
      .then(user => {
        setUserInfo(user);
        setInputYear(user.year);
        setInputDepartment(user.course);
        setInputCollege(user.college);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [currentUser]);

  switch(inputYear) {
    case '1': yearDisplay = <h5 style={{ color: '#00ebff' }}>1st Year</h5>; break;
    case '2': yearDisplay = <h5 style={{ color: '#00ebff' }}>2nd Year</h5>; break;
    case '3': yearDisplay = <h5 style={{ color: '#00ebff' }}>3rd Year</h5>; break;
    case '4': yearDisplay = <h5 style={{ color: '#00ebff' }}>4th Year</h5>; break;
    default: yearDisplay = <h5 style={{ color: '#00ebff' }}>Year: {inputYear}</h5>;
  }

  return (
    <section className="profile">
      <Row>
        <Col lg={15} style={{ padding: '.5rem' }}>
          <Card title="Update your info" className="profile-card" style={{ width: '100%' }}>
            {isLoading ? <Skeleton active /> : (
              <Form className="profile-form" layout="horizontal" onSubmit={handleSubmit}>
                <Form.Item label="Name" labelCol={{ span: 4 }} wrapperCol={{ span: 16 }}>
                  <Input
                    className="profile-input"
                    name="username"
                    disabled
                    value={userInfo.name}
                    prefix={<Icon type="user" style={{ color: '#00ebff' }} />}
                    placeholder="Name" />
                </Form.Item>
                <Form.Item label="Year" labelCol={{ span: 4 }} wrapperCol={{ span: 16 }}>
                  <Input
                    className="profile-input"
                    name="year"
                    type="number"
                    min={1} max={5}
                    value={inputYear}
                    onChange={e => setInputYear(e.target.value)}
                    prefix={<Icon type="read" style={{ color: '#00ebff' }} />}
                    placeholder="Year" />
                </Form.Item>
                <Form.Item label="College" labelCol={{ span: 4 }} wrapperCol={{ span: 16 }}>
                  <Input
                    className="profile-input"
                    name="college"
                    value={inputCollege}
                    onChange={e => setInputCollege(e.target.value)}
                    prefix={<Icon type="book" style={{ color: '#00ebff' }} />}
                    placeholder="College" />
                </Form.Item>
                <Form.Item label="Department" labelCol={{ span: 4 }} wrapperCol={{ span: 16 }}>
                  <Input
                    className="profile-input"
                    name="department"
                    value={inputDepartment}
                    onChange={e => setInputDepartment(e.target.value)}
                    prefix={<Icon type="solution" style={{ color: '#00ebff' }} />}
                    placeholder="Department" />
                </Form.Item>
                <Form.Item label="Email" labelCol={{ span: 4 }} wrapperCol={{ span: 16 }}>
                  <Input
                    className="profile-input"
                    name="email"
                    type="email"
                    disabled
                    value={userInfo.email}
                    prefix={<Icon type="mail" style={{ color: '#00ebff' }} />}
                    placeholder="Email" />
                </Form.Item>
                <Button className="profile-update-btn" htmlType="submit" block>
                  Update your info
                </Button>
              </Form>
            )}
          </Card>
        </Col>
        <Col lg={9} style={{ padding: '.5rem' }}>
          <Card title="Your Info" className="user-card">
            <div className="user-card-content">
              <Avatar size={90} icon="user" className="user-avatar" />
              <h2 style={{ color: '#00ebff' }}>{userInfo.name}</h2>
              <h3 style={{ color: '#00ebff' }}>{inputCollege}</h3>
              <h4 style={{ color: '#00ebff' }}>Department of {inputDepartment}</h4>
              {yearDisplay}
            </div>
          </Card>
        </Col>
      </Row>
    </section>
  );
}

export default Profile;