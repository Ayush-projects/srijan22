import React, { useState, useCallback, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox, Alert, Spin } from 'antd';
import firebase from '../../firebase/config';
import { LastLocationContext } from '../../context/lastLocationContext';
import './Login.css';

const isValid = (email, passwd) => {
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  const validEmail = emailRegex.test(email);
  const validPasswd = passwd.length >= 6;
  return validEmail && validPasswd;
}

const Login = props => {
  const { history, setShowForm } = props;
  const { lastLocation } = useContext(LastLocationContext);
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  

  const handleSignIn = useCallback(async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
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
    const { email, password } = e.target.elements;
    if (isValid(email.value, password.value)) {
      handleSignIn(email.value, password.value);
      setFormError(false);
    } else {
      setFormError(true);
      setIsLoading(false);
    }
  }, [handleSignIn]);

  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <h1>Srijan 20 | Login</h1>
      {formError ? <Alert message="Invalid email or password!" type="error" /> : null}
      {error ? <Alert message={error.message} type="error" /> : null}
      <hr /><br />
      <Form.Item>
        <Input className="input" name="email" prefix={<Icon type="mail" style={{ color: 'rgba(255,255,255,.7)' }} />} placeholder="Email" />
      </Form.Item>
      <Form.Item>
        <Input name="password" type={showPassword ? "text" : "password"} prefix={<Icon type="lock" style={{ color: 'rgba(255,255,255,.7)' }} />} placeholder="Password" />
        <Checkbox onChange={e => setShowPassword(!showPassword)}>Show Password</Checkbox>
      </Form.Item>
      <Button htmlType="submit" style={{ background: 'transparent', color: '#fafafa' }}>
        Login
      </Button>&nbsp;&nbsp;&nbsp;
      {isLoading ? <Spin /> : null}
      <br /><br />
      <span className="mock-form-link" onClick={e => setShowForm('register')}>Create an account</span>&nbsp;&nbsp;|&nbsp;&nbsp;
      <span className="mock-form-link" onClick={e => setShowForm('forgot-password')}>Forgot/Reset Password?</span>
      <hr />
     
    </Form>
  );
} 

export default withRouter(Login);