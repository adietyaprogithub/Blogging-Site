import React from "react";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebaritem">
        <span className="sidebartitle">About Me</span>
        <img
          className="sideimage"
          src="https://images.pexels.com/photos/3265460/pexels-photo-3265460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
      </div>

      <div className="sidebaritem">
        <span className="sidebartitle">Categories</span>
        <ul className="sidebarlist">
          <li className="sidebarlistitem"> Life </li>
          <li className="sidebarlistitem"> Music</li>
          <li className="sidebarlistitem"> Sport</li>
          <li className="sidebarlistitem"> Movie</li>
          <li className="sidebarlistitem"> Images</li>
          <li className="sidebarlistitem"> New Things</li>
        </ul>
      </div>
      <div className="sidebaritem"></div>
      <span className="sidebartitle"> Follow Me </span>

      <i className="topicon fa-brands fa-instagram"></i>
    </div>
  );
}
