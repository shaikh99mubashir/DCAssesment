import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../Component/Sidebar";

const CurrentRequest = () => {
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
          <div className="innerbox2">
            <div className="recived">
              <div className="tabtext">
              RECEIVED
              </div>
            </div>
            <div className="NEGOTIATING">
              <div className="tabtext">
              NEGOTIATING
              </div>
            </div>
            <div className="COMPLETED">
              <div className="tabtext">
              COMPLETED
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentRequest;
