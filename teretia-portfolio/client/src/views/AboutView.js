import React from 'react';
import { GraduationCap, Mail, MapPin, Phone, UserRound } from 'lucide-react';

export function AboutView({ profile }) {
  if (!profile) return null;

  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <div className="section__head reveal">
          <p className="eyebrow">01 · About</p>
          <h2 id="about-title" className="section__title">
            Mapping change, <span className="accent">protecting</span> island futures.
          </h2>
        </div>

        <div className="about__grid">
          <div className="about__bio glass reveal">
            <p>{profile.bio}</p>
          </div>

          <div className="about__side">
            <div className="info-card glass glass--hover reveal" style={{ '--delay': '100ms' }}>
              <span className="icon-badge" aria-hidden="true"><GraduationCap size={22} /></span>
              <div>
                <p className="info-card__label">Education</p>
                <h3 className="info-card__title">{profile.education.degree}</h3>
                <p className="info-card__text">{profile.education.institution} · {profile.education.year}</p>
              </div>
            </div>

            <div className="info-card glass glass--hover reveal" style={{ '--delay': '180ms' }}>
              <span className="icon-badge" aria-hidden="true"><UserRound size={22} /></span>
              <div style={{ minWidth: 0 }}>
                <p className="info-card__label">Contact</p>
                <ul className="info-list">
                  <li>
                    <Mail size={17} aria-hidden="true" />
                    <a className="link" href={`mailto:${profile.email}`}>{profile.email}</a>
                  </li>
                  {profile.phone && (
                    <li>
                      <Phone size={17} aria-hidden="true" />
                      <a className="link" href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
                    </li>
                  )}
                  <li><MapPin size={17} aria-hidden="true" />{profile.location}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
