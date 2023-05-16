import React from "react";
import "./setting.css";
import Sidebar from "../../sidebar/sidebar";

export default function Setting() {
  return (
    <div className="setting">
      <div className="settingwrapeer ">
        <div className="settingtitle">
          <span className="settingupdatetitile">Update</span>
          <span className="settingdeteletetitile">Delete</span>
        </div>

        <form className="settingform">
          <label>Profile Picture </label>
          <div className="settingpp">
            <img className="settingimg"
              src="https://images.pexels.com/photos/4591254/pexels-photo-4591254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />

            <label htmlFor="filrInput">
            <i className= "settingppicon fa-solid fa-user"></i>
           
            </label>

            <input type="file"  id="fileInput"  style={{display:"none"}}/>
          </div>
          <label> Username</label>
          <input type="text" placeholder="Enter Your Username"/>
          <label> Username</label>
          <input type="text" placeholder="Enter Your Username"/>
          <label> Password</label>
          <input placeholder="Enter Your Password"/>
          <button className="settingsubmit"> Updatate</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
