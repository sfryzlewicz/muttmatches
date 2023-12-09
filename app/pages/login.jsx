"use client"

import React, {useState} from 'react'
import imageOne from '/app/bestFriend.jpg'
import { login } from '../services/authService';
import { Alert, Card, Form, Input, Button, Carousel } from 'antd';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export const UserContext = React.createContext();


const Login = () => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const isEmailValid = email.includes('@');
  const isLoginDisabled = !name || !email || !isEmailValid;
  const [loading, setLoading] = useState(false);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleClose = () => {
    setVisible(false);
  };

  const handleLogin = async (e) => {
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        await login(name, email);
        // Handle successful login, maybe redirect to the search page
        //history.push('/dogs/search');
      } catch (error) {
        console.error('Login Error', error);
      } finally {
        setLoading(false);
      }
  };



  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card style={{ width: 400, textAlign: 'center' }}>
        <Slider {...settings}>
          <div>
            <img src={imageOne} alt="Image 1" style={{ width: '100%', height: 'auto' }} />
          </div>
          <div>
            <img src={imageOne} alt="Image 2" style={{ width: '100%', height: 'auto' }} />
          </div>
          {/* Add more divs with images */}
        </Slider>
        <Form style={{ marginTop: 16 }} initialValues={{ name, email }} onFinish={handleLogin} name="form">
        {visible && (
        <Alert message="Please enter a valid email" type="error" closable afterClose={handleClose}/>
      )}
          <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter your name' }]}>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Item>
          <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please enter your email' }]}>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" disabled={isLoginDisabled}>
              Login
            </Button>
          </Form.Item>
        </Form>
        
      </Card>
    </div>
  );
};

export default Login;
