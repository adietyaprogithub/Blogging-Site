import React from "react";
import "./post.css";

export default function Post(props) {
  return (
    <div className="post">
      <img
        className="postimage"
        src={props.unidata.Imgr}
        alt=""
      />

      <div className="postinfo">
        <div className="postcats">
          <span className="postcat">{props.unidata.Art}</span>
        </div>
        <span className="posttitle">
        {props.unidata.Name}
        </span>

        <hr />
        <span className="postdate">{props.unidata.Time} </span>
      </div>
      <p className="postdesc">
      {props.unidata.Data}
      </p>
    </div>
  );
}
