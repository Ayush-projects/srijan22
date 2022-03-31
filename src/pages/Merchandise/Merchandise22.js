import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Typography, Input, Button, Row, Col, Form, Select, Container} from 'antd';
import srijanLogo from '../../assets/Images/srijan_logo_white.png';
import JULogo from '../../assets/Images/Jadavpur_University_Logo.svg';
import blackTShirt from '../../assets/Images/black-web.jpg'
import whiteTShirt from '../../assets/Images/white-web.jpg'
import Particles from 'react-particles-js';
import './Merchandise22.css'
const { Option } = Select;
const {Title} = Typography;

const Merchandise22 = props => {
const [formData, setformData] = useState({
    name: '',
    email: '',
    phone: null,
    name_on_tshirt: '',
    tshirt_color: '',
    tshirt_size: ''
})
const handleFormChange=(e)=>{
    const fieldName=e.target.name;
    const fieldVal=e.target.value;
    setformData((prev)=>({...prev,[fieldName]:fieldVal}))
}

    return (
      <div>
        <section>
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
                <div style={{ paddingTop: "20%" }}>
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
              <Col xs={24} md={16} xl={8}>
                <Form
                  layout="vertical"
                  style={{ animation: "fadeIn 4s ease-in", margin: "5%" }}>
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
                  <Form.Item label="Name on TShirt">
                    <Input
                      required={true}
                      type="text"
                      placeholder="Enter the name to be printed at the back"
                      name="name_on_tshirt"
                      onChange={(e) => handleFormChange(e)}
                    />
                  </Form.Item>
                  <Form.Item label="Tshirt color">
                    <Select
                      placeholder="Choose Tshirt color"
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
                      placeholder="Choose Tshirt size"
                      optionFilterProp="children"
                      required={true}
                      name="tshirt_size"
                      onChange={(e) =>
                        setformData((prev) => ({ ...prev, tshirt_size: e }))
                      }>
                      <Option value="s">S(38)</Option>
                      <Option value="m">M(40)</Option>
                      <Option value="l">L(40)</Option>
                      <Option value="xl">XL(44)</Option>
                      <Option value="xxl">XXL(46)</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Proceed to checkout
                    </Button>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </div>
        </section>
      </div>
    );
}

export default Merchandise22;