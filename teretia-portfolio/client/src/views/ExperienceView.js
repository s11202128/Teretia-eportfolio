import React from 'react';
import { Building2, MapPin, CalendarDays, CheckCircle2 } from 'lucide-react';

export function ExperienceView({ experience }) {
  if (!experience) return null;

  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <div className="section__head reveal">
          <p className="eyebrow">02 · Experience</p>
          <h2 id="experience-title" className="section__title">
            Work experience &amp; <span className="accent">key assignments</span>
          </h2>
        </div>

        <ol className="timeline">
          {experience.map((item, idx) => (
            <li key={idx} className="role glass glass--hover reveal" style={{ '--delay': `${idx * 100}ms` }}>
              <span className="role__node" aria-hidden="true" />
              <div className="role__top">
                <div>
                  <h3 className="role__title">{item.title}</h3>
                  <p className="role__project">{item.project}</p>
                </div>
                <span className="period-pill">
                  <CalendarDays size={14} aria-hidden="true" />{item.period}
                </span>
              </div>
              <div className="role__org">
                <span><Building2 size={16} aria-hidden="true" />{item.organization}</span>
                <span><MapPin size={16} aria-hidden="true" />{item.location}</span>
              </div>
              <ul className="highlights">
                {item.highlights.map((h, i) => (
                  <li key={i}><CheckCircle2 size={18} aria-hidden="true" /><span>{h}</span></li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
