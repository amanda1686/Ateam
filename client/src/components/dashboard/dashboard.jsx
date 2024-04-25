import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import DashSidebar from '../dashSidebar/dashSidebar.jsx';
import DashProfile from '../dashProfile/dashProfile.jsx';
import './dashboard.css'
import DashPosts from '../dashPosts/dashPosts.jsx';
import DashUsers from '../dashUsers/dashUsers.jsx';
import DashComments from '../dashComments/dashComments.jsx';

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState('');
  useEffect(() =>{
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl)
    }
  },[location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        {/* sidebar */}
        <DashSidebar className='sidebar'/>
      </div>
      {/* profile */}
      {tab === 'profile' && <DashProfile className='profile'/>}
      {/* posts... */}
      {tab === 'posts' && <DashPosts/>}
      {/* users */}
      {tab === 'users' && <DashUsers/>}
      {/* comments */}
      {tab === 'comments' && <DashComments/>}

    </div>
    
  )
}
