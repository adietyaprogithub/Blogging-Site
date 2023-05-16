import React from "react";
import "./singlepost.css";

export default function Singlepost() {
  return (
    <div className="singlePost">
      <div className="singlepostwrapper">
        <img className="singlepostimage"
          src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <h1 className="singleposttitle">
          Lorem ipsum dolor sit
          <div className="singlepostedit">
            <i className="singleposticon fa-solid fa-pen-to-square"></i>
            <i class="singleposticon fa-sharp fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlepostInfo">
          <span className="sinlepostauthor">
            Author :<b></b>
          </span>
          <span className="sinleposDates">1 Hour ago</span>
        </div>
        <p className="singlepostdisc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab corrupti
          voluptatem distinctio nisi dolore numquam exercitationem, expedita in
          ullam aspernatur aliquam voluptatibus est reiciendis et ratione sed
          eaque officia nemo. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Iusto doloribus similique harum eveniet facere inventore tempore
          sunt dicta mollitia est eius doloremque quam obcaecati, perspiciatis,
          dolores nulla sapiente, incidunt eum. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Veritatis ex obcaecati debitis hic
          aliquid, accusantium id nulla nesciunt alias nobis asperiores corporis
          totam iusto quod assumenda similique eveniet ducimus maxime!
        </p>
      </div>
    </div>
  );
}

