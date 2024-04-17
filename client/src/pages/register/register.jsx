import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '/img/Logo.png';
import { Button, Label, TextInput } from 'flowbite-react';

function Register() {
  return (
    <div className=' min-h-screen mt-10'>
      <div className="flex p-3 mx-auto flex-col md:items-center md:flex-row">
        {/* left */}
        <div className= " flex-1">
          <Link
            to='/'
            className=''
          >
            <span className=''>
              <img
                src={Logo}
                alt="logo"
                width="40%"
                className=" ml-52"
              />
            </span>
          </Link>
          <p className='text-sm mt-5 ml-28'>
            Welcome to A Team Café, where every cup tells a story.<br/>
            Our rich, aromatic blends are crafted with passion and precision, ensuring a truly exceptional coffee experience. 
          </p>
        </div>
        {/* right */}
        <div className=" mt-10 flex-1">
          <form className='flex flex-col gap-4 w-[500px]'>
            <div className=" md: ml-28">
              <Label value='Your username'/>
              <TextInput
                type='text'
                placeholder='Username'
                id='username'
              />
            </div>
            <div className=" md: ml-28">
              <Label value='Your lastname'/>
              <TextInput
                type='text'
                placeholder='lastname'
                id='lastname'
              />
            </div>
            <div className=" md: ml-28">
              <Label value='Your email'/>
              <TextInput
                type='text'
                placeholder='name@company'
                id='email'
              />
            </div>
            <div className=" md: ml-28">
              <Label value='Your password'/>
              <TextInput
                type='text'
                placeholder='password'
                id='password'
              />
            </div>
            <Button className='ml-28'  gradientDuoTone="redToYellow" type='submit'>
              Register
            </Button>
          </form>
          <div className=" flex gap-2 text-sm mt-5 md: ml-28">
            <span className=''> Have an account?</span>
            <Link
              to="/login"
              className=' text-amber-600'
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register