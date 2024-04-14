import { Button, Navbar, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '/img/Logo.png'
import {AiOutlineSearch} from 'react-icons/ai'
import { FaMoon } from "react-icons/fa";
import './header.css'


function Header() {
  return (
    
      <Navbar className=' border-b-2'>
        <Link to="/" className=' self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
          <img 
          src={Logo}
          className=' px-2' 
          alt="logo"
          width='15%'
          />
        </Link>
        <div className=" flex gap-2">
          <Button className=' w-12 h-10 lg:hidden sm:inline' color='gray' pill>
            <FaMoon/>
          </Button>
          <Link>
            <Button outline gradientDuoTone="greenToBlue">
              Login
            </Button>
          </Link>
          <Navbar.Toggle/>
        </div>
          <Navbar.Collapse>
            <Navbar.Link>
              <Link to='/'>
                Home
              </Link>
            </Navbar.Link>
            <Navbar.Link>
              <Link to='/vision'>
                Our Vision
              </Link>
            </Navbar.Link>
            <Navbar.Link>
              <Link to='/products'>
                Products
              </Link>
            </Navbar.Link>
          </Navbar.Collapse>
      </Navbar>
    
  )
}

export default Header
