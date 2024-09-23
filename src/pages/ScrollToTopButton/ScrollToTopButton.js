/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { GiUpgrade } from "react-icons/gi";
import './ScrollToTopButton.css'; // Add some styles for the button

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button depending on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) { // Show button after 300px of scrolling
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-button">
          <GiUpgrade />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
