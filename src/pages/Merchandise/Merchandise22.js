import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Typography, Input, Button, Row, Col, Form, Select} from 'antd';
import fgimg from '../../assets/Images/fg-landing.png';
import srijanLogo from '../../assets/Images/srijan_logo_white.png';
import JULogo from '../../assets/Images/Jadavpur_University_Logo.svg';
import blackTShirt from '../../assets/Images/polo_mockup_black.png'
import whiteTShirt from '../../assets/Images/polo_mockup_white.png'
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
        <div style={{width: "100vw"}}>
            <section className="landing">
                <Particles className="particles"
                        params={{
                            "particles": {
                                "number": {
                                    "value": 250,
                                    "density": {
                                        "enable": false
                                    }
                                },
                                "size": {
                                    "value": 3,
                                    "random": true
                                },
                                "move": {
                                    "direction": "bottom",
                                    "out_mode": "out"
                                },
                                "line_linked": {
                                    "enable": false
                                }
                            },
                            "interactivity": {
                                "events": {
                                    "onhover": {
                                        "enable": true,
                                        "mode": "repulse"
                                    }
                                },
                                "modes": {
                                    "repulse": {
                                        "particles_nb": 10
                                    }
                                }
                            }
                        }}
                        style={{height: '100vh', width: '100%'}}/>
                <img id="fg-img" className="fgimg" src={fgimg} alt="landing-fg"/>
                <img src={srijanLogo} style={{animation: 'fadeIn 4s ease-in', position: 'absolute',top: '0',left: '0',zIndex: '200'}} alt="srijan-logo" width="200px"/>
                <Row gutter={16} style={{zIndex: '200'}}>
                    <Col span={12}>
                        <img src={blackTShirt} alt="black-tshirt-srijan-22" width={600}  style={{animation: 'fadeIn 4s ease-in',padding: '10px'}}/>
                        <img src={whiteTShirt} alt="white-tshirt-srijan-22" width={600} style={{animation: 'fadeIn 4s ease-in',padding: '10px'}}/>
                    </Col>
                    <Col span={12}>
                        <Form
                        layout='vertical'
                        style={{animation: 'fadeIn 4s ease-in'}}
                        >
                        <Form.Item label="Full Name">
                            <Input required={true} type="text" placeholder="Enter your full name" name="name" onChange={(e)=>handleFormChange(e)} />
                        </Form.Item>
                        <Form.Item label="Email ID">
                            <Input required={true} type="email"  placeholder="Enter your email id" name="email" onChange={(e)=>handleFormChange(e)} />
                        </Form.Item>
                        <Form.Item label="Phone Number">
                            <Input required={true} type="phone"  placeholder="Enter your phone number" name="phone" onChange={(e)=>handleFormChange(e)} />
                        </Form.Item>
                        <Form.Item label="Name on TShirt">
                            <Input required={true} type="text" placeholder="Enter the name to be printed at the back" name="name_on_tshirt" onChange={(e)=>handleFormChange(e)} />
                        </Form.Item>
                        <Form.Item label="Tshirt color">
                            <Select
                            placeholder="Choose Tshirt color"
                            optionFilterProp="children"
                            required={true}
                            name="tshirt_color"
                            onChange={(e)=>setformData((prev)=>({...prev,tshirt_color:e}))} 
                        >
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
                            onChange={(e)=>setformData((prev)=>({...prev,tshirt_size:e}))} 
                        >
                            <Option value="s">S(38)</Option>
                            <Option value="m">M(40)</Option>
                            <Option value="l">L(40)</Option>
                            <Option value="xl">XL(44)</Option>
                            <Option value="xxl">XXL(46)</Option>
                        </Select>
                        </Form.Item>
                        <Form.Item >
                            <Button type="primary" htmlType="submit">Proceed to checkout</Button>
                        </Form.Item>
                        </Form>
                    </Col>
                </Row>
                
            </section>
        </div>
    )
}

export default Merchandise22;