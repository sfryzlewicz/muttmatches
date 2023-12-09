"use client"

import { useNavigate } from "react-router-dom";
import React, {useState} from 'react'
import imageOne from 'app/getFriend.jpg'
import { login } from '../services/authService';
import { Alert, Card, Form, Input, Button, Typography, Divider } from 'antd';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export const UserContext = React.createContext();


const Login = () => {
  const navigate = useNavigate();
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
    speed: 3,
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
        setLoading(false);
        navigate("/loading");
      } catch (error) {
        console.error('Login Error', error);
        setLoading(false);
        navigate("/loading");
      }
  };

  return (
    <div style={{}} >
      {loading && (
        <div style={{ height: '100vh', background: '#eb6e39', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div>
          <img style={{height:'90%'}}
            src="https://cdn.dribbble.com/users/130603/screenshots/3189447/media/155e73d335994a9d5955a42055d564f4.gif"
            alt="loading"
          />
        </div>
        <Typography.Title level={3} style={{ color: 'white', marginTop: '20px' }}>
          Collecting Friends...
        </Typography.Title>
      </div>
      )}
      {!loading && (
      <div style={{ height:'100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(to bottom, #df8f3e, #ffffff)' }}>
        <Card style={{height:'auto', width: 500, textAlign: 'center', borderRadius: '3%', justifyContent: 'center', }}>
          <Slider style={{height:'40%', marginLeft:'20px', marginRight:'20px'}}{...settings}>
            <div>
              <img src="/_next/static/media/NrOnebestFriend.9a787a6e.jpg" alt="Image 1" style={{ borderRadius: '5%' }} />
            </div>
            <div>
              <img src={'/_next/static/media/returnFriend.38bb16f2.jpg'} alt="Image 2" style={{  borderRadius: '5%' }} />
            </div>
            <div>
              <img src={'/_next/static/media/chewsFriend.3ee5bbfe.jpg'} alt="Image 3" style={{ borderRadius: '5%' }} />
            </div>
            <div>
              <img src={'/_next/static/media/repFriend.fb8b7542.jpg'} alt="Image 4" style={{  borderRadius: '5%' }} />
            </div>
            <div>
              <img src={'/_next/static/media/getFriend.43d2431b.jpg'} alt="Image 5" style={{  borderRadius: '5%' }} />
            </div>
            {/* Add more divs with images */}
          </Slider>
          <Divider />
          <Form style={{ margin: 'auto', height:'35%',width:'80%', borderRadius: '5%' }} initialValues={{ name, email }} onFinish={handleLogin} name="form">
          {visible && (
            <Alert message="Please enter a valid email" type="error" closable afterClose={handleClose}/>
        )}
            <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please enter your email' }]}>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Item>
            <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please enter your password' }]}>
              <Input value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Item>
            
              <Button style={{marginBottom:'10px'}}type="primary" htmlType="submit" disabled={isLoginDisabled}>
                Login
              </Button>
            
          </Form>
          
        </Card>
      </div>)}
    </div>
  );
};

export default Login;
