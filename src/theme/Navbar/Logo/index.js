import React from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Logo() {
  const {i18n} = useDocusaurusContext();
  const locale = i18n.currentLocale;
  const {
    navbar: {logo, title},
  } = useThemeConfig();

  if (!logo?.src) return null;

  const href = locale === 'en'
    ? 'https://www.tdengine.com'
    : 'https://www.taosdata.com';

  return (
    <a
      href={href}
      className="navbar__brand"
      title={logo.alt || title || "Logo"}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={logo.src} alt={logo.alt || title || "Logo"} className="navbar__logo" />
      <span className="navbar__title"><b>{title}</b></span>
    </a>
  );
}