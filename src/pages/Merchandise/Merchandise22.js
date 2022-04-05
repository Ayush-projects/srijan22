import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Typography, Input, Button, Row, Col, Form, Select, Radio,notification, Modal} from 'antd';
import srijanLogo from '../../assets/Images/srijan_logo_white.png';
import JULogo from '../../assets/Images/Jadavpur_University_Logo.svg';
import blackTShirt from '../../assets/Images/black-web.jpg'
import whiteTShirt from '../../assets/Images/white-web.jpg'
import Particles from 'react-particles-js';
import './Merchandise22.css'
const { Option } = Select;
const {Title} = Typography;

const Merchandise22 = props => {
  function isDate(val) {
    // Cross realm comptatible
    return Object.prototype.toString.call(val) === '[object Date]'
  }
  const openNotificationWithIcon = (type, message, desc )=> {
    notification[type]({
      message: message,
      description:desc
    });
  };
  function isObj(val) {
    return typeof val === 'object'
  }
  
   function stringifyValue(val) {
    if (isObj(val) && !isDate(val)) {
      return JSON.stringify(val)
    } else {
      return val
    }
  }
  
  function buildForm({ action, params }) {
    const form = document.createElement('form')
    form.setAttribute('method', 'post')
    form.setAttribute('action', action)
  
    Object.keys(params).forEach(key => {
      const input = document.createElement('input')
      input.setAttribute('type', 'hidden')
      input.setAttribute('name', key)
      input.setAttribute('value', stringifyValue(params[key]))
      form.appendChild(input)
    })
  
    return form
  }
  
   function post(details) {
    const form = buildForm(details)
    document.body.appendChild(form)
    form.submit()
    form.remove()
  }
const [formData, setformData] = useState({
    name: '',
    email: '',
    phone: null,
    department: '',
    college: '',
    name_on_tshirt: '',
    tshirt_color: 'black',
    tshirt_size: 'm',
    payment_mode: 'offline'
})
const [submitBtnText, setsubmitBtnText] = useState("Register here")
const handleFormChange=(e)=>{
    const fieldName=e.target.name;
    const fieldVal=e.target.value;
    setformData((prev)=>({...prev,[fieldName]:fieldVal}))
}
const [isModalVisible, setIsModalVisible] = useState(false);

const showModal = () => {
  setIsModalVisible(true);
};


const handleCancel = () => {
  setIsModalVisible(false);
  setTimeout(()=>{window.location.href="/"}, 2000)
};
const validation= () => {
  return true;
}
const handlePaymentMode = (e) => {
  // if(e.target.value==="online"){
  //   setsubmitBtnText("Proceed to checkout")
  // }else if(e.target.value==="offline"){
    setsubmitBtnText("Register here")
  // }
  setformData((prev) => ({ ...prev, payment_mode: e.target.value }))
}
const handleFormSubmit=(e)=>{
    e.preventDefault();
    if(validation){
      if(formData.payment_mode==="online"){
        const url = process.env.REACT_APP_SRIJAN22_tshirtBackendUrl+"/api/payment";
        const options = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
          },
          body: JSON.stringify({
            ...formData, amount: 399
        }),
        };
        fetch(url, options)
          .then((response) => response.json())
          .then((data) => {
            if(data.code===409){
              openNotificationWithIcon('error','User Already Exists','Only one tshirt can be booked by one user.')
            }else if(data.code===500){
              openNotificationWithIcon('error','Unknown Error','Some unknown error occured. Try again.')
            }
            else if(data.code===200){
              try{
                var information={
                  action:`https://securegw.paytm.in/theia/api/v1/showPaymentPage?mid=${data.mid}&orderId=${data.orderId}`,
                  params:{
                    orderId: data.orderId,
                    txnToken: data.initiate_tran_resp.body.txnToken,
                    mid:data.mid
                  }
              }
               post(information)
              }
              catch(err){
                console.log(err)
              }
            }
            
          });
      }else if(formData.payment_mode==="offline"){
        const url = process.env.REACT_APP_SRIJAN22_tshirtBackendUrl+"/api/add_reg_data";
        const options = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
          },
          body: JSON.stringify(formData),
        };
        fetch(url, options)
          .then((response) => response.json())
          .then((data) => {
            if(data.code===409){
              openNotificationWithIcon('error','User Already Exists','Only one tshirt can be booked by one user.')
            }else if(data.code===500){
              openNotificationWithIcon('error','Unknown Error','Some unknown error occured. Try again.')
            }  else if(data.code===200){
              openNotificationWithIcon('success','Success','You are registered successfully.')
              setTimeout(()=>{showModal()}, 2000)
            }
            }
          );
      }
    
    }
    else{
      alert("Form filled incorrectly")
    }
}

    return (
      <div>
        <section style={{margin:"1%"}}>
          <img
            src={srijanLogo}
            style={{
              animation: "fadeIn 4s ease-in",
              position: "absolute",
              top: "0",
              left: "0",
              zIndex: "200",
            }}
            alt="srijan-logo"
            width="200px"
          />
          <div className="container">
            <Row justify="space-around" align="middle">
              <Col xs={24} md={16} xl={12}>
                <div style={{ paddingTop: "50px" }}>
                  <img
                    src={blackTShirt}
                    style={{ maxWidth: "100%", height: "auto", margin: "2%" }}
                    alt="black-tshirt-srijan-22"
                  />
                  <img
                    src={whiteTShirt}
                    style={{ maxWidth: "100%", height: "auto", margin: "2%" }}
                    alt="white-tshirt-srijan-22"
                  />
                </div>
              </Col>
              <Col xs={24} md={16} xl={10}>
                <Form
                  layout="vertical"
                  style={{ animation: "fadeIn 4s ease-in", margin: "5%" }}
                  onSubmit={e => handleFormSubmit(e)}
                >
                  <Form.Item label="Full Name">
                    <Input
                      required={true}
                      type="text"
                      placeholder="Enter your full name"
                      name="name"
                      onChange={(e) => handleFormChange(e)}
                    />
                  </Form.Item>
                  <Form.Item label="Email ID">
                    <Input
                      required={true}
                      type="email"
                      placeholder="Enter your email id"
                      name="email"
                      onChange={(e) => handleFormChange(e)}
                    />
                  </Form.Item>
                  <Form.Item label="Phone Number">
                    <Input
                      required={true}
                      type="phone"
                      placeholder="Enter your phone number"
                      name="phone"
                      onChange={(e) => handleFormChange(e)}
                    />
                  </Form.Item>
                  <Form.Item label="Department">
                    <Input
                      required={true}
                      type="text"
                      placeholder="Enter your Department"
                      name="department"
                      onChange={(e) => handleFormChange(e)}
                    />
                  </Form.Item>
                  <Form.Item label="College">
                    <Input
                      required={true}
                      type="text"
                      placeholder="Enter your college name"
                      name="college"
                      onChange={(e) => handleFormChange(e)}
                    />
                  </Form.Item>
                  <Form.Item label="Name on TShirt">
                    <Input
                      required={true}
                      type="text"
                      placeholder="Enter the name to be printed at the back (eg: Archit, GameGuru, etc)"
                      name="name_on_tshirt"
                      onChange={(e) => handleFormChange(e)}
                    />
                  </Form.Item>
                  <Form.Item label="Tshirt color">
                    <Select
                      defaultValue="black"
                      optionFilterProp="children"
                      required={true}
                      name="tshirt_color"
                      onChange={(e) =>
                        setformData((prev) => ({ ...prev, tshirt_color: e }))
                      }>
                      <Option value="black">Black</Option>
                      <Option value="white">White</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="TShirt Size">
                    <Select
                      defaultValue="m"
                      optionFilterProp="children"
                      required={true}
                      name="tshirt_size"
                      onChange={(e) =>
                        setformData((prev) => ({ ...prev, tshirt_size: e }))
                      }>
                      <Option value="s">S(38)</Option>
                      <Option value="m">M(40)</Option>
                      <Option value="l">L(42)</Option>
                      <Option value="xl">XL(44)</Option>
                      <Option value="xxl">XXL(46)</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="Payment Mode">
                  <Radio.Group onChange={(e)=>handlePaymentMode(e)} value={formData.payment_mode}>
                    {/* <Radio value="online">Online</Radio> */}
                    <Radio value="offline">Cash/UPI</Radio>
                  </Radio.Group>
                  </Form.Item>
                  <Form.Item>
                    <h4 style={{color: "white"}}>For offline payment, please contact:</h4>
                    <h4 style={{color: "white"}}>Trishit Pal: 9831660378</h4>
                    <h4 style={{color: "white"}}>Suvankar: 7001082597</h4>
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      {submitBtnText}
                    </Button>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </div>
        </section>
          <Modal title="Steps After Registration" visible={isModalVisible} footer={null} onCancel={handleCancel}>
          <p>Hi, thanks for registering for the Srijan'22 official merchandise.<br></br>

          To confirm your order please make a payment of ₹ 399/- via cash or UPI by 5th April, 2022 to : <br></br>
          Avirup(9330143110) -For Jadavpur Campus<br></br>

          Trishit(9831660378) -For Salt Lake Campus<br></br>

          Send a screenshot of payment to them over Whatsapp positively(if paid via UPI) <br></br>

          For cash payment - a message from their end will be given "Cash_Payment confirmed" over WhatsApp at the end of the day.<br></br>

          Note : Please collect your t-shirts within 15th -17th April from the t-shirt stall in Jadavpur University Salt Lake Campus, during Srijan. <br></br>

          For any other queries please WhatsApp the aforementioned or send an email to srijanju.contact@gmail.com<br></br>

          Please check out our events at-<a href='https://srijanju.in/video.html'> https://srijanju.in/video.html</a><br></br>

          Released events at-<a href='https://instagram.com/srijan_ju?utm_medium=copy_link'>https://instagram.com/srijan_ju?utm_medium=copy_link</a><br></br>

          Regards<br></br>
          Team Srijan'22
          </p>
        </Modal>
      </div>
    );
}

export default Merchandise22;
