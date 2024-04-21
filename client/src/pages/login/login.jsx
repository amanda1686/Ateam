import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '/img/Logo.png';
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import { loginFailure, loginStart, loginSuccess } from '../../redux/user/userSlice.js';
import Oauth from '../../components/oauth/oauth.jsx';



function Login() {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const {loading,error: errorMessage} = useSelector(state => state.user);
  const naviate = useNavigate();

  const handleChange = (e) =>{
    setFormData({...formData, [e.target.id]: e.target.value.trim() });
  }
  const handleSubmit = async (e) =>{
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(loginFailure('Please fill out all fields.'));
    }
    try {
      dispatch(loginStart());
      const res = await fetch ('/api/auth/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.sucess === false) {
        dispatch(loginFailure(data.message));
      }
      if (res.ok) {
        dispatch(loginSuccess(data));
        naviate('/');
      }
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  }
  return (
    <div className=' min-h-screen mt-10'>
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className= " flex-1 mr-52">
          <Link
            to='/'
            className=''
          >
            <span className=''>
              <img
                src={Logo}
                alt="logo"
                width=""
                className="logo"
              />
            </span>
          </Link>
          <p className='text-sm mt-5 w-80'>
            Welcome to A Team Café, where every cup tells a story.<br/>
            Our rich, aromatic blends are crafted with passion and precision, ensuring a truly exceptional coffee experience. 
          </p>
        </div>
        {/* right */}
        <div className=" mt-10 flex-1">
          <form className='flex flex-col gap-4 w-[300px]' onSubmit={handleSubmit}>
            <div className=" md: ">
              <Label value='Your email'/>
              <TextInput
                type='email'
                placeholder='name@company'
                id='email'
                onChange={handleChange}
              />
            </div>
            <div className=" md: ">
              <Label value='Your password'/>
              <TextInput
                type='password'
                placeholder='******'
                id='password'
                onChange={handleChange}
              />
            </div>
            <Button className='hover:text-white'  gradientDuoTone="redToYellow" type='submit' disabled={loading}>
              {
                loading ? (
                  <>
                  <Spinner size='sm'/>
                  <span className=' pl-3'>Loading</span>
                  </>
                ) : 'Login'
              }
            </Button>
            <Oauth/>
          </form>
          <div className=" flex gap-2 text-sm mt-5 md: ">
            <span className=''> Dont have an account?</span>
            <Link
              to="/register"
              className=' text-amber-600'
            >
              Register
            </Link>
          </div>
          {
            errorMessage && (
              <Alert className=' mt-5' color='failure'>
                {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Login