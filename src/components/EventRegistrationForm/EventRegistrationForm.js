import React, { useState } from 'react';
import { Form, Input, Alert, Spin, Icon, Button, Modal, notification } from 'antd';

const EventRegistrationForm = props => {
  const {
    handleEventRegister,
    modalVisible,
    hideModal,
    eventName,
    isLoading,
    setIsLoading,
    minMembers,
    maxMembers,
    leaderEmail,
    setIsRegistered
  } = props;
  const [formError, setFormError] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(false);

  const checkValid = e => {
    e.preventDefault();
    setFormError(false);
    setIsLoading(true);
    setSubmitDisabled(true);
    const { teamname, leader, leaderPhone, member2, member3, member4, member5 } = e.target.elements;
    handleEventRegister(teamname.value, leader.value, leaderPhone.value, member2.value, member3.value, member4.value, member5.value)
      .then(data => {
        notification['success']({
          message: `Successfully registered as team ${teamname.value}`,
          duration: 2
        })
        hideModal();
        setIsLoading(false);
        setSubmitDisabled(false);
        setIsRegistered(true);
      })
      .catch(err => {
        setFormError(err)
        setIsLoading(false);
        setSubmitDisabled(false);
      });
  }

  return (
  <Modal
    className="event-registration-modal"
    title={eventName + " registration"}
    visible={modalVisible}
    onOk={() => console.log('ok')}
    onCancel={hideModal}
    footer={[
      <Button key="back" type="primary" onClick={hideModal}>
        Go back
      </Button>
    ]}>
    <Form onSubmit={checkValid} layout="horizontal" name="modalForm" className="workshop-form">
      <p>A team for this event consists of a minimum of {minMembers} member(s) and a maximum of {maxMembers} members. Fill the remaining input fields with the emails of your team members (according to your team size) otherwise leave it blank.</p>
      {formError ? <Alert message={formError.message} type="error" /> : null}
      <hr />
      <Form.Item label="Team name" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
        <Input
          required
          className="event-reg-input"
          name="teamname"
          prefix={<Icon type="user" style={{ color: '#222' }} />}
          placeholder="Name" />
      </Form.Item>
      <Form.Item label="Team leader email" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
        <Input
          disabled
          value={leaderEmail}
          className="event-reg-input"
          name="leader"
          type="email"
          prefix={<Icon type="mail" style={{ color: '#222' }} />}
          placeholder="Team leader email" />
      </Form.Item>
      <Form.Item label="Leader phone no." labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
        <Input
          required
          className="event-reg-input"
          name="leaderPhone"
          type="number"
          prefix={<Icon type="phone" style={{ color: '#222' }} />}
          placeholder="Phone no." />
      </Form.Item>
      <Form.Item label="Team member 2 email" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
        <Input
          required={minMembers > 1}
          disabled={maxMembers < 2}
          className="event-reg-input"
          name="member2"
          type="email"
          prefix={<Icon type="mail" style={{ color: '#222' }} />}
          placeholder="Team member 2 email" />
      </Form.Item>
      <Form.Item label="Team member 3 email" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
        <Input
          required={minMembers > 2}
          disabled={maxMembers < 3}
          className="event-reg-input"
          name="member3"
          type="email"
          prefix={<Icon type="mail" style={{ color: '#222' }} />}
          placeholder="Team member 3 email" />
      </Form.Item>
      <Form.Item label="Team member 4 email" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
        <Input
          required={minMembers > 3}
          disabled={maxMembers < 4}
          className="event-reg-input"
          name="member4"
          type="email"
          prefix={<Icon type="mail" style={{ color: '#222' }} />}
          placeholder="Team member 4 email" />
      </Form.Item>
      <Form.Item label="Team member 5 email" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
        <Input
          required={minMembers > 4}
          disabled={maxMembers < 5}
          className="event-reg-input"
          name="member5"
          type="email"
          prefix={<Icon type="mail" style={{ color: '#222' }} />}
          placeholder="Team member 5 email" />
      </Form.Item>
      <Button htmlType="submit" className="workshop-submit-btn" style={{ color: '#222' }} disabled={submitDisabled}>
        Submit&nbsp;&nbsp;{isLoading ? <Spin /> : null}
      </Button>
    </Form>
  </Modal>
  );
}

export default EventRegistrationForm;