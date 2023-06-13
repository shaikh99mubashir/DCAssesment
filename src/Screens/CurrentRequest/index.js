import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../Component/Sidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import chaticon from '../../Images/chaticon.png'
const CurrentRequest = () => {
  const tabs = [
    { id: 1, label: "RECEIVED", className: "recived" },
    { id: 2, label: "NEGOTIATING", className: "NEGOTIATING" },
    { id: 3, label: "COMPLETED", className: "COMPLETED",},
  ];

  const [activeTab, setActiveTab] = useState(3);
  const [selectedMap, setSelectedMap] = useState("COMPLETED");
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    const selectedTab = tabs.find((tab) => tab.id === tabId);
    if (selectedTab) {
      setSelectedMap(selectedTab.label);
    }
  };

  const data = {
    RECEIVED: [
      {
        id: 1,
        distance: "1.5 miles away from joblocation",
        singles: "$120",
        doubles: "$145",
        rarefind: false
      },
      {
        id: 2,
        distance: "1.5 miles away from joblocation",
        singles: "$120",
        doubles: "$145",
        rarefind: false
      },
      {
        id: 3,
        distance: "1.5 miles away from joblocation",
        singles: "$120",
        doubles: "$145",
        rarefind: false
      },
    ],
    NEGOTIATING: [
      {
        id: 1,
        distance: "1 miles away from joblocation",
        singles: "$130",
        doubles: "$155",
        rarefind: false
      },
      {
        id: 2,
        distance: "1.2 miles away from joblocation",
        singles: "$130",
        doubles: "$155",
        rarefind: false
      },
      {
        id: 3,
        distance: "1.5 miles away from joblocation",
        singles: "$130",
        doubles: "$155",
        rarefind: false
      },
    ],
    COMPLETED: [
      {
        id: 1,
        distance: "1.5 miles away from joblocation",
        singles: "$140",
        doubles: "$165",
        rarefind: true
      },
      {
        id: 2,
        distance: "1.5 miles away from joblocation",
        singles: "$140",
        doubles: "$165",
        rarefind: false
      },
      {
        id: 3,
        distance: "1.5 miles away from joblocation",
        singles: "$140",
        doubles: "$165",
        rarefind: false
      },
    ]
  };

  const cards = data[selectedMap];
  

  return (
    <div className="main">
      <div>
        <Sidebar />
      </div>
      
      <div>
        <div className="requestText">You currently have 3 requests</div>
        <div className="firstbox">
          <div className="innerbox1">
            <div className="text1div">
              <div className="text1">St Judes Hospital</div>
              <div className="smalltext">Sarasota,FL. 33178</div>
            </div>
            <div className="text2div">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div className="text2">10</div>
                <div className="smalltext">October</div>
              </div>
              <div className="dateDash">
                <div className="text2">-</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div className="text2">17</div>
                <div className="smalltext">December</div>
              </div>
            </div>
            <div className="text3div">
              <div className="text1">20 Rooms</div>
              <div className="smalltext">10 Singles, 10 doubles</div>
            </div>
          </div>
          <div className="innerbox2">
            {tabs.map((tab) => {
              return (
                <div
                  key={tab.id}
                  className={`tab ${tab.className} ${
                    activeTab === tab.id ? "active" : ""
                  }`}
                  onClick={() => handleTabClick(tab.id)}
                >
                  <div
                    className={`tab ${tab.className} ${
                      activeTab === tab.id ? "active" : "tabtext"
                    }`}
                  >
                    {tab.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="secondBox">
          <div className="innerbox1">
            <div className="text1div">
              <div className="text1">St Judes Hospital</div>
              <div className="smalltext">Sarasota,FL. 33178</div>
            </div>
            <div className="text2div">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div className="text2">10</div>
                <div className="smalltext">October</div>
              </div>
              <div style={{ paddingRight: 25 }}>
                <div className="text2">-</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div className="text2">17</div>
                <div className="smalltext">December</div>
              </div>
            </div>
            <div className="text3div">
              <div className="text1">20 Rooms</div>
              <div className="smalltext">10 Singles, 10 doubles</div>
            </div>
          </div>
          {/* Status */}
          <div
            className={`status ${
              activeTab === 1
                ? "active active-1"
                : activeTab === 2
                ? "active active-2"
                : ""
            }`}
          >
            <div className="statustext">
              {tabs.find((tab) => tab.id === activeTab)?.label}
            </div>
          </div>
          <div style={{display:'flex',flexDirection:'row', flexWrap:'wrap', width:'100%', gap:50}}>
          {cards && cards.map((e,i)=>{
            return(
          <div className="cards">
          {e.rarefind ? 
          <div className="rarefind">Rare Find</div>
          :''}
          <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop:22,marginBottom:22}}>
            <img src={require('../../Images/cardlogo.png')} style={{width:48, height:53}}/>
            <span className="cardlogotext">Holiday Inn</span>
          </div>
          <div className="cardBox">
            <div className="cardBoxText">{e.distance}</div>
            <div style={{display:'flex',flexDirection:'row', justifyContent:'space-between', marginTop:8}}>
            <div>
            <div className="cardBoxText2">Singles: {e.singles}</div>
            <div className="cardBoxText2">Doubles: {e.doubles}</div>
            </div>
            <button className="booknow">Book now</button>
            </div>
           
          </div>
          </div>
          )
          })}
          </div>
        </div>
        
        <img src={chaticon} className="messageicon"/>
        
      </div>
    </div>
  );
};

export default CurrentRequest;
