import React from "react";
import "./topbar.css";
import Write from "./pages/write/write";
import Setting from "./pages/setting/setting";

import { Link } from "react-router-dom";
import Singlepost from "./singlepost/singlepost";

export default function Topbar() {
  return (
    <div className="top">
      <h2 className="icons">
        <i className="topicon fa-brands fa-facebook-f"></i>
        <i className="topicon fa-brands fa-instagram"></i>

        <i className="topicon fa-brands fa-whatsapp"></i>
      </h2>
      <div className="topLeft"> l</div>
      <ul className="topList">
        <li className="topListItem">
          <Link to="/ " className="link">
            {" "}
            Home
          </Link>
        </li>

        <li className="topListItem">
          <Link to="/write " className="link">
            {" "}
            Write
          </Link>
        </li>
        <li className="topListItem">
          <Link to="/singlepost " className="link">
            {" "}
            Single-Post
          </Link>
        </li>

        <li className="topListItem">
          <Link to="/setti" className="link">
            {" "}
            About Us
          </Link>
        </li>
      </ul>
      <div className="topCenter"> </div>

      <div className="topRight">
        <ul>
          <li className="topListItem">
            <Link to="/login " className="link">
              {" "}
              Login
            </Link>
          </li>
        </ul>

        <Link to="/setting">
          <img
            className="topimage"
            src="https://images.pexels.com/photos/3265460/pexels-photo-3265460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </Link>

        <div className="top-left"></div>
      </div>
    </div>
  );
}
