import React, { useState, useEffect } from 'react';

import '../Styles/ScrollToTop.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 700);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      className={`scroll-to-top ${isVisible ? 'show' : 'hide'}`}
      onClick={scrollToTop}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="none" stroke="#ddb892" stroke-linecap="square" stroke-miterlimit="10" stroke-width="48" d="m112 244l144-144l144 144M256 120v292" /></svg>    </button>
  );
};

export default ScrollToTop;