import React from "react";
import "./post.css";
import Post from "../Components/post/post";

export default function Posts() {
  const jim = [
    {
      Art: "Tech",
      Imgr:"https://cdn.pixabay.com/photo/2016/11/22/06/47/twitter-1848505_960_720.png",
      Name: "@Elon_Musk",
      Time: "1 Hour Ago",
      Data: " \" You want to have a future where you're expecting things to be better, not one where you're expecting things to be worse.\"",
    },
    {
      Art: "Tech",
      Imgr:"https://static.vecteezy.com/system/resources/previews/006/892/682/original/microsoft-logo-icon-editorial-free-vector.jpg",
      Name: "@Bill_Gates",
      Time: "1 Hour Ago",
      Data: " \"Don't compare yourself with anyone in this world ... if you do so, you are insulting yourself.\" ",
    },
    {
      Art: "Tech",
      Imgr:"https://blog.hubspot.com/hubfs/image8-2.jpg",
      Name: "@Larry_Page",
      Time: "1 Hour Ago",
      Data: " \"When you aim for the stars you may come up short, but still reach the moon \".",
    },
    {
      Art: "Tech",
      Imgr:"https://cdn-icons-png.flaticon.com/512/124/124010.png",
      Name: "@Mark_Zukerberg",
      Time: "1 Hour Ago",
      Data: " \"The biggest risk is not taking any risk... In a world that changing really quickly, the only strategy that is guaranteed to fail is not taking risks \" ",
    },
    {
      Art: "Tech",
      Imgr:"https://cdn.pixabay.com/photo/2018/05/08/21/28/apple-3384010_1280.png",
      Name: "@Tim_Cook",
      Time: "1 Hour Ago",
      Data: " \" The most important thing Apple is doing is making sure they leave the world better than they found it.\" ",
    },
    {
      Art: "Tech",
      Imgr:"https://img.etimg.com/thumb/msid-59738992,width-640,resizemode-4,imgsize-25499/amazon.jpg",
      Name: "@Jeff_Bozes",
      Time: "1 Hour Ago",
      Data: "\"One of the only ways to get out of a tight box is to invent your way out\"",
    },
    {
      Art: "Tech",
      Imgr:"https://cdn.vox-cdn.com/thumbor/sW5h16et1R3au8ZLVjkcAbcXNi8=/0x0:3151x2048/2000x1333/filters:focal(1575x1024:1576x1025)/cdn.vox-cdn.com/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png",
      Name: "@Reed_Hastings",
      Time: "1 Hour Ago",
      Data: "\"I've worked very hard, but my life's always been fun\" ",
    },
    {
      Art: "Tech",
      Imgr:"https://static.vecteezy.com/system/resources/previews/011/332/798/original/artificial-intelligence-ai-logo-human-technology-human-digital-robot-tech-icon-design-template-free-vector.jpg",
      Name: "@Geoffrey_Hinton.",
      Time: "1 Hour Ago",
      Data: "\" I feel slightly embarrassed by being called 'the godfather.'\"",
    },
    {
      Art: "Tech",
      Imgr:"https://s7ap1.scene7.com/is/content/TCSCOMprod/Logo",
      Name: "@Ratan_Tata",
      Time: "1 Hour Ago",
      Data: "\"None can destroy iron, but its own rust can. Likewise, none can destroy a person but his own mindset can\" ",
    },
  ];

  return (
    <div className="posts">
      <Post unidata={jim[0]} />
      <Post unidata={jim[1]} />
      <Post unidata={jim[2]} />
      <Post unidata={jim[3]} />
      <Post unidata={jim[4]} />
      <Post unidata={jim[5]} />
      <Post unidata={jim[6]} />
      <Post unidata={jim[7]} />
      <Post unidata={jim[8]} />
    </div>
  );
}
