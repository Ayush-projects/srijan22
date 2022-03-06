import React, { useState, useCallback } from 'react';
import { Form, Icon, Input, Button, Alert, Spin } from 'antd';
import firebase from '../../firebase/config';
import './PasswordResetForm.css';

const isValid = (email) => {
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  return emailRegex.test(email);
}

const PasswordReset = props => {
  const [formError, setFormError] = useState(false);
  const [error, setError] = useState(null);
  const [mailSent, setMailSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = useCallback(async event => {
    event.preventDefault();
    const { email } = event.target.elements;
    setError(false);
    setFormError(false);
    if (isValid(email.value)) {
      try {
        const userSignInMethods = await firebase.auth().fetchSignInMethodsForEmail(email.value);
        if (userSignInMethods.includes('password')) {
          await firebase.auth().sendPasswordResetEmail(email.value);
          setIsLoading(false);
          setFormError(false);
          setMailSent(true);
        } else {
          setIsLoading(false);
          setError({ message: "User doesn't exist for the given email or you may have used an alternate signin option" });
        }
      } catch (err) {
        setError(true);
        setIsLoading(false);
      }
    } else {
      setFormError(true);
      setIsLoading(false);
    }
  }, []);

  return (
    <Form onSubmit={handleSubmit} className="password-reset-form">
      <h1>Srijan 20 | Reset Password</h1>
      {formError ? <Alert message="Invalid email input. Email should be lowercase." type="error" /> : null}
      {error ? <Alert message={error.message} type="error" /> : null}
      {mailSent ? <Alert message="A password reset link has been sent to the given email address." type="success" /> : (
        <>
          <hr /><br />
          <Form.Item>
            <Input className="input" name="email" prefix={<Icon type="mail" style={{ color: 'rgba(255,255,255,.7)' }} />} placeholder="Email" />
          </Form.Item>
          <Button htmlType="submit" style={{ background: 'transparent', color: '#fafafa' }}>
            Send password reset link&nbsp;&nbsp;{isLoading ? <Spin /> : null}
          </Button>
        </>
      )}
    </Form>
  );
} 

export default PasswordReset;