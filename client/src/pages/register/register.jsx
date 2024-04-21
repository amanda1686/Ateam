import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '/img/Logo.png';
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import Oauth from '../../components/oauth/oauth';


function Register() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoadig] = useState (false);
  const naviate = useNavigate();

  const handleChange = (e) =>{
    setFormData({...formData, [e.target.id]: e.target.value.trim() });
  }
  const handleSubmit = async (e) =>{
    e.preventDefault();
    if (!formData.username || !formData.lastname || !formData.email || !formData.password) {
      return setErrorMessage ('Please fill out all fields.')
    }
    try {
      setLoadig(true);
      setErrorMessage(null);
      const res = await fetch ('/api/auth/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.sucess === false) {
        return setErrorMessage(data.message);
      }
      setLoadig(false);
      if (res.ok) {
        naviate('/login');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoadig(false);
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
              <Label value='Your username'/>
              <TextInput
                type='text'
                placeholder='Username'
                id='username'
                onChange={handleChange}
              />
            </div>
            <div className=" md: ">
              <Label value='Your lastname'/>
              <TextInput
                type='text'
                placeholder='lastname'
                id='lastname'
                onChange={handleChange}
              />
            </div>
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
                placeholder='password'
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
                ) : 'Register'
              }
            </Button>
            <Oauth/>
          </form>
          <div className=" flex gap-2 text-sm mt-5 md: ">
            <span className=''> Have an account?</span>
            <Link
              to="/login"
              className=' text-amber-600'
            >
              Login
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

export default Register