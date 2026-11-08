import React from 'react';
import { Heart, Mail, MapPin, MessageCircle, ArrowUp, Sparkle } from 'lucide-react';
import { SECTIONS } from '../viewmodels/usePortfolioViewModel';
import { buildWhatsAppUrl } from '../viewmodels/useChatViewModel';

const LABELS = { about: 'About', experience: 'Experience', skills: 'Skills', references: 'References' };
const DEVELOPER = 'Samson Tauneri Limanikuki';

export function FooterView({ profile, onSelectTab }) {
  if (!profile) return null;
  const initials = profile.name.split(' ').map((p) => p[0]).join('').slice(0, 2);
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__card glass">
          <div className="footer__grid">
            <div className="footer__about">
              <div className="footer__brand">
                <span className="monogram" aria-hidden="true">{initials}</span>
                <div>
                  <p className="footer__name">{profile.name}</p>
                  <p className="footer__role">{profile.title.split(' & ')[0]}</p>
                </div>
              </div>
              <p className="footer__tagline">
                Caring for Kiribati's islands and ocean through geospatial science, environmental action and community partnership.
              </p>
            </div>

            <nav aria-label="Footer">
              <p className="footer__heading">Explore</p>
              <ul className="footer__list">
                {SECTIONS.map((id) => (
                  <li key={id}>
                    <button type="button" className="footer__link" onClick={() => onSelectTab(id)}>
                      <Sparkle size={12} aria-hidden="true" />{LABELS[id]}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="footer__heading">Say hello</p>
              <ul className="footer__list">
                <li>
                  <a className="footer__link" href={`mailto:${profile.email}`}>
                    <Mail size={16} aria-hidden="true" />{profile.email}
                  </a>
                </li>
                {profile.whatsapp && (
                  <li>
                    <a className="footer__link" href={buildWhatsAppUrl(profile.whatsapp)} target="_blank" rel="noopener noreferrer">
                      <MessageCircle size={16} aria-hidden="true" />WhatsApp {profile.whatsapp}
                    </a>
                  </li>
                )}
                <li>
                  <span className="footer__link" style={{ cursor: 'default' }}>
                    <MapPin size={16} aria-hidden="true" />{profile.location}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__bottom">
            <span>© {year} {profile.name}. All rights reserved.</span>
            <span className="footer__credit">
              Designed &amp; developed with <Heart size={14} role="img" aria-label="love" /> by
              <span className="footer__dev">{DEVELOPER}</span>
            </span>
            <button type="button" className="to-top" onClick={() => onSelectTab('home')}>
              <ArrowUp size={16} aria-hidden="true" /> Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
