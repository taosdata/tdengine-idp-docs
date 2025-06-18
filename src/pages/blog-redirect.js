import React, { useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function BlogRedirect() {
  const { i18n } = useDocusaurusContext();

  useEffect(() => {
    const locale = i18n.currentLocale;
    const href = locale === 'en'
      ? 'https://www.tdengine.com/blog'
      : 'https://www.taosdata.com/blog';
    window.location.replace(href);
  }, [i18n.currentLocale]);

  return <p>正在跳转到博客...</p>;
}