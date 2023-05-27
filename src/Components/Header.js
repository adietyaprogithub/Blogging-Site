import React, { useState, useEffect } from "react";
import "./header.css";

export default function Header() {
  const words = ["Hello", "Welcome", "to", "the", "Blogging" , "," ,"Lets" ,"Share" , "Your" , "Thoughts" ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedSentence, setDisplayedSentence] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentWordIndex < words.length) {
        setDisplayedSentence(
          (prevSentence) => prevSentence + " " + words[currentWordIndex]
        );
        setCurrentWordIndex(currentWordIndex + 1);
      }
    }, 1000); // time that word wll come 

    return () => clearTimeout(timer); // Cleanup
  }, [currentWordIndex, words]);

  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headertitlesm"></span>
        <span className="headertittlelg">{displayedSentence}</span>

        <img
          className="headerImage"
          src="https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg"
          alt=""
        />
       
      </div>
    </div>
  );
}
