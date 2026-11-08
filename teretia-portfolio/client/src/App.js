import React from 'react';
import { usePortfolioViewModel } from './viewmodels/usePortfolioViewModel';
import { useReveal } from './viewmodels/useReveal';
import { HeaderView } from './views/HeaderView';
import { HeroView } from './views/HeroView';
import { AboutView } from './views/AboutView';
import { ExperienceView } from './views/ExperienceView';
import { SkillsView } from './views/SkillsView';
import { ReferencesView } from './views/ReferencesView';
import { ContactView } from './views/ContactView';

function Backdrop() {
  return (
    <div className="backdrop" aria-hidden="true">
      <div className="orb orb--rose" />
      <div className="orb orb--violet" />
      <div className="orb orb--aqua" />
      <div className="backdrop__grid" />
    </div>
  );
}

function App() {
  const { profile, skills, experience, references, loading, activeTab, selectTab } = usePortfolioViewModel();
  useReveal(!loading);

  if (loading) {
    return (
      <>
        <Backdrop />
        <div className="loader" role="status" aria-live="polite">
          <div className="loader__ring" aria-hidden="true" />
          Loading portfolio
        </div>
      </>
    );
  }

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Backdrop />
      <HeaderView profile={profile} activeTab={activeTab} onSelectTab={selectTab} />

      <main id="main">
        <HeroView profile={profile} skills={skills} experience={experience} onSelectTab={selectTab} />
        <AboutView profile={profile} />
        <ExperienceView experience={experience} />
        <SkillsView skills={skills} />
        <ReferencesView references={references} />
        <ContactView profile={profile} />
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <span>© 2026 {profile?.name}. All rights reserved.</span>
          <span className="footer__mono">Built with React &amp; Node.js · MVVM</span>
        </div>
      </footer>
    </>
  );
}

export default App;
