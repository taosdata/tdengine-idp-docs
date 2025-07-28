import React, { useState, useRef, useEffect } from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';

function LanguageSwitchDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { pathname, search, hash } = window.location;
  const currentHost = window.location.host;
  const zhHost = "idmpdocs.taosdata.com";
  const enHost = "idmpdocs.tdengine.com";
  const isZh = currentHost === zhHost;

  const enUrl = `https://${enHost}/en${pathname}${search}${hash}`;
  const zhPath = pathname.startsWith('/en') ? pathname.replace(/^\/en/, '') : pathname;
  const zhUrl = `https://${zhHost}${zhPath}${search}${hash}`;

  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div
      ref={dropdownRef}
      style={{
        position: 'absolute',
        right: 0,
        top: 0,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        marginRight: '24px',
        userSelect: 'none',
      }}
    >
      <span
        style={{ display: 'inline-flex', alignItems: 'center', fontWeight: 500, cursor: 'pointer' }}
        onClick={() => setOpen((v) => !v)}
      >
        <span style={{ fontSize: 18, marginRight: 4 }}>🌐</span>
        {isZh ? '简体中文' : 'English'}
        <span style={{ marginLeft: 4, fontSize: 12 }}>▼</span>
      </span>
      {open && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 4px)',
            right: 0,
            minWidth: 120,
            background: '#fff',
            boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
            borderRadius: 6,
            zIndex: 999,
            padding: '8px 0',
          }}
        >
          <a
            href={enUrl}
            style={{
              display: 'block',
              padding: '8px 16px',
              color: isZh ? '#222' : '#aaa',
              fontWeight: isZh ? 500 : 400,
              textDecoration: 'none',
              background: !isZh ? '#f5f5f5' : 'transparent',
              cursor: isZh ? 'pointer' : 'default',
            }}
            tabIndex={0}
          >
            English
          </a>
          <a
            href={zhUrl}
            style={{
              display: 'block',
              padding: '8px 16px',
              color: !isZh ? '#222' : '#aaa',
              fontWeight: !isZh ? 500 : 400,
              textDecoration: 'none',
              background: isZh ? '#f5f5f5' : 'transparent',
              cursor: !isZh ? 'pointer' : 'default',
            }}
            tabIndex={0}
          >
            简体中文
          </a>
          <div
            style={{
              padding: '8px 16px',
              color: '#666',
              fontSize: 13,
              cursor: 'pointer',
              borderTop: '1px solid #eee',
              marginTop: 4,
            }}
            onClick={() => window.open('https://github.com/taosdata/tdengine-idmp-docs/tree/main/i18n/en/docusaurus-plugin-content-docs/current', '_blank')}
          >
            Help Us Translate
          </div>
        </div>
      )}
    </div>
  );
}

export default function Logo() {
  const { navbar: { logo, title } } = useThemeConfig();

  if (!logo?.src) return null;

  return (
    <div style={{
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      width: '100%',
    }}>
      <a
        href="/"
        className="navbar__brand"
        title={logo.alt || title || "Logo"}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <img src={logo.src} alt={logo.alt || title || "Logo"} className="navbar__logo" />
        <span className="navbar__title"><b>{title}</b></span>
      </a>
      <LanguageSwitchDropdown />
    </div>
  );
}