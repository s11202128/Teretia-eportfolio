import React, { useState } from 'react';
import { MapPin, Mail, ArrowRight, GraduationCap, Globe, Waves, Sparkles, Leaf } from 'lucide-react';

export function HeroView({ profile, skills, experience, onSelectTab }) {
  const [imgFailed, setImgFailed] = useState(false);
  if (!profile) return null;

  const [first, ...rest] = profile.name.split(' ');
  const initials = profile.name.split(' ').map((p) => p[0]).join('').slice(0, 2);
  const [roleA, roleB] = profile.title.split(' & ');
  const featured = (skills?.[0]?.items || []).slice(0, 3);
  const latest = experience?.[0];

  return (
    <section id="home" className="hero" aria-labelledby="hero-name">
      <div className="container">
        <div className="hero__grid">
          <div>
            <div className="status-pill glass reveal">
              <span className="status-dot" aria-hidden="true" />
              {latest ? `Now · ${latest.title}` : 'e-Portfolio'}
            </div>

            <h1 id="hero-name" className="hero__name reveal" style={{ '--delay': '80ms' }}>
              {first}<br />
              <span className="accent">{rest.join(' ')}</span>
            </h1>

            <p className="hero__title reveal" style={{ '--delay': '160ms' }}>
              <strong>{roleA}</strong>
              {roleB && <> &amp; {roleB}</>} — shaping a cleaner, more resilient Pacific through data and community.
            </p>

            <div className="hero__meta reveal" style={{ '--delay': '220ms' }}>
              <span><MapPin size={18} aria-hidden="true" />{profile.location}</span>
              <span><GraduationCap size={18} aria-hidden="true" />{profile.education.institution.replace(/^The /, '')}</span>
            </div>

            <div className="hero__actions reveal" style={{ '--delay': '280ms' }}>
              <a className="btn btn--primary" href={`mailto:${profile.email}`}>
                <Mail size={18} aria-hidden="true" /> Get in touch
              </a>
              <button type="button" className="btn btn--ghost" onClick={() => onSelectTab('experience')}>
                View experience <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="hero__visual reveal" style={{ '--delay': '120ms' }}>
            <div className="portrait">
              <div className="portrait__ring portrait__ring--outer" aria-hidden="true" />
              <div className="portrait__ring portrait__ring--glow" aria-hidden="true" />
              <div className="portrait__frame">
                {imgFailed ? (
                  <span className="portrait__initials" role="img" aria-label={profile.name}>{initials}</span>
                ) : (
                  <img
                    src="/Teretia.jpg"
                    alt={`Portrait of ${profile.name}`}
                    width="400"
                    height="400"
                    onError={() => setImgFailed(true)}
                  />
                )}
              </div>
              {featured[0] && (
                <span className="chip-float chip-float--1 glass"><Leaf size={16} aria-hidden="true" />{featured[0]}</span>
              )}
              {featured[1] && (
                <span className="chip-float chip-float--2 glass"><Globe size={16} aria-hidden="true" />{featured[1]}</span>
              )}
              {featured[2] && (
                <span className="chip-float chip-float--3 glass"><Waves size={16} aria-hidden="true" />{featured[2]}</span>
              )}
            </div>
          </div>
        </div>

        <div className="stats glass reveal" style={{ '--delay': '340ms' }}>
          <div className="stat">
            <div className="stat__value">{experience?.length || 0} roles</div>
            <div className="stat__label">Government environmental assignments</div>
          </div>
          <div className="stat">
            <div className="stat__value">B.Sc · {profile.education.year}</div>
            <div className="stat__label">{profile.education.degree}</div>
          </div>
          <div className="stat">
            <div className="stat__value" style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              Pacific <Sparkles size={22} color="#f9a8d4" aria-hidden="true" />
            </div>
            <div className="stat__label">Marine litter &amp; climate resilience focus</div>
          </div>
        </div>
      </div>
    </section>
  );
}
