import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { SECTIONS } from '../viewmodels/usePortfolioViewModel';

const LABELS = { about: 'About', experience: 'Experience', skills: 'Skills', references: 'References' };

export function HeaderView({ profile, activeTab, onSelectTab, theme, onToggleTheme }) {
  const [logoFailed, setLogoFailed] = useState(false);
  if (!profile) return null;
  const initials = profile.name.split(' ').map((p) => p[0]).join('').slice(0, 2);
  const nextMode = theme === 'light' ? 'dark' : 'light';

  return (
    <header className="nav">
      <nav className="nav__inner glass" aria-label="Primary">
        <a
          href="#home"
          className="nav__brand"
          onClick={(e) => { e.preventDefault(); onSelectTab('home'); }}
        >
          {logoFailed ? (
            <span className="monogram" aria-hidden="true">{initials}</span>
          ) : (
            <span className="logo" aria-hidden="true">
              <span className="logo__clip">
                <img src="/Teretia.jpg" alt="" width="40" height="40" onError={() => setLogoFailed(true)} />
              </span>
            </span>
          )}
          <span className="nav__brand-text">{profile.name}</span>
        </a>

        <div className="nav__right">
          <ul className="nav__links">
            {SECTIONS.map((tab) => (
              <li key={tab}>
                <button
                  type="button"
                  className="nav__link"
                  aria-current={activeTab === tab ? 'true' : undefined}
                  onClick={() => onSelectTab(tab)}
                >
                  {LABELS[tab]}
                </button>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${nextMode} mode`}
            title={`Switch to ${nextMode} mode`}
          >
            <Sun size={20} className="icon-sun" aria-hidden="true" />
            <Moon size={20} className="icon-moon" aria-hidden="true" />
          </button>
        </div>
      </nav>
    </header>
  );
}
