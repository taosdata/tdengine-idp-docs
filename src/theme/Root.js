import React, { useEffect } from 'react';

export default function Root({ children }) {
  useEffect(() => {
    const navbar = document.querySelector('.theme-layout-navbar');
    const body = document.body;
    const hideNavbar = () => {
      navbar?.classList.add('navbarHidden_bnBw');
    };
    // Hide the top navbar when medium-zoom is opened

    const observer = new MutationObserver(() => {
      if (body.classList.contains('medium-zoom--opened')) {
        hideNavbar();
      } else {
        navbar?.classList.remove('navbarHidden_bnBw');
      }
    });
    observer.observe(body, { attributes: true, attributeFilter: ['class'] });

    // Hide the navbar when clicking on a link in the table of contents
    const handleTocClick = (e) => {
      if (e.target.matches('.table-of-contents__link')) {
        hideNavbar();
      }
    };
    document.addEventListener('click', handleTocClick);

    // cleanup function to remove the event listeners
    return () => {
      observer.disconnect();
      document.removeEventListener('click', handleTocClick);
    };
  }, []);

  return <>{children}</>;
}