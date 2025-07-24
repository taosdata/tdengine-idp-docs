import React, { useEffect } from 'react';

const TOC_LINK_SELECTOR = '.table-of-contents__link';
const NAVBAR_HIDDEN_CLASS = 'navbarHidden_bnBw';

export default function Root({ children }) {
  useEffect(() => {
    const navbar = document.querySelector('.theme-layout-navbar');
    const body = document.body;
    const tocContainer = document.querySelector('.table-of-contents');

    const hideNavbar = () => {
      navbar?.classList.add(NAVBAR_HIDDEN_CLASS);
    };

    const observer = new MutationObserver(() => {
      if (body.classList.contains('medium-zoom--opened')) {
        hideNavbar();
      } else {
        navbar?.classList.remove(NAVBAR_HIDDEN_CLASS);
      }
    });
    observer.observe(body, { attributes: true, attributeFilter: ['class'] });

    const handleTocClick = (e) => {
      if (e.target.matches(TOC_LINK_SELECTOR)) {
        hideNavbar();
      }
    };

    if (tocContainer) {
      tocContainer.addEventListener('click', handleTocClick);
    }

    return () => {
      observer.disconnect();
      if (tocContainer) {
        tocContainer.removeEventListener('click', handleTocClick);
      }
    };
  }, []);

  return <>{children}</>;
}