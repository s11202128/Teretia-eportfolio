import React from 'react';
import { Mail, Building2 } from 'lucide-react';

function initialsOf(name) {
  return name
    .replace(/^(Ms|Mrs|Mr|Dr)\.?\s+/i, '')
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2);
}

export function ReferencesView({ references }) {
  if (!references) return null;

  return (
    <section id="references" className="section" aria-labelledby="references-title">
      <div className="container">
        <div className="section__head reveal">
          <p className="eyebrow">04 · References</p>
          <h2 id="references-title" className="section__title">
            Professional <span className="accent">references</span>
          </h2>
        </div>

        <div className="refs__grid">
          {references.map((ref, idx) => (
            <article key={idx} className="ref-card glass glass--hover reveal" style={{ '--delay': `${idx * 100}ms` }}>
              <div className="ref-card__top">
                <span className="ref-avatar" aria-hidden="true">{initialsOf(ref.name)}</span>
                <div>
                  <h3 className="ref-card__name">{ref.name}</h3>
                  <p className="ref-card__pos">{ref.position}</p>
                </div>
              </div>
              <p className="ref-card__org"><Building2 size={16} aria-hidden="true" />{ref.organization}</p>
              <a className="ref-card__mail" href={`mailto:${ref.email}`} aria-label={`Email ${ref.name} at ${ref.email}`}>
                <Mail size={16} aria-hidden="true" /><span>{ref.email}</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
