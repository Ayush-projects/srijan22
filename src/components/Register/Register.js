import React, { useState, useCallback, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox, Alert, Spin } from 'antd';
import firebase from '../../firebase/config';
import { writeUserData } from '../../firebase/utility';
import { LastLocationContext } from '../../context/lastLocationContext';
import './Register.css';

const isValid = (email, passwd) => {
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  const validEmail = emailRegex.test(email);
  const validPasswd = passwd.length >= 6;
  return validEmail && validPasswd;
}

const Register = props => {
  const { setShowForm, history } = props;
  const { lastLocation } = useContext(LastLocationContext);
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);



  const handleRegister = useCallback(async (userName, email, password, year, department, college) => {
    try {
      const userCredentials = await firebase.auth().createUserWithEmailAndPassword(email, password);
      writeUserData(userCredentials.user.uid, userName, email, year, department, college);
      setIsLoading(false);
      if (!lastLocation) {
        history.push('/app/dashboard');
      }
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  }, [lastLocation, history]);

  const handleSubmit = useCallback(e => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    const yearSuffix = ["st", "nd", "rd", "th", "th"];
    const { username, email, password, year, department, college } = e.target.elements;
    if (isValid(email.value, password.value)) {
      handleRegister(username.value, email.value, password.value, year.value + yearSuffix[year.value-1], department.value, college.value);
      setFormError(false);
    } else {
      setFormError(true);
      setIsLoading(false);
    }
  }, [handleRegister]);

  return (
    <Form onSubmit={handleSubmit} className="register-form">
      <h1>Srijan 22 | Register</h1>
      {formError ? <Alert message="Invalid form submission. Email should be lowercase and password should be atleast 6 characters. Check the form content and retry!" type="error" /> : null}
      {error ? <Alert message={error.message} type="error" /> : null}
      <hr /><br />
      <Form.Item>
        <Input
          name="username"
          prefix={<Icon type="user" style={{ color: 'rgba(255,255,255,.7)' }} />}
          placeholder="Name" />
      </Form.Item>
      <Form.Item>
        <Input
          name="college"
          prefix={<Icon type="book" style={{ color: 'rgba(255,255,255,.7)' }} />}
          placeholder="College" />
      </Form.Item>
      <Form.Item>
        <Input
          name="department"
          prefix={<Icon type="solution" style={{ color: 'rgba(255,255,255,.7)' }} />}
          placeholder="Department" />
      </Form.Item>
      <Form.Item>
        <Input
          name="year"
          type="number"
          min={1} max={5}
          prefix={<Icon type="read" style={{ color: 'rgba(255,255,255,.7)' }} />}
          placeholder="Year" />
      </Form.Item>
      <Form.Item>
        <Input name="email" type="email" prefix={<Icon type="mail" style={{ color: 'rgba(255,255,255,.7)' }} />} placeholder="Email" />
      </Form.Item>
      <Form.Item>
        <Input name="password" type={showPassword ? "text" : "password"} prefix={<Icon type="lock" style={{ color: 'rgba(255,255,255,.7)' }} />} placeholder="Password" />
        <Checkbox onChange={e => setShowPassword(!showPassword)}>Show Password</Checkbox>
      </Form.Item>
      <Button htmlType="submit" style={{ background: 'transparent', color: '#fafafa' }}>
        Register
      </Button>&nbsp;&nbsp;&nbsp;
      {isLoading ? <Spin /> : null}
      <br /><br />
      Already have an account?&nbsp;<span className="mock-form-link" onClick={e => setShowForm('login')}>Login</span>
      <hr />
     
    </Form>
  );
}

export default withRouter(Register);