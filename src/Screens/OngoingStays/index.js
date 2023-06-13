import React from 'react'
import Sidebar from '../../Component/Sidebar'
import './styles.css';

const OngoingStays = () => {
  return (
    <div className="main1">
      <div style={{width:'18%', border: '1px solid black'}}>
        <Sidebar />
      </div>
      <div >
      <div className="requestText1">You currently have 3 requests</div>
      </div>
    </div>
  )
}

export default OngoingStays