import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import Logo from '/img/Logo.png';
import {AiOutlineSearch} from 'react-icons/ai'
import { RiMoonClearFill } from "react-icons/ri";


export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className=" border-b-2">
      <Link to="/" className=" self-center whitespace-nowrap">
        <span>
          <img 
          src={Logo} 
          alt="logo"
          width="15%"
          className=""
          />
        </span>
      </Link>
      <form>
        <TextInput
        type="text"
        placeholder="Search..."
        rightIcon={AiOutlineSearch}
        className=" hidden lg:inline"
        />
      </form>
      <Button className=" w-12 h-10 lg:hidden" color='gray' pill>
        <AiOutlineSearch/>
      </Button>
      <div className=" flex gap-2 md:order-2">
        <Button className=" w-12 h-10 hidden sm:inline" color="black" pill>
        <RiMoonClearFill />
        </Button>
        <Link to="/login">
          <Button className="" gradientDuoTone="redToYellow" >
            Login
          </Button>
        </Link>
        <Navbar.Toggle/>
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={'div'}>
          <Link to="/">
              Home
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/vision"} as={'div'}>
          <Link to="/vision">
              Our Vision
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/products"} as={'div'}>
          <Link to="/products">
              Products
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
      
    </Navbar>
  )
}
