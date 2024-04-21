import { Footer } from "flowbite-react";
import Logo from '/img/Logo.png';
import { Link } from "react-router-dom";
import {BsInstagram, BsTwitter, BsGithub} from 'react-icons/bs'


export default function FooterCom() {
  return (
    <Footer container className=" border border-t-8 border-yellow-300">
      <div className=" w-full max-w-7xl mx-auto">
        <div className=" grid w-full justify-between sm:flex md:grid-cols-1">
          <div className=" mt-5">
          <Link
            to='/'
            className=''
          >
            <span className=''>
              <img
                src={Logo}
                alt="logo"
                width="20%"
                className="logo rounded"
              />
            </span>
          </Link>
          </div>
          <div className=" grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6 ">
            <div className=""> 
            <Footer.Title title="Our Vision"/>
            <Footer.LinkGroup col>
              <Footer.Link 
              href="https://abooks.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              >
                A-Books
              </Footer.Link>
              <Footer.Link 
              href="/vision"
              target="_blank"
              rel="noopener noreferrer"
              >
                Our Vision
              </Footer.Link>
              <Footer.Link 
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              >
                Contant Us
              </Footer.Link>
            </Footer.LinkGroup>
            </div>
            <div className="">
            <Footer.Title title="Follow Us"/>
            <Footer.LinkGroup col>
              <Footer.Link 
              href="https://github.com/amanda1686"
              target="_blank"
              rel="noopener noreferrer"
              >
                Github
              </Footer.Link>
              <Footer.Link 
              href="/https://amandardz.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              >
                About Me
              </Footer.Link>
              <Footer.Link 
              href="/products"
              target="_blank"
              rel="noopener noreferrer"
              >
                Products
              </Footer.Link>
            </Footer.LinkGroup>
            
            </div>
            <div className="">
            <Footer.Title title="Legal"/>
            <Footer.LinkGroup col>
              <Footer.Link 
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              >
                Privacy Policy
              </Footer.Link>
              <Footer.Link 
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              >
                Terms & Conditions
              </Footer.Link>
            </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider/>
        <div className=" w-full  sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="A Team" year={new Date().getFullYear()}/>
        </div>
        <div className=" flex pl-[45%] gap-5 sm:mt-0 mt-4 sm:justify-center">
                <Footer.Icon href='#' icon={BsInstagram}/>
                <Footer.Icon href='#' icon={BsTwitter}/>
                <Footer.Icon href='#' icon={BsGithub}/>
            </div> 
      </div>
    </Footer>
  )
}
