import React from 'react';
import { Mail, MapPin } from 'lucide-react';

export function ContactView({ profile }) {
  if (!profile) return null;

  return (
    <section className="section" aria-labelledby="contact-title" style={{ paddingTop: 24 }}>
      <div className="container">
        <div className="cta glass reveal">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Let's connect</p>
          <h2 id="contact-title" className="cta__title">
            Building a <span className="accent">cleaner, resilient</span> Pacific — together.
          </h2>
          <p className="cta__text">
            Open to collaboration on environmental conservation, geospatial analysis and community-driven climate projects.
          </p>
          <div className="cta__actions">
            <a className="btn btn--primary" href={`mailto:${profile.email}`}>
              <Mail size={18} aria-hidden="true" /> Email {profile.name.split(' ')[0]}
            </a>
            <span className="btn btn--ghost" style={{ cursor: 'default' }}>
              <MapPin size={18} aria-hidden="true" /> {profile.location}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
