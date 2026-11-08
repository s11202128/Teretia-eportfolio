import React from 'react';
import { Compass, Sparkles } from 'lucide-react';

const ICONS = [Compass, Sparkles];

export function SkillsView({ skills }) {
  if (!skills) return null;

  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <div className="section__head reveal">
          <p className="eyebrow">03 · Skills</p>
          <h2 id="skills-title" className="section__title">
            Skills &amp; <span className="accent">competencies</span>
          </h2>
        </div>

        <div className="skills__grid">
          {skills.map((group, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <article key={idx} className="skill-card glass glass--hover reveal" style={{ '--delay': `${idx * 100}ms` }}>
                <div className="skill-card__head">
                  <span className="icon-badge" aria-hidden="true"><Icon size={22} /></span>
                  <div>
                    <h3 className="skill-card__title">{group.category}</h3>
                    <p className="skill-card__count">{String(group.items.length).padStart(2, '0')} areas</p>
                  </div>
                </div>
                <ul className="skill-list">
                  {group.items.map((skill, sIdx) => (
                    <li key={sIdx} className="skill-item">
                      <span className="skill-item__index" aria-hidden="true">{String(sIdx + 1).padStart(2, '0')}</span>
                      <span className="skill-item__name">{skill}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
