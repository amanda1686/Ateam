import { Sidebar } from 'flowbite-react'
import { useEffect, useState } from 'react';
import { GiCoffeeCup } from "react-icons/gi";
import { IoMdLogOut } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';
import { logoutSuccess } from '../../redux/user/userSlice';
import { useDispatch } from 'react-redux';


export default function DashSidebar() {
    const location = useLocation();
    const [tab, setTab] = useState('');
    const dispatch = useDispatch();
    useEffect(() =>{
      const urlParams = new URLSearchParams(location.search);
      const tabFromUrl = urlParams.get('tab');
      if (tabFromUrl) {
        setTab(tabFromUrl)
      }
    },[location.search]);

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
    <Sidebar className='w-full md:w-56 sidebar'>
        <Sidebar.Items>
            <Sidebar.ItemGroup>
                <Link to='/dashboard?tab=profile'>                
                <Sidebar.Item 
                  icon={GiCoffeeCup }
                  active={tab === 'profile'} 
                  label={'User'} 
                  labelColor='dark'
                  as='div' 
                  className='hover:bg-yellow-300 dark:hover:bg-pink-300'>
                    Profile 
                </Sidebar.Item>
                </Link>
                <Sidebar.Item 
                  icon={IoMdLogOut}  
                  labelColor='dark' 
                  as='div'
                  className='cursor-pointer hover:bg-yellow-300 dark:hover:bg-pink-300'
                  onClick={handleLogout}
                  >
                    Logout
                </Sidebar.Item>
            </Sidebar.ItemGroup>
        </Sidebar.Items>
    </Sidebar>
  )
}
