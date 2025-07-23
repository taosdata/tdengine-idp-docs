import React, { useEffect } from 'react';

export default function Root({ children }) {
  useEffect(() => {
    const navbar = document.querySelector('.theme-layout-navbar');
    const body = document.body;

    // Hide the top navbar when medium-zoom is opened
    const observer = new MutationObserver(() => {
      if (body.classList.contains('medium-zoom--opened')) {
        if (navbar) navbar.classList.add('navbarHidden_bnBw');
      } else {
        if (navbar) navbar.classList.remove('navbarHidden_bnBw');
      }
    });

    observer.observe(body, { attributes: true, attributeFilter: ['class'] });

    // automatically hide the top navbar when clicking on right-side table of contents links
    const rightTocLinks = document.querySelectorAll('.table-of-contents__link');
    rightTocLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navbar) navbar.classList.add('navbarHidden_bnBw');
      });
    });

    return () => {
      observer.disconnect();
      rightTocLinks.forEach(link => {
        link.removeEventListener('click', () => {
          if (navbar) navbar.classList.add('navbarHidden_bnBw');
        });
      });
    };
  }, []);
  return <>{children}</>;
}