"use client"

import React, {useState} from 'react'
import imageOne from 'app/getFriend.jpg'
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

  console.log("here", imageOne)

  const settings = {
    dots: false,
    infinite: true,
    speed: 15,
    slidesToShow: 1,
    slidesToScroll: 1,
    marginBottom:16,
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
        <Slider style={{height:'150px', marginLeft:'10px', marginRight:'10px'}}{...settings}>
          <div>
            <img src="/_next/static/media/NrOnebestFriend.9a787a6e.jpg" alt="Image 1" style={{ width: 'auto', height: '100%' }} />
          </div>
          <div>
            <img src={'/_next/static/media/returnFriend.38bb16f2.jpg'} alt="Image 2" style={{ width: '100%', height: '100%' }} />
          </div>
          <div>
            <img src={'/_next/static/media/chewsFriend.3ee5bbfe.jpg'} alt="Image 3" style={{ width: '100%', height: '100%' }} />
          </div>
          <div>
            <img src={'/_next/static/media/repFriend.fb8b7542.jpg'} alt="Image 4" style={{ width: '100%', height: '100%' }} />
          </div>
          <div>
            <img src={'/_next/static/media/getFriend.43d2431b.jpg'} alt="Image 5" style={{ width: '100%', height: '100%' }} />
          </div>
          {/* Add more divs with images */}
        </Slider>
        <Form style={{ marginTop: 35 }} initialValues={{ name, email }} onFinish={handleLogin} name="form">
        {visible && (
        <Alert message="Please enter a valid email" type="error" closable afterClose={handleClose}/>
      )}
          <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please enter your email' }]}>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please enter your password' }]}>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
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
