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

    // 自动收起顶部导航栏：监听右侧锚点目录点击
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