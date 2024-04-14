import { Button, Navbar, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '/img/Logo.png'
import {AiOutlineSearch} from 'react-icons/ai'


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
        <form>
          <TextInput
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
          className=' hidden lg:inline'
          />
        </form>
        <Button className=' w-12 h-10 lg:hidden' color='gray' pill>
          <AiOutlineSearch/>
        </Button>
      </Navbar>
    
  )
}

export default Header
