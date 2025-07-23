import React, { useEffect } from 'react';

export default function Root({ children }) {
  useEffect(() => {
    const navbar = document.querySelector('.theme-layout-navbar');
    const body = document.body;

    const observer = new MutationObserver(() => {
      if (body.classList.contains('medium-zoom--opened')) {
        if (navbar) navbar.classList.add('navbarHidden_bnBw');
      } else {
        if (navbar) navbar.classList.remove('navbarHidden_bnBw');
      }
    });

    observer.observe(body, { attributes: true, attributeFilter: ['class'] });

    return () => {
      observer.disconnect();
    };
  }, []);
  return <>{children}</>;
}