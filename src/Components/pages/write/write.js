import React from "react";
import "./write.css";

export default function Write() {
  return (
    <div className="write">
        <img  className="writeimage"
        src="https://cdn.pixabay.com/photo/2020/02/27/14/05/planner-4884740_960_720.jpg" alt="" />
      <form className="writeform">
        <div className="writeformgroup">
          <label htmlFor="fileInput">
            <i className="writeicon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="title"
            className="writeInput"
            autoFocus={true}
          />
        </div>

        <div className="writeformgroup">
          <textarea
            placeholder="Tell Your Story ......"
            type="text"
            className="WriteText"
            autoFocus={true}
          ></textarea>
        </div>
        <button className="writesubmit">publish</button>
      </form>
    </div>
  );
}
