import React from "react";
import "./home.css";
import Topbar from "../Topbar";
import Header from "../Header";
import Post from "../../posts/posts";
import Sidebar from "../sidebar/sidebar";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="home">
        <Post />
        <Sidebar />
      </div>
    </div>
  );
}
