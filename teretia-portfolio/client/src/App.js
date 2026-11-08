import React from 'react';
import { Sparkle } from 'lucide-react';
import { usePortfolioViewModel } from './viewmodels/usePortfolioViewModel';
import { useThemeViewModel } from './viewmodels/useThemeViewModel';
import { useReveal } from './viewmodels/useReveal';
import { HeaderView } from './views/HeaderView';
import { HeroView } from './views/HeroView';
import { AboutView } from './views/AboutView';
import { ExperienceView } from './views/ExperienceView';
import { SkillsView } from './views/SkillsView';
import { ReferencesView } from './views/ReferencesView';
import { ContactView } from './views/ContactView';
import { FooterView } from './views/FooterView';
import { ChatWidgetView } from './views/ChatWidgetView';

// Decorative twinkling sparkles scattered across the background
const SPARKLES = [
  { top: '14%', left: '8%', size: 14, delay: '0s' },
  { top: '22%', left: '88%', size: 18, delay: '1.2s' },
  { top: '48%', left: '4%', size: 12, delay: '2.4s' },
  { top: '62%', left: '92%', size: 16, delay: '0.6s' },
  { top: '78%', left: '14%', size: 18, delay: '3s' },
  { top: '86%', left: '70%', size: 12, delay: '1.8s' },
  { top: '36%', left: '56%', size: 10, delay: '3.6s' }
];

function Backdrop() {
  return (
    <div className="backdrop" aria-hidden="true">
      <div className="orb orb--rose" />
      <div className="orb orb--violet" />
      <div className="orb orb--aqua" />
      <div className="backdrop__grid" />
      {SPARKLES.map((s, i) => (
        <Sparkle
          key={i}
          className="twinkle"
          size={s.size}
          fill="currentColor"
          style={{ top: s.top, left: s.left, animationDelay: s.delay }}
        />
      ))}
    </div>
  );
}

function App() {
  const { profile, skills, experience, references, loading, activeTab, selectTab } = usePortfolioViewModel();
  const { theme, toggleTheme } = useThemeViewModel();
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
      <HeaderView
        profile={profile}
        activeTab={activeTab}
        onSelectTab={selectTab}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main id="main">
        <HeroView profile={profile} skills={skills} experience={experience} onSelectTab={selectTab} />
        <AboutView profile={profile} />
        <ExperienceView experience={experience} />
        <SkillsView skills={skills} />
        <ReferencesView references={references} />
        <ContactView profile={profile} />
      </main>

      <FooterView profile={profile} onSelectTab={selectTab} />
      <ChatWidgetView profile={profile} />
    </>
  );
}

export default App;
