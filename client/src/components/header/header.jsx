import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {AiOutlineSearch} from 'react-icons/ai'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import  './header.css'
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/theme/themeSlice";
import { logoutSuccess } from "../../redux/user/userSlice";
import { useEffect, useState } from "react";

export default function Header() {
  const {theme} = useSelector ((state) => state.theme);
  const dispatch = useDispatch();
  const path = useLocation().pathname;
  const {currentUser} = useSelector(state => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() =>{
    const urlParams =new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl)
    }
  }, [location.search]);

  const handleSubmit = (e) =>{
    e.preventDefault()
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  }

  const handleLogout = async () =>{
    try {
      const res = await fetch('/api/user/logout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(logoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <Navbar className=" border-b-2">
      <Link to="/" className=" self-center whitespace-nowrap">
         <span className='logo'>A - Team</span>
      </Link>
      <Navbar.Collapse className="enlaces">
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
        <form onSubmit={handleSubmit}>
            <TextInput type='text'
            placeholder='Search...'
            rightIcon={AiOutlineSearch}
            className=' hidden lg:inline'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
        </form>
      <Button className=" w-12 h-10 lg:hidden" color='gray' pill>
        <AiOutlineSearch/>
      </Button>
      <div className=" flex gap-2 md:order-2">
        <Button className=" w-12 h-10 hidden sm:inline" 
        color="gray" 
        pill
        onClick={() => dispatch(toggleTheme())}
        >
          {theme === 'light' ? <FaSun /> :  <BsFillMoonStarsFill /> }
        </Button>
        {currentUser ? (
          <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
            alt="user"
            img={currentUser.profilePicture}
            rounded
            />
          }
          >
            <Dropdown.Header>
              <span className="block text-sm">@{currentUser.username}</span>
              <span className="block text-sm font-medium truncate">@{currentUser.email}</span>
            </Dropdown.Header>
            <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider/>
            <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
            
          </Dropdown>
        ):
          (
            <Link to="/login">
              <Button className="" outline gradientDuoTone="redToYellow" >
                Login
              </Button>
            </Link>
            
          )
      
        }
        <Navbar.Toggle/>
      </div>
      
    </Navbar>
  )
}
