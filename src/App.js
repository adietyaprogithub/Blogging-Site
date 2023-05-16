import React from "react";
import Topbar from "./Components/Topbar";
import Home from "./Components/pages/home";
import Single from "./Components/pages/single/single";
import Write from "./Components/pages/write/write";
import Setting from "./Components/pages/setting/setting";
import Login from "./Components/pages/login/login";
import Register from "./Components/pages/Register/register";
import Singlepost from "./Components/singlepost/singlepost";
import Post from "./Components/post/post";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  
  return (
    // <div>
    //   <Setting/>
    // </div>


    <Router>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
      <Routes>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Routes>
        <Route path="/write" element={<Write />}></Route>
      </Routes>
      <Routes>
        <Route path="/setting" element={<Setting />}></Route>
      </Routes>
      <Routes>
        <Route path="/singlepost" element={<Singlepost />}></Route>
      </Routes>
     

    </Router>
  );
}
