import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Typography, Input, Button, Row, Col, Form, Select, Radio,notification} from 'antd';
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

const validation= () => {
  return true;
}
const handlePaymentMode = (e) => {
  // if(e.target.value==="online"){
  //   setsubmitBtnText("Proceed to checkout")
  // }else if(e.target.value==="offline"){
    setsubmitBtnText("Register")
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
              setTimeout(()=>{window.location.href="/"}, 2000)
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
                    <Radio value="offline">Cash</Radio>
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
        <footer id="site-footer">



          <section class="horizontal-footer-section" id="footer-middle-section">
            <div id="footer-about" class="footer-columns footer-columns-large">
              <h1>Our Address</h1>
              <address>
                <p><img src="https://img.icons8.com/ios-filled/14/eeeeee/marker.png"/> B-73-80, Plot No.8, Salt Lake Bypass, LB Block, Sector III, Bidhannagar, Kolkata, West Bengal 700098</p>
                  <p><img src="https://img.icons8.com/ios-filled/14/eeeeee/phone.png"/>+91 89104 82988</p>
                    <p><img src="https://img.icons8.com/ios-filled/14/eeeeee/mail.png"/>architranjan9@gmail.com</p>
                      <p><img src="https://img.icons8.com/ios-filled/14/eeeeee/clock.png"/>8:00 AM – 8:00 PM</p>
            </address>
            
        </div>
                    <div class="footer-columns">
                    </div>
                    <div class="footer-columns">
                    </div>
                    <div class="footer-columns">
                      <h1>Information</h1>
                      <ul class="footer-column-menu" role="menu">
                        <li class="footer-column-menu-item" role="menuitem">
                          <a href="https://github.com/Ayush-projects/srijan22/blob/main/README.md" class="footer-column-menu-item-link">About Us</a>
                        </li>
                        <li class="footer-column-menu-item" role="menuitem">
                          <a href="https://raw.githubusercontent.com/Ayush-projects/srijan22/cfd7d3a2a0607b21ea45dd9ff71140e404164a0b/Srijan_Privacy_Policy.pdf" class="footer-column-menu-item-link">Privacy Policy</a>
                        </li>


                        <li class="footer-column-menu-item" role="menuitem">
                          <a href="https://raw.githubusercontent.com/Ayush-projects/srijan22/a8458946a871ead56f47b91b94e029204ece1383/Srijan_Terms_and_Conditions.pdf" class="footer-column-menu-item-link">Terms and Conditions</a>
                        </li>
                        <li class="footer-column-menu-item" role="menuitem">
                          <a href="https://raw.githubusercontent.com/Ayush-projects/srijan22/a8458946a871ead56f47b91b94e029204ece1383/Srijan_Refund_and_Cancellation.pdf" class="footer-column-menu-item-link">Refund Policy</a>
                        </li>
                      </ul>
                    </div>
    </section>

                  <section class="horizontal-footer-section" id="footer-bottom-section">
                    <div id="footer-copyright-info">
                      &copy; Copyright SrijanJU 2022
        </div>

                  </section>

</footer>


      </div>
    );
}

export default Merchandise22;
